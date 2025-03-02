import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlobeIcon, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-full p-6 shadow-xl">
              <GlobeIcon className="h-20 w-20 mx-auto text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            <span className="text-primary">Globe</span>trotter
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Test your geography knowledge with cryptic clues about famous destinations around the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link href="/play" className="col-span-1 md:col-span-2">
              <Button size="lg" className="w-full text-lg h-14 group">
                <MapPin className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Start Exploring
                <span className="ml-2 text-primary-foreground/80">→</span>
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-slate-800/80 p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Cryptic Clues</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Solve mysterious hints about famous places around the world.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Learn Geography</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Discover fascinating facts about destinations across the globe.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Challenge Friends</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Compete with friends to see who knows more about our world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

