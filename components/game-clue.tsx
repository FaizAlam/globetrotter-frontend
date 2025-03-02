import { MapPin } from "lucide-react"

interface GameClueProps {
  clue: string
}

export function GameClue({ clue }: GameClueProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <MapPin className="h-6 w-6 text-primary" />
        Where in the world is this?
      </h2>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-900/30 shadow-inner">
        <p className="text-lg italic text-slate-700 dark:text-slate-300">"{clue}"</p>
      </div>
    </div>
  )
}

