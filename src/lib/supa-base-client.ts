// lib/supabase-client.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!; // Service key (NOT public anon key)
export const supabase = createClient(supabaseUrl, supabaseKey);
