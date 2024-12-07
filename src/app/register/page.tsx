"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, Country, State } from "@/lib/countries-states";

export default function RegisterPage() {
  const [step, setStep] = useState<"register" | "additional-info">("register");
  const [userType, setUserType] = useState<"parent" | "student">("parent");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);

  const incomeRanges = [
    "Less than $20,000",
    "$20,000 - $34,999",
    "$35,000 - $49,999",
    "$50,000 - $74,999",
    "$75,000 - $99,999",
    "$100,000 - $149,999",
    "$150,000 - $199,999",
    "$200,000 or more",
  ];

  const isPasswordValid = (password: string) => {
    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailPart = email.split("@")[0];
    if (!emailPart) return false;

    return (
      strongPasswordRegex.test(password) &&
      !password.toLowerCase().includes(emailPart.toLowerCase())
    );
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPasswordValid(password)) {
      setError(
        "Password must be at least 8 characters long, contain an uppercase letter, a number, a special character, and not contain parts of your email."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    setStep("additional-info");
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
          {step === "register" ? (
            <>
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold">Create your account</h2>
              </div>

              <form className="space-y-4" onSubmit={handleRegisterSubmit}>
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
                  <p className="text-xs text-muted-foreground">
                    Use a password that is at least 8 characters long, contains
                    an uppercase letter, a number, a special character, and does
                    not contain parts of your email.
                  </p>
                </div>
                <div className="space-y-2 relative">
                  <Input
                    id="confirm-password"
                    placeholder="Re-enter password"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="rounded-xl"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {confirmPassword && (
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-3 top-0 text-gray-600 text-sm"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  )}
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
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
                    Sign Up
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
                      <Select
                        onValueChange={(value) => {
                          const country = countries.find(
                            (c) => c.name === value
                          );
                          setSelectedCountry(country || null);
                          setSelectedState(null);
                        }}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem
                              key={country.code2}
                              value={country.name}
                            >
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select
                        onValueChange={(value) => {
                          const state = selectedCountry?.states.find(
                            (s) => s.name === value
                          );
                          setSelectedState(state || null);
                        }}
                        disabled={
                          !selectedCountry ||
                          selectedCountry.states.length === 0
                        }
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedCountry?.states.map((state) => (
                            <SelectItem key={state.code} value={state.name}>
                              {state.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <DatePicker />
                      <Select>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select annual income" />
                        </SelectTrigger>
                        <SelectContent>
                          {incomeRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <DatePicker />
                        <Select>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Input
                        placeholder="School"
                        className="rounded-xl"
                        required
                      />
                      <Select
                        onValueChange={(value) => {
                          const country = countries.find(
                            (c) => c.name === value
                          );
                          setSelectedCountry(country || null);
                          setSelectedState(null);
                        }}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem
                              key={country.code2}
                              value={country.name}
                            >
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select
                        onValueChange={(value) => {
                          const state = selectedCountry?.states.find(
                            (s) => s.name === value
                          );
                          setSelectedState(state || null);
                        }}
                        disabled={
                          !selectedCountry ||
                          selectedCountry.states.length === 0
                        }
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedCountry?.states.map((state) => (
                            <SelectItem key={state.code} value={state.name}>
                              {state.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {["9th", "10th", "11th", "12th"].map((grade) => (
                            <SelectItem key={grade} value={grade}>
                              {grade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
