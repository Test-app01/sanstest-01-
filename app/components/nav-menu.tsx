"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Bot, Sparkles } from "lucide-react"
import { AIAssistant } from "./ai-assistant"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAssistantOpen, setIsAssistantOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/portfolio-simulator", label: "Portfolio Simulator" },
    { href: "/market-analysis", label: "Market Analysis" },
    { href: "/educational-resources", label: "Education" },
    { href: "/recommendations", label: "Recommendations" },
    { href: "/risk-assessment", label: "Risk Assessment" },
    { href: "/financial-goals", label: "Goals" },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                FinAI
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-muted-foreground hover:text-primary transition-colors",
                    pathname === link.href && "text-primary font-medium",
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <ThemeToggle />

              <Button variant="outline" className="flex items-center gap-1" onClick={() => setIsAssistantOpen(true)}>
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span>AI Assistant</span>
              </Button>

              <Link href="/auth/signin">
                <Button variant="outline" className="mr-2">
                  Sign In
                </Button>
              </Link>
              <Link href="/features">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setIsAssistantOpen(true)}>
                <Bot className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent",
                    pathname === link.href && "text-primary bg-accent",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-border">
                <Link href="/auth/signin" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mb-2">Sign In</Button>
                </Link>
                <Link href="/features" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AI Assistant */}
      <AIAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </>
  )
}

