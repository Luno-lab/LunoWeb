import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, Cpu, Palette } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal"

const architectureLayers = [
  {
    icon: Cpu,
    name: "@luno-kit/core",
    title: "Core Abstraction Layer",
    description: "Unified connector interface and type system with standardized wallet integration",
    features: [
      "Unified connector interface",
      "Chain configuration management",
      "Account management abstraction",
      "Signer abstraction layer",
    ],
  },
  {
    icon: Layers,
    name: "@luno-kit/react",
    title: "React Integration Layer",
    description: "Built with React 18+ and TypeScript, featuring reactive state management",
    features: [
      "Lightweight Zustand state management",
      "TanStack Query integration",
      "Dedot API instance management",
      "20+ essential hooks with smart reconnection",
    ],
  },
  {
    icon: Palette,
    name: "@luno-kit/ui",
    title: "UI Component Layer",
    description: "Modern, accessible UI components with full customization support",
    features: [
      "Tailwind CSS 4.x styling",
      "Radix UI accessibility",
      "Plug-and-play components",
      "Fully customizable theming",
    ],
  },
]

export function Architecture() {
  return (
    <section id="architecture" className="py-24 sm:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Architecture</h2>
          <p className="mt-4 text-lg text-gray-400">
            Three-layer architecture designed for scalability, maintainability, and developer experience
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {architectureLayers.map((layer, index) => (
            <StaggerItem key={index}>
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-gray-800 p-2 shadow-sm">
                      <layer.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1 text-xs border-gray-700 text-gray-300">
                        {layer.name}
                      </Badge>
                      <CardTitle className="text-lg text-white">{layer.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="mt-2 text-gray-400">{layer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {layer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
