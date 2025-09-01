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

// Showcase
export const useShowcase = () => {
  const [showcase, setShowcase] = useState<Tables['showcase']['Row'][]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchShowcase = async () => {
    try {
      setLoading(true)
      console.log('Fetching showcase data from Supabase...')
      
      // First, let's try a simple query to see if the table exists
      const { data: testData, error: testError } = await supabase
        .from('Showcase')
        .select('id')
        .limit(1)

      console.log('Test query result:', { testData, testError })

      if (testError) {
        console.error('Test query error:', testError)
        throw testError
      }

      // Now try the full query
      const { data, error } = await supabase
        .from('Showcase')
        .select('*')
        .order('id', { ascending: true })

      console.log('Full query response:', { data, error })

      if (error) {
        console.error('Full query error:', error)
        throw error
      }
      
      console.log('Showcase data loaded:', data)
      setShowcase(data || [])
    } catch (err) {
      console.error('Error in fetchShowcase:', err)
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const createShowcase = async (showcaseData: Tables['showcase']['Insert']) => {
    try {
      const { data, error } = await supabase
        .from('Showcase')
        .insert(showcaseData)
        .select()
        .single()

      if (error) throw error
      setShowcase(prev => [data, ...prev])
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    }
  }

  useEffect(() => {
    fetchShowcase()
  }, [])

  return { showcase, loading, error, fetchShowcase, createShowcase }
}

// Team
export const useTeam = () => {
  const [team, setTeam] = useState<Tables['team']['Row'][]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTeam = async () => {
    try {
      setLoading(true)
      // Try common variants to account for case/quoting differences
      let data: Tables['team']['Row'][] | null = null
      let lastError: any = null

      // Attempt 1: unquoted Team (maps to lowercase team in Postgres)
      {
        const res = await supabase
          .from('Team')
          .select('*')
          .order('id', { ascending: true })
        if (!res.error) {
          data = (res.data as any) || []
        } else {
          lastError = res.error
        }
      }

      // Attempt 2: quoted "Team" (case-sensitive table name)
      if (!data) {
        const res = await supabase
          .from('"Team"')
          .select('*')
          .order('id', { ascending: true })
        if (!res.error) {
          data = (res.data as any) || []
        } else {
          lastError = res.error
        }
      }

      // Attempt 3: explicit lowercase team
      if (!data) {
        const res = await supabase
          .from('team')
          .select('*')
          .order('id', { ascending: true })
        if (!res.error) {
          data = (res.data as any) || []
        } else {
          lastError = res.error
        }
      }

      if (!data) {
        throw lastError || new Error('Unable to load Team table')
      }
      setTeam(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTeam()
  }, [])

  return { team, loading, error, fetchTeam }
}