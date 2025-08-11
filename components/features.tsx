import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plug, Users, Network, Database, Send, Settings, Zap, Shield } from "lucide-react"

const featureCategories = [
  {
    title: "Connection Management",
    icon: Plug,
    color: "text-gray-900",
    hooks: [
      { name: "useConnect", description: "Manage multi-wallet connections" },
      { name: "useDisconnect", description: "Secure disconnection" },
      { name: "useActiveConnector", description: "Track current active connector" },
      { name: "useConnectors", description: "List of available connectors" },
      { name: "useStatus", description: "Monitor connection status" },
    ],
  },
  {
    title: "Account Management",
    icon: Users,
    color: "text-gray-900",
    hooks: [
      { name: "useAccount", description: "Info on the active account" },
      { name: "useAccounts", description: "List of all connected accounts" },
      { name: "useBalance", description: "Balance queries" },
    ],
  },
  {
    title: "Chain Information",
    icon: Network,
    color: "text-gray-900",
    hooks: [
      { name: "useChain", description: "Current chain info" },
      { name: "useChains", description: "List of supported chains" },
      { name: "useSwitchChain", description: "Switch chains" },
      { name: "useRuntimeVersion", description: "Runtime version" },
      { name: "useBlockNumber", description: "Real-time block height subscription" },
      { name: "useSs58Format", description: "SS58 address format" },
    ],
  },
  {
    title: "API Management",
    icon: Database,
    color: "text-gray-900",
    hooks: [
      { name: "useApi", description: "Dedot API instance management" },
      { name: "useConfig", description: "Configuration management" },
      { name: "useSubscription", description: "Subscribe to any Dedot API with custom data transformation" },
    ],
  },
  {
    title: "Transaction Operations",
    icon: Send,
    color: "text-gray-900",
    hooks: [
      { name: "useSendTransaction", description: "Manage transaction lifecycle and receipt parsing" },
      { name: "useSignMessage", description: "Sign messages" },
      { name: "useSigner", description: "Manage signers" },
    ],
  },
  {
    title: "State Management",
    icon: Settings,
    color: "text-gray-900",
    hooks: [
      { name: "TanStack Query", description: "Built-in caching and retry" },
      { name: "Smart Loading", description: "Intelligent loading state management" },
      { name: "Error Handling", description: "Comprehensive error handling" },
    ],
  },
]

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Feature Set</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to build Web3 applications on Polkadot, with TypeScript-first design
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {featureCategories.map((category, index) => (
            <Card key={index} className="h-full border-gray-200 bg-gray-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg bg-white p-2 shadow-sm border border-gray-200`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.hooks.map((hook, hookIndex) => (
                    <div key={hookIndex} className="border-l-2 border-gray-200 pl-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs font-mono bg-white border border-gray-200">
                          {hook.name}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{hook.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800 text-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-white" />
                <CardTitle className="text-white">Performance Optimized</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                Built-in TanStack Query integration provides efficient caching, background updates, and smart retry
                logic
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-white" />
                <CardTitle className="text-white">Type Safety</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                Complete TypeScript support with full type hints and IntelliSense for all APIs and components
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
