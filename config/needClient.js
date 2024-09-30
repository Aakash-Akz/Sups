import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUP_URL
const supabaseKey = process.env.SUP_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase