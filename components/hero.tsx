"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

// Live indicator component with pulsing effect
function LiveIndicator() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-3 w-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
      <div className="relative h-2 w-2 rounded-full bg-green-500"></div>
    </div>
  )
}

export function Hero() {
  const scrollToIntegration = () => {
    const element = document.getElementById("integration")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* White Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge variant="outline" className="mb-4 px-3 py-1 border-gray-200">
                <Image
                  src="/images/w3f.svg"
                  alt="Web3 Foundation"
                  width={12}
                  height={12}
                  className="mr-1"
                />
                Supported by Web3 Foundation
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Wallet infrastructure, for <span className="text-black">Polkadot ecosystem</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              LunoKit is the core product developed by Lunolab, dedicated to building an open-source, customizable, and developer-friendly Web3 account connection infrastructure for Polkadot SDK-based blockchains.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white gap-2 px-[15px]"
                onClick={scrollToIntegration}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-gray-300 bg-white font-medium px-[15px]" asChild>
                <a href="https://demo.lunolab.xyz/" target="_blank" rel="noopener noreferrer">
                  <LiveIndicator />
                  View Live Demo
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 flow-root sm:mt-24"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="relative rounded-xl bg-gray-50 p-2 lg:rounded-2xl lg:p-4">
                <Image
                  // src="/images/wallet-connection-2.png"
                  src="/images/fin.png"
                  alt="LunoKit Wallet Connection Interface"
                  width={800}
                  height={600}
                  className="rounded-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
