"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GameClue } from "@/components/game-clue"
import { AnswerOptions } from "@/components/answer-options"
import { GameResult } from "@/components/game-result"
import { ChallengeButton } from "@/components/challenge-button"
import { ScoreDisplay } from "@/components/score-display"
import { fetchRandomQuestion, submitAnswer, getUserDetails } from "@/lib/api"
import type { Question, AnswerResponse } from "@/lib/types"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function GameContainer() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answerResult, setAnswerResult] = useState<AnswerResponse | null>(null)
  const [score, setScore] = useState({ correct: 0, incorrect: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [username, setUsername] = useState<string | null>(null)
  const { toast } = useToast()
  const effectRun = useRef(false);

  useEffect(() => {
    if (!effectRun.current) {
      const storedUsername = localStorage.getItem("globetrotter-username");
      if (storedUsername) {
        setUsername(storedUsername);
  
        const storedScore = localStorage.getItem(`globetrotter-score-${storedUsername}`);
        if (storedScore) {
          setScore(JSON.parse(storedScore));
        }
        else{
          getUserDetails(storedUsername).then((data) => {
            // setScore(data.score);.
            console.log("data", data);
            setScore({ correct: parseInt(data.correct), incorrect: parseInt(data.incorrect)});
            localStorage.setItem(`globetrotter-score-${username}`, JSON.stringify(score))
          }

          );
        }
      }
  
      loadNewQuestion();  
      effectRun.current = true; // Mark that the effect has run
    }
  }, []);

  const loadNewQuestion = async () => {
    setIsLoading(true)
    setSelectedAnswer(null)
    setAnswerResult(null)

    try {
      const question = await fetchRandomQuestion()
      setCurrentQuestion(question)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load question. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAnswer = async (answer: string) => {
    if (!currentQuestion || selectedAnswer) return

    setSelectedAnswer(answer)

    try {
      const result = await submitAnswer(username || "anonymous", currentQuestion.question_id, answer)

      setAnswerResult(result)
      // setScore({result.score})
      setScore({ correct: parseInt(result.score.correct), incorrect: parseInt(result.score.incorrect)});

      // Save score to localStorage if user is registered
      if (username) {
        localStorage.setItem(`globetrotter-score-${username}`, JSON.stringify(score))
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit answer. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-slate-600 dark:text-slate-300">Preparing your next destination...</p>
      </div>
    )
  }

  if (!currentQuestion) {
    return (
      <div className="text-center p-8 bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-md">
        <p className="text-lg mb-4">Failed to load question. Please try again.</p>
        <Button onClick={loadNewQuestion}>Retry</Button>
      </div>
    )
  }
  console.log("score", score);
  return (
    <div className="max-w-3xl mx-auto">
      <ScoreDisplay score={score} />

      <Card className="mb-6 overflow-hidden border-0 shadow-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
        <div className="dark:bg-primary/5 p-3 border-b border-primary/20" style={{backgroundColor:'hsl(0deg 0% 0.79% / 49%)'}}>
          <h2 className="text-xl font-semibold text-center text-primary-foreground">
            {selectedAnswer ? "Destination Revealed!" : "Mystery Destination"}
          </h2>
        </div>
        <CardContent className="p-6">
          <GameClue clue={currentQuestion.clue} />

          {!selectedAnswer ? (
            <AnswerOptions options={currentQuestion.options} onSelect={handleAnswer} />
          ) : (
            answerResult && (
              <GameResult
                isCorrect={answerResult.correct}
                selectedAnswer={selectedAnswer}
                funFacts={answerResult.funFact}
              />
            )
          )}

          {selectedAnswer && (
            <div className="mt-6 flex justify-center">
              <Button onClick={loadNewQuestion} size="lg" className="group">
                Next Destination
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <ChallengeButton username={username} score={score} />
    </div>
  )
}

