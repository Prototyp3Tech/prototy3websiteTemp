import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { Database } from '../lib/supabase'

type Tables = Database['public']['Tables']

// Users
export const useUsers = () => {
  const [users, setUsers] = useState<Tables['users']['Row'][]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setUsers(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const createUser = async (userData: Tables['users']['Insert']) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert(userData)
        .select()
        .single()

      if (error) throw error
      setUsers(prev => [data, ...prev])
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return { users, loading, error, fetchUsers, createUser }
}

// Projects
export const useProjects = () => {
  const [projects, setProjects] = useState<Tables['projects']['Row'][]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const createProject = async (projectData: Tables['projects']['Insert']) => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert(projectData)
        .select()
        .single()

      if (error) throw error
      setProjects(prev => [data, ...prev])
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return { projects, loading, error, fetchProjects, createProject }
}

// Leaderboard
export const useLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<Tables['leaderboard']['Row'][]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLeaderboard = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('leaderboard')
        .select(`
          *,
          users (
            full_name,
            avatar_url
          )
        `)
        .order('score', { ascending: false })
        .limit(10)

      if (error) throw error
      setLeaderboard(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const addScore = async (scoreData: Tables['leaderboard']['Insert']) => {
    try {
      const { data, error } = await supabase
        .from('leaderboard')
        .insert(scoreData)
        .select()
        .single()

      if (error) throw error
      await fetchLeaderboard() // Refresh the leaderboard
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    }
  }

  useEffect(() => {
    fetchLeaderboard()
  }, [])

  return { leaderboard, loading, error, fetchLeaderboard, addScore }
}

// Sponsors
export const useSponsors = () => {
  const [sponsors, setSponsors] = useState<Tables['sponsors']['Row'][]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSponsors = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .order('tier', { ascending: false })
        .order('created_at', { ascending: false })

      if (error) throw error
      setSponsors(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const createSponsor = async (sponsorData: Tables['sponsors']['Insert']) => {
    try {
      const { data, error } = await supabase
        .from('sponsors')
        .insert(sponsorData)
        .select()
        .single()

      if (error) throw error
      setSponsors(prev => [data, ...prev])
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    }
  }

  useEffect(() => {
    fetchSponsors()
  }, [])

  return { sponsors, loading, error, fetchSponsors, createSponsor }
}
