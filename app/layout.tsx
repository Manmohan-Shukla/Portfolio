import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manmohan Shukla - Full Stack Developer",
  description:
    "Portfolio of Manmohan Shukla, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: "full stack developer, react, next.js, typescript, web development, portfolio",
  authors: [{ name: "Manmohan Shukla" }],
  openGraph: {
    title: "Manmohan Shukla - Full Stack Developer",
    description: "Portfolio of Manmohan Shukla, a passionate full-stack developer",
    type: "website",
  },
   
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
