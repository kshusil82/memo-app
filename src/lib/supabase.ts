import { createClient } from '@supabase/supabase-js'

// Supabase 프로젝트 설정
const supabaseUrl = 'https://gskkkguynxiupqhspwwc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdza2trZ3V5bnhpdXBxaHNwd3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyODUwMTUsImV4cCI6MjA2OTg2MTAxNX0.fSIaKb3S0z_Il3pcRjb4TxpvUXYzicHHoGtQ8XnpNCM'

// Supabase 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 데이터베이스 타입 정의 (기존 Memo 인터페이스와 일치)
export interface Database {
  public: {
    Tables: {
      memos: {
        Row: {
          id: string
          title: string
          content: string
          category: string
          tags: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          category: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          category?: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}