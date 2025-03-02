"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UserRegistration } from "@/components/user-registration"
import { generateInviteLink } from "@/lib/api"
import { generateShareImage } from "@/lib/share-utils"

interface ChallengeButtonProps {
  username: string | null
  score: {
    correct: number
    incorrect: number
  }
}

export function ChallengeButton({ username, score }: ChallengeButtonProps) {
  const [shareLink, setShareLink] = useState("")
  const [shareImage, setShareImage] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)

  const handleOpenShare = async () => {
    if (!username) {
      setShowRegistration(true)
      return
    }

    if (!shareLink) {
      setIsGenerating(true)
      try {
        const link = await generateInviteLink(username)
        console.log("Generated link", link)
        const image = await generateShareImage(username, score)
        setShareLink(link)
        setShareImage(image)
      } catch (error) {
        console.error("Failed to generate share content", error)
      } finally {
        setIsGenerating(false)
      }
    }
  }

  const shareToWhatsApp = () => {
    const text = `I've been playing Globetrotter and scored ${score.correct} correct answers! Can you beat me? Play here: ${shareLink}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleRegistrationComplete = (newUsername: string) => {
    setShowRegistration(false)
    // Force a page reload to update the username state in the parent component
    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 shadow-md"
          onClick={handleOpenShare}
        >
          <Users className="mr-2 h-4 w-4" />
          Challenge a Friend
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {showRegistration ? (
          <>
            <DialogHeader>
              <DialogTitle>Create an account to challenge friends</DialogTitle>
              <DialogDescription>
                You need to register with a unique username before challenging friends.
              </DialogDescription>
            </DialogHeader>
            <UserRegistration onComplete={handleRegistrationComplete} />
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Challenge your friends</DialogTitle>
              <DialogDescription>Share your score and challenge your friends to beat it!</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4 py-4">
              {isGenerating ? (
                <div className="text-center p-4">Generating your challenge...</div>
              ) : (
                <>
                  {shareImage && (
                    <div className="border rounded-lg overflow-hidden shadow-md">
                      <img src={shareImage || "/placeholder.svg"} alt="Challenge card" className="w-full h-auto" />
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <Button
                      className="flex-1"
                      onClick={() => {
                        navigator.clipboard.writeText(shareLink)
                      }}
                    >
                      Copy Link
                    </Button>
                    <Button variant="secondary" className="flex-1" onClick={shareToWhatsApp}>
                      Share to WhatsApp
                    </Button>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

