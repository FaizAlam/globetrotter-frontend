// Generate a shareable link for challenging friends
export async function generateShareLink(username: string): Promise<string> {
  // In a real app, this would create a unique link with the username encoded
  // For this demo, we'll just return a fake URL
  return `${window.location.origin}/play?challenge=${encodeURIComponent(username)}`
}

// Generate a shareable image with the user's score
export async function generateShareImage(
  username: string,
  score: { correct: number; incorrect: number },
): Promise<string> {
  // In a real app, this would generate a dynamic image
  // For this demo, we'll create a canvas and convert it to a data URL

  return new Promise((resolve) => {
    const canvas = document.createElement("canvas")
    canvas.width = 1200
    canvas.height = 630

    const ctx = canvas.getContext("2d")
    if (!ctx) return resolve("/placeholder.svg?height=630&width=1200")

    // Background
    ctx.fillStyle = "#f8fafc"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Border
    ctx.strokeStyle = "#e2e8f0"
    ctx.lineWidth = 20
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20)

    // Title
    ctx.fillStyle = "#0f172a"
    ctx.font = "bold 80px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("GLOBETROTTER", canvas.width / 2, 150)

    // Username
    ctx.fillStyle = "#334155"
    ctx.font = "50px sans-serif"
    ctx.fillText(`${username} challenges you!`, canvas.width / 2, 250)

    // Score
    ctx.fillStyle = "#0f172a"
    ctx.font = "bold 120px sans-serif"
    ctx.fillText(`${score.correct}`, canvas.width / 2, 400)

    ctx.fillStyle = "#64748b"
    ctx.font = "40px sans-serif"
    ctx.fillText("correct answers", canvas.width / 2, 460)

    // Call to action
    ctx.fillStyle = "#0284c7"
    ctx.font = "bold 60px sans-serif"
    ctx.fillText("Can you beat this score?", canvas.width / 2, 560)

    // Convert to data URL
    resolve(canvas.toDataURL("image/png"))
  })
}

