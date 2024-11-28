"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";

export default function RegisterPage() {
  const [step, setStep] = useState<"register" | "additional-info">("register");
  const [userType, setUserType] = useState<"parent" | "student">("parent");

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
          {step === "register" ? (
            <>
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold">Create your account</h2>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep("additional-info");
                }}
              >
                <div className="space-y-2">
                  <Input
                    id="email"
                    placeholder="Email address"
                    type="email"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    required
                    className="rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground">
                    Use an 8+ character alphanumeric password that&apos;s unique
                    and unrelated to your name or email.
                  </p>
                </div>
                <div className="space-y-2">
                  <Input
                    id="confirm-password"
                    placeholder="Re-enter password"
                    type="password"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    By registering, you are accepting{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:underline"
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                  <Button
                    className="w-full rounded-xl bg-[#00813d] hover:bg-[#006731] text-lg h-12"
                    type="submit"
                  >
                    Sign In
                  </Button>
                  <p className="text-center text-sm">
                    Already have an account? Then please{" "}
                    <Link
                      href="/login"
                      className="text-primary hover:underline"
                    >
                      sign in
                    </Link>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">
                  Little information about you
                </h2>

                <RadioGroup
                  defaultValue="parent"
                  className="flex gap-8"
                  onValueChange={(value) =>
                    setUserType(value as "parent" | "student")
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parent" id="parent" />
                    <Label htmlFor="parent">Parent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">Student</Label>
                  </div>
                </RadioGroup>

                <form className="space-y-4">
                  <Input placeholder="Name" className="rounded-xl" required />

                  {userType === "parent" ? (
                    <>
                      <Input
                        placeholder="Country"
                        className="rounded-xl"
                        required
                      />
                      <Input
                        placeholder="State"
                        className="rounded-xl"
                        required
                      />

                      <DatePicker />
                      <Input
                        placeholder="Annual income"
                        className="rounded-xl"
                        type="number"
                        required
                      />
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <DatePicker />
                        <Input
                          placeholder="Gender"
                          className="rounded-xl"
                          required
                        />
                      </div>
                      <Input
                        placeholder="School"
                        className="rounded-xl"
                        required
                      />
                      <Input
                        placeholder="Location"
                        className="rounded-xl"
                        required
                      />
                      <Input
                        placeholder="Curriculum"
                        className="rounded-xl"
                        required
                      />
                      <Input
                        placeholder="Grade"
                        className="rounded-xl"
                        required
                      />
                    </>
                  )}

                  <div className="flex justify-end pt-4">
                    <Button
                      type="submit"
                      size="icon"
                      className="rounded-full w-12 h-12 bg-[#00813d] hover:bg-[#006731]"
                    >
                      <ChevronRight className="h-6 w-6" />
                      <span className="sr-only">Continue</span>
                    </Button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
