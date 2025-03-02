export interface Question {
  question_id: string
  clue: string
  options: string[]
}

export interface AnswerResponse {
  correct: boolean
  funFact: string[]
  score: {
    correct: string
    incorrect: string
  }
}

export interface Destination {
  id: string
  name: string
  clues: string[]
  funFacts: string[]
  options: string[]
}

export interface UserScore {
  correct: number
  incorrect: number
}

export interface ApiError {
  message: string
}

export interface ChallengerScore {
  score: number
}