"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Send, User, Sparkles, Lightbulb, Clock, Save, TrendingUp } from "lucide-react"
import { useChat } from "ai/react"

export default function AIAssistantPage() {
  const [activeTab, setActiveTab] = useState("chat")

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Hi there! I'm your FinAI assistant. How can I help with your financial questions today?",
      },
    ],
  })

  const suggestedQuestions = [
    "What stocks should I invest in as a beginner?",
    "How do I create a diversified portfolio?",
    "Explain dollar-cost averaging",
    "What's the difference between stocks and bonds?",
    "How much should I save for retirement?",
    "What are ETFs and how do they work?",
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Financial Assistant</h1>
        <p className="text-muted-foreground">Get personalized financial advice and answers to your questions</p>
      </div>

      <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="saved">Saved Responses</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle>Chat with FinAI</CardTitle>
              <CardDescription>Ask any financial question and get expert advice</CardDescription>
            </CardHeader>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className="flex items-start max-w-[80%] gap-2">
                      {message.role !== "user" && (
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-lg ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-none"
                            : "bg-muted rounded-bl-none"
                        }`}
                      >
                        {message.content}
                      </div>
                      {message.role === "user" && (
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                          <User className="h-4 w-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start max-w-[80%] gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="p-3 rounded-lg bg-muted rounded-bl-none">
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 rounded-full bg-current animate-bounce"></div>
                          <div
                            className="h-2 w-2 rounded-full bg-current animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="h-2 w-2 rounded-full bg-current animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <CardFooter className="border-t p-4">
              <form onSubmit={handleSubmit} className="flex w-full gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask a financial question..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>

          <div>
            <h3 className="text-sm font-medium mb-2">Suggested Questions</h3>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    handleInputChange({ target: { value: question } } as any)
                    setTimeout(() => handleSubmit(new Event("submit") as any), 100)
                  }}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="insights">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Insights</CardTitle>
                <CardDescription>AI-generated analysis of your investments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Diversification Opportunity</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your portfolio is heavily weighted in technology stocks (68%). Consider adding exposure to
                      healthcare and consumer staples for better diversification.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-amber-500" />
                      <h3 className="font-medium">Risk Assessment</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your current portfolio has a higher risk profile than your stated goals. Consider rebalancing to
                      include more fixed-income assets.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Generate New Insights</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Predictions</CardTitle>
                <CardDescription>AI forecasts based on current trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <h3 className="font-medium">Short-term Outlook</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Market volatility is expected to increase in the next 2-3 weeks due to upcoming earnings reports
                      and Fed announcements.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <h3 className="font-medium">Sector Performance</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The renewable energy sector is showing strong momentum and may outperform the broader market in
                      the coming quarter.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Detailed Analysis</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <Card>
            <CardHeader>
              <CardTitle>Saved Responses</CardTitle>
              <CardDescription>Your bookmarked AI assistant responses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    question: "How do I create a diversified portfolio?",
                    answer:
                      "A well-diversified portfolio typically includes a mix of different asset classes such as stocks, bonds, and cash equivalents. Within stocks, aim to include companies of different sizes (large, mid, and small-cap), from different sectors (technology, healthcare, consumer goods, etc.), and from different regions (domestic and international). The classic rule of thumb is to subtract your age from 110 to determine your stock allocation percentage, with the remainder in bonds and cash.",
                    date: "2 days ago",
                  },
                  {
                    question: "What's the difference between traditional and Roth IRA?",
                    answer:
                      "Traditional IRAs offer tax-deductible contributions but taxable withdrawals in retirement. Roth IRAs provide tax-free withdrawals in retirement but contributions are made with after-tax dollars. Traditional IRAs have required minimum distributions (RMDs) starting at age 72, while Roth IRAs don't have RMDs. Choose Traditional if you expect to be in a lower tax bracket in retirement; choose Roth if you expect to be in the same or higher tax bracket.",
                    date: "1 week ago",
                  },
                ].map((item, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="bg-muted p-3 flex justify-between items-center">
                      <div className="font-medium">{item.question}</div>
                      <div className="text-xs text-muted-foreground">{item.date}</div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm">{item.answer}</p>
                    </div>
                    <div className="bg-muted p-2 flex justify-end">
                      <Button variant="ghost" size="sm">
                        <Save className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Manage Saved Responses</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

