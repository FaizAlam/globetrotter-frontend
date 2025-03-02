import { Suspense } from "react"
import { GameContainer } from "@/components/game-container"
import { FriendChallenge } from "@/components/friend-challenge"

export default function PlayPage({ searchParams }: { searchParams: { challenge?: string } }) {
  const challengeUsername = searchParams.challenge

  console.log("challengeUsername", challengeUsername)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="container mx-auto px-4">
        {challengeUsername && <FriendChallenge username={challengeUsername} />}
        <Suspense fallback={<div className="text-center py-12">Loading your adventure...</div>}>
          <GameContainer />
        </Suspense>
      </div>
    </div>
  )
}

