import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "admin_session";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret(): Uint8Array {
  const secret =
    process.env.AUTH_SECRET ||
    // Dev fallback so the app runs before AUTH_SECRET is set. DO set it in prod.
    "dev-insecure-secret-change-me-please-32chars";
  return new TextEncoder().encode(secret);
}

export interface AdminSession {
  email: string;
}

/**
 * Validate credentials against the env-based admin account. This is the
 * bootstrap / master fallback — database-backed admins (see lib/admins.ts) are
 * the primary source, checked first in the login route.
 */
export function validateCredentials(email: string, password: string): boolean {
  const adminEmail = process.env.ADMIN_LOGIN_EMAIL || process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) return false;
  return (
    email.trim().toLowerCase() === adminEmail.trim().toLowerCase() &&
    password === adminPassword
  );
}

export async function createSessionToken(email: string): Promise<string> {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(getSecret());
}

/** Pure verify — safe to use in edge middleware (no next/headers). */
export async function verifySessionToken(
  token: string | undefined | null
): Promise<AdminSession | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    if (typeof payload.email === "string") return { email: payload.email };
    return null;
  } catch {
    return null;
  }
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: MAX_AGE,
};
