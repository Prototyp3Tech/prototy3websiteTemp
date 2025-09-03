import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          tags: string[]
          image_url: string | null
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: string
          tags: string[]
          image_url?: string | null
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          category?: string
          tags?: string[]
          image_url?: string | null
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      leaderboard: {
        Row: {
          id: string
          user_id: string
          score: number
          category: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          score: number
          category: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          score?: number
          category?: string
          created_at?: string
        }
      }
      sponsors: {
        Row: {
          id: string
          name: string
          tier: 'platinum' | 'gold' | 'silver'
          logo_url: string | null
          description: string
          website_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          tier: 'platinum' | 'gold' | 'silver'
          logo_url?: string | null
          description: string
          website_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          tier?: 'platinum' | 'gold' | 'silver'
          logo_url?: string | null
          description?: string
          website_url?: string | null
          created_at?: string
        }
      }
      showcase: {
        Row: {
          id: string
          Title: string
          description: string
          bullet_1: string
          bullet_2: string
          bullet_3: string
          bullet_4: string
          core_tech_COMMA_SEPRATED_ONLY: string
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          Title: string
          description: string
          bullet_1: string
          bullet_2: string
          bullet_3: string
          bullet_4: string
          core_tech_COMMA_SEPRATED_ONLY: string
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          Title?: string
          description?: string
          bullet_1?: string
          bullet_2?: string
          bullet_3?: string
          bullet_4?: string
          core_tech_COMMA_SEPRATED_ONLY?: string
          image_url?: string | null
          created_at?: string
        }
      }
      team: {
        Row: {
          id: string
          Name: string
          position: string
          description: string
          image_url: string | null
        }
        Insert: {
          id?: string
          Name: string
          position: string
          description: string
          image_url?: string | null
        }
        Update: {
          id?: string
          Name?: string
          position?: string
          description?: string
          image_url?: string | null
        }
      }
      InterestForm: {
        Row: {
          id: string
          name: string
          email: string
          university: string
          learning_journey: string
          heard_about: string
          anything_else: string | null
          interests: string
          'interest-in-prototyp3': string
        }
        Insert: {
          id?: string
          name: string
          email: string
          university: string
          learning_journey: string
          heard_about: string
          anything_else?: string | null
          interests: string
          'interest-in-prototyp3': string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          university?: string
          learning_journey?: string
          heard_about?: string
          anything_else?: string | null
          interests?: string
          'interest-in-prototyp3'?: string
        }
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
