"use server"

import { revalidatePath } from "next/cache"

// In-memory storage for users (in a real app, this would be a database)
const users = new Map<string, { username: string; score: { correct: number; incorrect: number } }>()

export async function registerUser(username: string) {
  // Check if username already exists
  if (users.has(username)) {
    throw new Error("Username already taken")
  }

  // Register new user
  users.set(username, {
    username,
    score: { correct: 0, incorrect: 0 },
  })

  return { success: true, message: "User registered successfully" }
}

export async function updateUserScore(username: string, correct: number, incorrect: number) {
  // Update user score
  if (users.has(username)) {
    users.set(username, {
      username,
      score: { correct, incorrect },
    })
  } else {
    // Create user if not exists
    users.set(username, {
      username,
      score: { correct, incorrect },
    })
  }

  revalidatePath("/play")
  return { success: true }
}

export async function getUserScore(username: string) {
  // Get user score
  const user = users.get(username)
  if (!user) {
    return { success: false, message: "User not found" }
  }

  return { success: true, score: user.score }
}

