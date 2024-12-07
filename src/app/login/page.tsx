"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle login

    setError("");
    router.push("/dashboard");
  };

  return (
    <main className="grid grid-cols-12 min-h-screen bg-[#f5f0e8]">
      <div className="lg:col-span-2"></div>
      <div className="hidden lg:flex items-center p-10 lg:col-span-5">
        <h1 className="text-5xl font-bold leading-tight">
          Turn your child&apos;s dream of studying abroad into reality.
        </h1>
      </div>

      <div className="flex items-center justify-center col-span-12 lg:col-span-4 px-4">
        <div className="mx-auto w-full max-w-md space-y-6 p-8 bg-white rounded-3xl shadow-lg">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Login</h2>
          </div>

          <form className="space-y-4" onSubmit={handleLoginSubmit}>
            <div className="space-y-2">
              <Input
                id="email"
                placeholder="Email address"
                type="email"
                required
                className="rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2 relative">
              <Input
                id="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                required
                className="rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-0 text-gray-600 text-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              )}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="space-y-4">
              <Button
                className="w-full rounded-xl bg-[#00813d] hover:bg-[#006731] text-lg h-12"
                type="submit"
              >
                Login
              </Button>
              <div className="text-center">
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <p className="text-center text-sm">
                Don&apos;t have an account?
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
