"use client"

import { Button } from "@/components/ui/button"
import { Github, BookOpen, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToIntegration = () => {
    const element = document.getElementById("integration")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/images/luno-logo-dark.svg" alt="Luno Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">Luno</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Docs
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://github.com/Luno-lab/LunoKit" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="sm" className="bg-black hover:bg-gray-800" onClick={scrollToIntegration}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="gap-2 justify-start">
                <BookOpen className="h-4 w-4" />
                Docs
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 justify-start" asChild>
                <a href="https://github.com/Luno-lab/LunoKit" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button size="sm" className="bg-black hover:bg-gray-800 justify-start" onClick={scrollToIntegration}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
