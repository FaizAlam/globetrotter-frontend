"use client"

import { motion } from "framer-motion"

interface ScoreDisplayProps {
  score: {
    correct: number
    incorrect: number
  }
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  console.log("ScoreDisplay", score)
  const totalAnswered = score.correct + score.incorrect
  const percentage = totalAnswered > 0 ? Math.round((score.correct / totalAnswered) * 100) : 0

  return (
    <motion.div
      className="flex justify-between items-center mb-6 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-md backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="font-semibold text-slate-800 dark:text-slate-200">Your Score</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{totalAnswered} destinations explored</p>
      </div>
      <div className="flex gap-4">
        <div className="text-center">
          <span className="text-xl font-bold text-green-500 dark:text-green-400">{score.correct}</span>
          <p className="text-xs text-slate-500 dark:text-slate-400">Correct</p>
        </div>
        <div className="text-center">
          <span className="text-xl font-bold text-red-500 dark:text-red-400">{score.incorrect}</span>
          <p className="text-xs text-slate-500 dark:text-slate-400">Incorrect</p>
        </div>
        <div className="text-center bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg">
          <span className="text-xl font-bold text-primary">{percentage}%</span>
          <p className="text-xs text-slate-500 dark:text-slate-400">Accuracy</p>
        </div>
      </div>
    </motion.div>
  )
}

