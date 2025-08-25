import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import StructuredData from "./structured-data"

export const metadata: Metadata = {
  title: {
    default: "LunoKit - Web3 Infrastructure for Polkadot",
    template: "%s | LunoKit"
  },
  description:
    "Open-source Web3 account connection infrastructure for the Polkadot ecosystem. Build better DApps with less complexity.",
  keywords: ["lunokit", "LunoKit", "lunolab", "Lunolab", "Web3 Account", "Polkadot", "DApp", "React", "polkadotjs", "Open Source", "Account Connection", "Connect Wallet", "Substrate", "Wallet Connect", "Polkadot SDK", "Web3 Infrastructure"],
  authors: [{ name: "Lunolab" }],
  creator: "Lunolab",
  publisher: "Lunolab",
  generator: 'Lunolab',
  metadataBase: new URL('https://www.lunolab.xyz'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'rlfNGSAI3rubHpjqCu3UED20yvDtwIjSmcMKjjpg88o',
  },
  icons: {
    icon: '/images/luno-logo-dark.svg',
    shortcut: '/images/luno-logo-dark.svg',
    apple: '/images/luno-logo-dark.svg',
  },
  openGraph: {
    title: "LunoKit - Web3 Infrastructure for Polkadot",
    description: "Open-source Web3 account connection infrastructure for the Polkadot ecosystem. Build better DApps with less complexity.",
    url: "https://www.lunolab.xyz",
    siteName: "LunoKit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "LunoKit - Web3 Infrastructure for Polkadot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LunoKit - Web3 Infrastructure for Polkadot",
    description: "Open-source Web3 account connection infrastructure for the Polkadot ecosystem. Build better DApps with less complexity.",
    images: ["/images/og-image.png"],
    creator: "@lunolab",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  )
}
