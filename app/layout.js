import "./globals.css"
import { Inter } from 'next/font/google'
import { NavMenu } from './components/nav-menu'
import { FloatingAssistant } from './components/floating-assistant'
import { Toaster } from "sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "FinAI - Your AI Financial Assistant",
  description: "AI-powered financial assistant for smarter investing",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu />
        <div className="pt-16">
          {children}
        </div>
        <FloatingAssistant />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}



import './globals.css'