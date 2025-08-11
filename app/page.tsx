import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { Architecture } from "@/components/architecture"
import { Integration } from "@/components/integration"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSolution />
      <Architecture />
      <Integration />
      <Footer />
    </main>
  )
}
