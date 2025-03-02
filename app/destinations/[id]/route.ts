import { NextResponse } from "next/server"
import { destinations } from "@/lib/data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // Simulate API latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  const destination = destinations.find((d) => d.id === params.id)

  if (!destination) {
    return new NextResponse(JSON.stringify({ error: "Destination not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    })
  }

  return NextResponse.json(destination)
}

