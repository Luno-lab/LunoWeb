export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LunoKit",
    "alternateName": "Lunolab",
    "description": "Open-source Web3 account connection infrastructure for the Polkadot ecosystem. Build better DApps with less complexity.",
    "url": "https://www.lunolab.xyz",
    "logo": "https://www.lunolab.xyz/images/luno-logo-dark.svg",
    "sameAs": [
      "https://github.com/Luno-lab",
      "https://twitter.com/lunolab_xyz"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "availableLanguage": ["English"]
    },
    "founder": {
      "@type": "Organization",
      "name": "Lunolab"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}