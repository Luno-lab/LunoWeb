import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.lunolab.xyz',
      lastModified: new Date('2025-08-22'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}