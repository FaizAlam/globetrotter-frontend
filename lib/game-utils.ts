import { destinations } from "./data"
import type { Destination } from "./types"

// Get a random destination from the dataset
export async function getRandomDestination(): Promise<Destination> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const randomIndex = Math.floor(Math.random() * destinations.length)
  return destinations[randomIndex]
}

// Shuffle an array using Fisher-Yates algorithm
export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// Get a unique list of destinations for options
export function getUniqueOptions(correctAnswer: string, count = 3): string[] {
  const allDestinations = destinations.map((d) => d.name)
  const filteredDestinations = allDestinations.filter((name) => name !== correctAnswer)
  const shuffled = shuffle(filteredDestinations)
  return shuffled.slice(0, count)
}

