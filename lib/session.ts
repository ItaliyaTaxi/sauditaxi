import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken, type AdminSession } from "@/lib/auth";

/** Read + verify the admin session from cookies (server components / routes). */
export async function getSession(): Promise<AdminSession | null> {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}
