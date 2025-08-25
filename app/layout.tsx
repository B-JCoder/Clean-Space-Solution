import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "ClearSpace Solutions - Junk Removal & Cleaning Services | Charlotte, NC",
  description:
    "Professional junk removal, deep cleaning, and pressure washing services in Charlotte & surrounding areas. Same-day service, affordable rates. Call (786) 912-2406 for a free quote!",
  keywords:
    "junk removal, deep cleaning, pressure washing, yard cleaning, Charlotte NC, Bessemer City, waste management, same day service",
  authors: [{ name: "ClearSpace Solutions" }],
  creator: "ClearSpace Solutions",
  publisher: "ClearSpace Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clearspacesolutions.com",
    title: "ClearSpace Solutions - Professional Junk Removal & Cleaning Services",
    description:
      "Fast, affordable junk removal, deep cleaning, and pressure washing in Charlotte & surrounding areas. Same-day service available!",
    siteName: "ClearSpace Solutions",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ClearSpaceSolutionLogo-removebg-preview-aRm0pBjCmH0zlnQPIddvJO25VzOwfo.png",
        width: 512,
        height: 512,
        alt: "ClearSpace Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearSpace Solutions - Junk Removal & Cleaning Services",
    description:
      "Professional junk removal, deep cleaning, and pressure washing in Charlotte, NC. Same-day service available!",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ClearSpaceSolutionLogo-removebg-preview-aRm0pBjCmH0zlnQPIddvJO25VzOwfo.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#22c55e",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
