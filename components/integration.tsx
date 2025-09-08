"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"
import { motion } from "framer-motion"
import { useState } from "react"

// React icon component
function ReactIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.988-1.36-1.56z" />
    </svg>
  )
}

export function Integration() {
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  const copyInstallCommand = async () => {
    try {
      await navigator.clipboard.writeText("npm i @luno-kit/react @luno-kit/ui")
      setCopiedInstall(true)
      setTimeout(() => setCopiedInstall(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const copyCodeSnippet = async () => {
    const code = `import { LunoKitProvider, ConnectButton } from '@luno-kit/ui'
import { createConfig, defineChain, kusama, polkadot, polkadotjsConnector, subwalletConnector } from '@luno-kit/react'
import '@luno-kit/ui/styles.css'

const config = createConfig({
  appName: 'My Luno App',
  chains: [polkadot, kusama],
  connectors: [polkadotjsConnector(), subwalletConnector()],
  autoConnect: true,
})

function App() {
  return (
    <LunoKitProvider config={config}>
      <ConnectButton />
    </LunoKitProvider>
  )
}`
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <section id="integration" className="py-24 sm:py-32 bg-black relative">
      {/* Add logo watermark */}
      <div className="absolute top-8 right-8 opacity-10">
        <Image src="/images/luno-logo-dark.png" alt="Luno Logo" width={48} height={48} className="h-12 w-12" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Install our SDK in minutes!</h2>

          <div className="flex justify-center mb-12">
            <Badge variant="outline" className="border-gray-600 text-gray-300 bg-gray-800 px-4 py-2">
              <ReactIcon />
              <span className="ml-2">React</span>
            </Badge>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Step 1 */}
          <ScrollReveal className="space-y-6">
            <motion.div
              className="flex gap-4 items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold text-white">Install the LunoKit NPM package</h3>
            </motion.div>

            {/* Installation command */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <code className="text-green-400 text-sm">{">"} npm i @luno-kit/react @luno-kit/ui @tanstack/react-query</code>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    onClick={copyInstallCommand}
                  >
                    {copiedInstall ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal className="space-y-6">
            <motion.div
              className="flex gap-4 items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold text-white">Set up your React snippet and customize
</h3>
            </motion.div>

            {/* Code snippet with scrollable content */}
            <Card className="bg-gray-900 border-gray-800 relative">
              <CardContent className="p-0">
                <div className="flex max-h-96 overflow-hidden">
                  {/* Line numbers */}
                  <div className="flex flex-col text-gray-500 text-sm font-mono p-4 pr-2 bg-gray-800 select-none">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div key={i} className="leading-6">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    ))}
                  </div>

                  {/* Code content - scrollable */}
                  <div className="flex-1 overflow-y-auto overflow-x-auto">
                    <div className="p-4 text-sm font-mono text-gray-300 min-w-max">
                      <div className="leading-6">
                        <span className="text-blue-300">import</span> {"{"}{" "}
                        <span className="text-white">LunoKitProvider</span>,{" "}
                        <span className="text-white">ConnectButton</span> {"}"}{" "}
                        <span className="text-blue-300">from</span>{" "}
                        <span className="text-green-300">'@luno-kit/ui'</span>
                      </div>
                      <div className="leading-6">
                        <span className="text-blue-300">import</span> {"{"}{" "}
                        <span className="text-white">createConfig</span>,{" "}
                        <span className="text-white">defineChain</span>,{" "}
                        <span className="text-white">kusama</span>,{" "}
                        <span className="text-white">polkadot</span>,{" "}
                        <span className="text-white">polkadotjsConnector</span>,{" "}
                        <span className="text-white">subwalletConnector</span> {"}"}{" "}
                        <span className="text-blue-300">from</span>{" "}
                        <span className="text-green-300">'@luno-kit/react'</span>
                      </div>
                      <div className="leading-6">
                        <span className="text-blue-300">import</span>{" "}
                        <span className="text-green-300">'@luno-kit/ui/styles.css'</span>
                      </div>
                      <div className="leading-6"></div>
                      <div className="leading-6">
                        <span className="text-blue-300">const</span> <span className="text-white">config</span> ={" "}
                        <span className="text-white">createConfig</span>({"{"})
                      </div>
                      <div className="leading-6 ml-4">
                        <span className="text-white">appName</span>:{" "}
                        <span className="text-green-300">'My Luno App'</span>,
                      </div>
                      <div className="leading-6 ml-4">
                        <span className="text-white">chains</span>: [<span className="text-white">polkadot</span>
                        , <span className="text-white">kusama</span>],
                      </div>
                      <div className="leading-6 ml-4">
                        <span className="text-white">connectors</span>: [
                        <span className="text-white">polkadotjsConnector</span>(),{" "}
                        <span className="text-white">subwalletConnector</span>()],
                      </div>
                      <div className="leading-6 ml-4">
                        <span className="text-white">autoConnect</span>: <span className="text-white">true</span>
                        ,
                      </div>
                      <div className="leading-6">{"}"}</div>
                      <div className="leading-6"></div>
                      <div className="leading-6">
                        <span className="text-blue-300">function</span> <span className="text-white">App</span>(){" "}
                        {"{"}
                      </div>
                      <div className="leading-6 ml-4">
                        <span className="text-blue-300">return</span> (
                      </div>
                      <div className="leading-6 ml-8">
                        {"<"}
                        <span className="text-white">LunoKitProvider</span>{" "}
                        <span className="text-blue-300">config</span>={"{"}config{"}"}
                        {">"}
                      </div>
                      <div className="leading-6 ml-12">
                        {"<"}
                        <span className="text-white">ConnectButton</span> {"/>"}
                      </div>
                      <div className="leading-6 ml-8">
                        {"</"}
                        <span className="text-white">LunoKitProvider</span>
                        {">"}
                      </div>
                      <div className="leading-6 ml-4">)</div>
                      <div className="leading-6">{"}"}</div>
                    </div>
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-2 right-12 text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                  Scroll to see more
                </div>

                {/* Copy button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute top-2 right-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  onClick={copyCodeSnippet}
                >
                  {copiedCode ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
