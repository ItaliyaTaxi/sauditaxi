// Create or update a database-backed admin account.
//
//   node scripts/create-admin.mjs <email> <password> [name]
//
// Reads SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY from .env. The password is
// hashed with bcrypt inside Postgres (pgcrypto) — it is never stored in plain
// text. Requires the schema in supabase/schema.sql to have been applied first.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Minimal .env loader (no extra dependency).
function loadEnv() {
  try {
    const text = readFileSync(join(root, ".env"), "utf8");
    for (const line of text.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
    }
  } catch {
    /* .env is optional if the vars are already in the environment */
  }
}

async function main() {
  loadEnv();

  const [email, password, name] = process.argv.slice(2);
  if (!email || !password) {
    console.error("Usage: node scripts/create-admin.mjs <email> <password> [name]");
    process.exit(1);
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
    process.exit(1);
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase.rpc("upsert_admin", {
    p_email: email,
    p_password: password,
    p_name: name ?? null,
  });

  if (error) {
    console.error("Failed to create admin:", error.message);
    process.exit(1);
  }
  console.log(`Admin ready: ${email.toLowerCase().trim()} (id: ${data})`);
}

main();
