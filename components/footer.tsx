import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

// New X logo component
function XIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <section className="bg-white border-t border-gray-200 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/images/luno-logo-dark.svg" alt="Luno Logo" width={40} height={40} className="h-10 w-10" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Build LunoKit Together</h2>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            We welcome every voice from our community. If you have any questions, suggestions, or ideas, please reach
            out to us through:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white gap-2 px-6" asChild>
              <a href="https://x.com/lunolab_xyz" target="_blank" rel="noopener noreferrer">
                <XIcon />
                Follow us on X
              </a>
            </Button>

            <Button size="lg" variant="outline" className="border-gray-300 bg-white hover:bg-gray-50 gap-2 px-6" asChild>
              <a href="https://github.com/Luno-lab/LunoKit/discussions" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-5 w-5" />
                Join GitHub Discussions
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>© 2025 Lunolab. All rights reserved. Built with ❤️ for the Polkadot ecosystem.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
