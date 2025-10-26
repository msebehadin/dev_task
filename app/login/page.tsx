"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppStore } from "@/lib/store/useAppStore"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
  const { setUser } = useAppStore()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async () => {
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields.")
      return
    }

    setLoading(true)

    // Simulate API login
    setTimeout(() => {
      setLoading(false)
      setUser({ email })
      alert("Login successful!")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100 px-4">
      <Card className="w-full max-w-sm bg-gradient-to-b from-white to-gray-50 shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <CardHeader className="text-center space-y-1 pb-2">
          <CardTitle className="text-3xl font-bold text-gray-800 tracking-tight">
            Welcome Back To Dev Task
          </CardTitle>
          <CardDescription className="text-gray-500 text-sm">
            Please sign in to continue
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="bg-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-500 font-medium bg-red-50 border border-red-200 rounded-md p-2 text-center">
              {error}
            </p>
          )}

          {/* Login Button */}
          <Button
            className="w-full bg-black hover:bg-black-700 text-white font-semibold py-2 rounded-md transition duration-200 flex items-center justify-center"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>

          {/* Extra Links */}
          <div className="text-center text-sm text-black-600 mt-4">
            <span>Don’t have an account? </span>
            <a
              href="/register"
              className="text-black-600 hover:text-indigo-700 font-medium"
            >
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
