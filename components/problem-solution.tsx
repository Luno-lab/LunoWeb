"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Puzzle, Layers, Clock, Shield, Code, ArrowRight } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Clock,
    title: "10-Minute Integration",
    description: "Unified TypeScript-first SDK and React Hooks for standardized wallet integration.",
    badge: "Fast Setup",
  },
  {
    icon: Zap,
    title: "Unified Account Model",
    description: "Single integration for global account state management across all wallets.",
    badge: "State Management",
  },
  {
    icon: Puzzle,
    title: "Ready-to-Use Components",
    description: "Fully customizable UI component suite with accessibility built-in.",
    badge: "UI Components",
  },
  {
    icon: Layers,
    title: "Built-in TanStack Query",
    description: "Efficient data subscription with universal hooks and smart caching.",
    badge: "Performance",
  },
  {
    icon: Shield,
    title: "EVM Compatible (Coming Soon)",
    description: "Support both Polkadot SDK-based blockchains and EVM chains with unified account connections.",
    badge: "Multi-Chain",
  },
  {
    icon: Code,
    title: "Developer Experience",
    description: "Complete TypeScript support with full type hints and comprehensive documentation.",
    badge: "TypeScript",
  },
]

export function ProblemSolution() {
  const scrollToIntegration = () => {
    const element = document.getElementById("integration")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Black Value Proposition Section */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              LunoKit simplifies wallet integration, so developers can focus on building great products             </h2>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
              onClick={scrollToIntegration}
            >
              Get setup in 10 minutes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mx-auto mb-6 h-16 w-16 rounded-lg bg-gray-800 flex items-center justify-center">
                <div className="h-8 w-8 border border-gray-600 rounded transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Dynamic Imports</h3>
              <p className="text-gray-400">
                Simple React hooks and components for seamless wallet integration.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mx-auto mb-6 h-16 w-16 rounded-lg bg-gray-800 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="h-3 w-3 bg-gray-600 rounded"></div>
                  <div className="h-3 w-3 bg-gray-600 rounded"></div>
                  <div className="h-3 w-3 bg-gray-600 rounded"></div>
                  <div className="h-3 w-3 bg-gray-600 rounded"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multiple Chain Support</h3>
              <p className="text-gray-400">
                The best connect wallet button for allowing users to switch between chains/networks with ease.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mx-auto mb-6 h-16 w-16 rounded-lg bg-gray-800 flex items-center justify-center">
                <div className="space-y-1">
                  <div className="h-2 w-8 bg-gray-600 rounded"></div>
                  <div className="h-2 w-6 bg-gray-600 rounded"></div>
                  <div className="h-2 w-4 bg-gray-600 rounded"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Minimal Dependencies</h3>
              <p className="text-gray-400">
                All wallet dependencies are included in separate packages, so you only include the ones you want to use in your app.
              </p>
            </motion.div>

            
          </ScrollReveal>
        </div>
      </section>

      {/* White Benefits Section */}
      <section id="benefits" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <ScrollReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose LunoKit?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to build Web3 applications on Polkadot, designed for developer productivity
            </p>
          </ScrollReveal> */}

          <StaggerContainer className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 items-center">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <Card className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="rounded-lg bg-gray-50 p-2">
                        <benefit.icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-gray-100">
                        {benefit.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          {/* <ScrollReveal delay={0.3} className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Trusted by developers building on Polkadot</span>
            </div>
          </ScrollReveal> */}
        </div>
      </section>
    </>
  )
}
