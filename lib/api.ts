import type { Question, AnswerResponse, UserScore, ChallengerScore } from "./types"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ""

export async function registerUser(username: string): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_BASE_URL}/game/user/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_name: username }),
  })

  const data = await response.json()

  console.log(data)
  if (!response.ok) {
    console.log(response);
    console.log("not okay?");
    throw new Error(data.message || "Failed to register user")
  }



  return data
}

export async function fetchRandomQuestion(): Promise<Question> {
  const response = await fetch(`${API_BASE_URL}/game/random_question/`)

  if (!response.ok) {
    throw new Error("Failed to fetch question")
  }

  return response.json()
}

export async function submitAnswer(
  username: string,
  questionId: string,
  selectedAnswer: string,
): Promise<AnswerResponse> {
  const response = await fetch(`${API_BASE_URL}/game/submit_answer/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      questionId,
      selectedAnswer,
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to submit answer")
  }

  return response.json()
}

export async function generateInviteLink(username: string): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/game/invite/?username=${encodeURIComponent(username)}`)

  if (!response.ok) {
    throw new Error("Failed to generate invite link")
  }

  const data = await response.json()
  return data.inviteLink
}

export async function getInviterScore(username: string): Promise<ChallengerScore> {
  const response = await fetch(`${API_BASE_URL}/game/invite/${encodeURIComponent(username)}/`)

  if (!response.ok) {
    throw new Error("Failed to fetch inviter score")
  }

  const data= await response.json()
  return data.score
}


export async function getUserDetails(username: string): Promise<UserScore> {
  const response = await fetch(`${API_BASE_URL}/game/user/?username=${encodeURIComponent(username)}`)

  if (!response.ok) {
    throw new Error("Failed to fetch user details")
  }

  return response.json()
}