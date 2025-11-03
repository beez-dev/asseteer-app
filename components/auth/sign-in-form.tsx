"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { SocialButton } from "@/components/ui/social-button"
import { Divider } from "@/components/ui/divider"
import { cn } from "@/lib/utils"

export interface SignInFormProps {
  className?: string
  onSubmit?: (data: { email: string; password: string; rememberMe: boolean }) => void
  onGoogleSignIn?: () => void
  onForgotPassword?: () => void
}

const SignInForm = React.forwardRef<HTMLDivElement, SignInFormProps>(
  ({ className, onSubmit, onGoogleSignIn, onForgotPassword }, ref) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [rememberMe, setRememberMe] = React.useState(false)

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit?.({ email, password, rememberMe })
    }

    return (
      <div
        ref={ref}
        className={cn("w-full max-w-md", className)}
      >
        <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm rounded-3xl">
          <CardHeader className="text-center space-y-2 pb-6 pt-10 px-8">
            <CardTitle className="text-3xl font-bold text-white">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-slate-400 text-base">
              Sign in to your ArtistHub account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300 text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-700/20 border-slate-600/40 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-purple-500/50 focus-visible:ring-purple-500/20"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300 text-sm font-medium">
                  Password
                </Label>
                <PasswordInput
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-slate-700/20 border-slate-600/40 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-purple-500/50 focus-visible:ring-purple-500/20"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-2 pb-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-slate-500 data-[state=checked]:bg-white data-[state=checked]:border-white data-[state=checked]:text-slate-900"
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm text-slate-300 cursor-pointer font-normal"
                  >
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-normal"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 via-purple-500 to-pink-500 hover:from-purple-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold h-12 rounded-xl text-base shadow-lg shadow-purple-500/20"
              >
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <Divider label="Or continue with" className="text-slate-500 text-sm py-4" />

            {/* Google Sign In */}
            <SocialButton
              variant="google"
              onClick={onGoogleSignIn}
              className="w-full h-12 rounded-xl text-base font-medium"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </SocialButton>
          </CardContent>
        </Card>

        {/* Footer Text - Outside card */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Protected by advanced security. Your data is safe with us.
        </p>
      </div>
    )
  }
)
SignInForm.displayName = "SignInForm"

export { SignInForm }
