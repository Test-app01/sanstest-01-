'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Bot, X } from 'lucide-react'
import { AIAssistant } from './ai-assistant'

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </Button>
      </div>
      
      <AIAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

