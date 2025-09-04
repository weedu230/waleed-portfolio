import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://1963b332-0b5a-4e33-97a8-f4ff64b29911.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IjE5NjNiMzMyMGI1YTRlMzM5N2E4ZjRmZjY0YjI5OTExIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0MjA0NjIsImV4cCI6MjA0MDk5NjQ2Mn0.JnhBYwMJHdZjPhjEvdB_p6Lxef2tXHXCVUwmJ6qGsKc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)