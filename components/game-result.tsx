"use client"

import { useEffect } from "react"
import confetti from "canvas-confetti"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion } from "framer-motion"

interface GameResultProps {
  isCorrect: boolean
  selectedAnswer: string
  funFacts: string[]
}

export function GameResult({ isCorrect, selectedAnswer, funFacts }: GameResultProps) {
  useEffect(() => {
    // Trigger confetti if answer is correct
    if (isCorrect) {
      const duration = 3 * 1000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      }, 250)
    }
  }, [isCorrect])

  return (
    <motion.div
      className="mt-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Alert
        variant={isCorrect ? "default" : "destructive"}
        className={`border-2 ${isCorrect ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"}`}
      >
        <div className="flex items-center gap-2">
          {isCorrect ? (
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
          )}
          <AlertTitle className="text-xl font-bold">{isCorrect ? "Correct!" : "Not quite right!"}</AlertTitle>
        </div>
        <AlertDescription className="mt-2 text-base">
          {isCorrect
            ? `You guessed it! This is indeed ${selectedAnswer}.`
            : `You guessed ${selectedAnswer}, but that's not correct.`}
        </AlertDescription>
      </Alert>

      {funFacts.map((fact, index) => (
        <motion.div
          key={index}
          className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800 shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
        >
          <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-300 flex items-center">
            <span className="text-xl mr-2">💡</span> Fun Fact:
          </h4>
          <p className="text-slate-700 dark:text-slate-300">{fact}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

