import { getSupabaseAdmin } from "@/lib/supabase";

/**
 * Database-backed admin accounts. Password hashing and verification happen
 * inside Postgres (bcrypt via pgcrypto) through SECURITY DEFINER functions, so
 * plaintext passwords and hashes never leave the database.
 */

/** Returns true when the email/password match an admin row. */
export async function verifyAdmin(email: string, password: string): Promise<boolean> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.rpc("verify_admin", {
    p_email: email,
    p_password: password,
  });
  if (error) throw new Error(error.message);
  // verify_admin returns the admin email when valid, null otherwise.
  return Boolean(data);
}

/** Create a new admin or update an existing one's password/name. Returns the id. */
export async function upsertAdmin(
  email: string,
  password: string,
  name?: string
): Promise<string> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.rpc("upsert_admin", {
    p_email: email,
    p_password: password,
    p_name: name ?? null,
  });
  if (error) throw new Error(error.message);
  return data as string;
}
