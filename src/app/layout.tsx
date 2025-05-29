import type { Metadata } from "next"
import "./globals.css"
import { Montserrat, OpenSans } from "@/fonts/fonts.js"
import Navbar from "@/components/navbar"
import BannerWeb from "@/components/banner-web.jsx"

export const metadata: Metadata = {
  title: "tecnico.ve",
  description: "Marketplace for Venezuelan technical services",
  openGraph: {
    title: "tecnico.ve",
    description: "Marketplace for Venezuelan technical services",
    url: "https://tecnico.ve",
    siteName: "tecnico.ve",
    images: [
      {
        url: "https://tecnico.ve/og-image.png",
        width: 1200,
        height: 630,
        alt: "tecnico.ve - Marketplace for Venezuelan technical services",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tecnico.ve",
    description: "Marketplace for Venezuelan technical services",
    images: ["https://tecnico.ve/og-image.png"],
    creator: "@tecnico_ve",
  },
  // manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noarchive: true,
      nosnippet: false,
      noimageindex: false,
      notranslate: false,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${OpenSans.className} ${Montserrat.className} antialiased`}
      >
        <Navbar />
        <BannerWeb />

        {children}
      </body>
    </html>
  )
}
