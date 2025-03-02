import { NextResponse } from "next/server"
import { destinations } from "@/lib/data"

export async function GET() {
  // Simulate API latency
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Get a random destination
  const randomIndex = Math.floor(Math.random() * destinations.length)
  const destination = destinations[randomIndex]
  console.log("destination", destination)


  return NextResponse.json(destination)
}

