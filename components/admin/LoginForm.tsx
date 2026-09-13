"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LoaderCircle, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Login failed.");
        setLoading(false);
        return;
      }
      const next = new URLSearchParams(window.location.search).get("next");
      router.push(next && next.startsWith("/admin") ? next : "/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-midnight px-4">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-midnight-soft p-8 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
            <Image src="/images/logo.webp" alt="Saudi Private Transfers" width={36} height={36} className="size-full object-contain" />
          </span>
          <span className="text-lg font-bold text-white">
            Saudi Private Transfers <span className="text-brass">CRM</span>
          </span>
        </div>
        <h1 className="mt-6 text-xl font-bold text-white">Admin sign in</h1>
        <p className="mt-1 text-sm text-white/60">
          Restricted area. Authorised staff only.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="login-email" className="text-white/80">Email</Label>
            <Input
              id="login-email"
              name="email"
              type="email"
              autoComplete="username"
              required
              className="bg-midnight text-white border-white/10"
            />
          </div>
          <div>
            <Label htmlFor="login-password" className="text-white/80">Password</Label>
            <div className="relative">
              <Input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="bg-midnight text-white border-white/10 pe-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 end-0 flex items-center px-3 text-white/50 hover:text-white"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-400">{error}</p>
          )}

          <Button
            type="submit"
            variant="gold"
            size="lg"
            className="w-full bg-brass text-midnight hover:bg-brass-soft"
            disabled={loading}
          >
            {loading && <LoaderCircle className="size-4 animate-spin" />}
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}
