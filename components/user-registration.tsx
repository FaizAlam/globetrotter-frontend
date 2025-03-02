"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { registerUser } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

interface UserRegistrationProps {
  onComplete?: (username: string) => void
}

export function UserRegistration({ onComplete }: UserRegistrationProps) {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) {
      toast({
        title: "Username required",
        description: "Please enter a username to continue",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const result = await registerUser(username)
      
      localStorage.setItem("globetrotter-username", username)

      toast({
        title: "Welcome aboard!",
        description: `You're registered as ${username}. Happy exploring!`,
      })

      if (onComplete) {
        onComplete(username)
      }
    
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "Please try again with a different username",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="username">Choose a username</Label>
        <Input
          id="username"
          placeholder="Enter your explorer name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-muted/50"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Registering...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  )
}

