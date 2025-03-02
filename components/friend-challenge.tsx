"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { getInviterScore } from "@/lib/api"
import { Trophy } from "lucide-react"

interface FriendChallengeProps {
  username: string
}

export function FriendChallenge({ username }: FriendChallengeProps) {
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadFriendScore() {
      try {
        const score = await getInviterScore(username)
        console.log("score", score)
        setScore(score)
      } catch (error) {
        console.error("Failed to load friend's score:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadFriendScore()
  }, [username])

  if (isLoading || !score) {
    return null
  }

  return (
    <Card className="mb-6 bg-gradient-to-r from-amber-50 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 border-yellow-200 dark:border-yellow-900/50 shadow-md overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-200 dark:bg-yellow-700 p-2 rounded-full">
            <Trophy className="h-5 w-5 text-yellow-700 dark:text-yellow-200" />
          </div>
          <div>
            <h3 className="font-medium">
              <span className="font-bold text-amber-800 dark:text-amber-300">{username}</span> challenged you!
            </h3>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              They scored {score} correct answers. Can you beat them?
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

