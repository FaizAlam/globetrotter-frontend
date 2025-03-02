"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { shuffle } from "@/lib/game-utils"
import { motion } from "framer-motion"

interface AnswerOptionsProps {
  options: string[]
  onSelect: (answer: string) => void
}

export function AnswerOptions({ options, onSelect }: AnswerOptionsProps) {
  const [shuffledOptions] = useState(() => shuffle(options))

  return (
    <div className="mt-8">
      <h3 className="text-xl font-medium mb-4 text-center">Select your answer:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {shuffledOptions.map((option, index) => (
          <motion.div
            key={option}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              className="p-4 h-auto text-lg w-full bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 transition-all duration-200 border-slate-200 dark:border-slate-600"
              onClick={() => onSelect(option)}
            >
              {option}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

