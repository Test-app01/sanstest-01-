'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, ArrowRight, BarChart2, Wallet, Send, CreditCard, PieChart, TrendingUp, Shield, Menu, X, ChevronDown } from 'lucide-react'

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">FinAI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <Button variant="outline" className="mr-2">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">Get Started</Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#features" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Button className="w-full mb-2">Sign In</Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-6">
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
                  <span className="text-sm font-medium">AI-Powered Financial Assistant</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent">
                  The Best and Most Trusted{" "}
                  <span className="relative">
                    Financial Assistant
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Take control of your finances with AI-powered insights, personalized recommendations, and smart automation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all">
                  Get Started Free
                  <ChevronRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <span className="mr-2 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <ChevronRight size={14} className="text-blue-600" />
                  </span>
                  Watch Demo
                </Button>
              </div>
              <div className="pt-8 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-blue-600">100K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-blue-600">$2B+</div>
                  <div className="text-gray-600">Managed Assets</div>
                </div>
                <div className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                  <div className="text-gray-600">User Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-10 rounded-3xl transform rotate-6 blur-xl"></div>
              <Card className="relative p-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                      <span className="text-white font-bold">F</span>
                    </div>
                    <div>
                      <div className="font-semibold">FinAI Dashboard</div>
                      <div className="text-sm text-gray-500">Welcome back, Alex</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Last updated: Just now</div>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Total Balance</div>
                        <div className="text-2xl font-bold">$24,563.80</div>
                        <div className="text-sm text-green-600 flex items-center">
                          <TrendingUp size={14} className="mr-1" />
                          +2.4% from last month
                        </div>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <BarChart2 className="text-blue-600" size={24} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4 border-0 shadow-sm hover:shadow transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <ArrowRight className="text-green-600" size={20} />
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Income</div>
                            <div className="font-semibold">$8,350</div>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-4 border-0 shadow-sm hover:shadow transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-red-100 rounded-lg">
                            <ArrowRight className="text-red-600 transform rotate-180" size={20} />
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Expenses</div>
                            <div className="font-semibold">$3,825</div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-semibold">Recent Transactions</div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                        View All
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Grocery Store", amount: "-$85.20", date: "Today", icon: <CreditCard size={16} /> },
                        { name: "Salary Deposit", amount: "+$3,450.00", date: "Yesterday", icon: <ArrowRight size={16} /> },
                        { name: "Investment Transfer", amount: "-$500.00", date: "Mar 15", icon: <TrendingUp size={16} /> },
                      ].map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-full">
                              {transaction.icon}
                            </div>
                            <div>
                              <div className="font-medium">{transaction.name}</div>
                              <div className="text-xs text-gray-500">{transaction.date}</div>
                            </div>
                          </div>
                          <div className={transaction.amount.startsWith('+') ? 'text-green-600' : 'text-gray-700'}>
                            {transaction.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
              <span className="text-sm font-medium">Powerful Features</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">Everything You Need for Financial Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides all the tools you need to manage your money smarter, all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Portfolio Management",
                description: "AI-powered insights help you make better investment decisions based on your risk profile and goals.",
                icon: <BarChart2 size={24} className="text-blue-600" />,
              },
              {
                title: "Digital Wallet",
                description: "Secure and convenient way to manage your digital assets with multi-layer security protection.",
                icon: <Wallet size={24} className="text-blue-600" />,
              },
              {
                title: "Instant Transfers",
                description: "Send and receive money instantly, anywhere in the world with minimal fees and maximum security.",
                icon: <Send size={24} className="text-blue-600" />,
              },
              {
                title: "Virtual Cards",
                description: "Create virtual cards for safer online transactions with customizable spending limits and controls.",
                icon: <CreditCard size={24} className="text-blue-600" />,
              },
              {
                title: "Automated Savings",
                description: "Set goals and let AI help you reach them faster with smart saving strategies and recommendations.",
                icon: <PieChart size={24} className="text-blue-600" />,
              },
              {
                title: "Real-time Analytics",
                description: "Track your spending patterns and financial health with beautiful visualizations and actionable insights.",
                icon: <TrendingUp size={24} className="text-blue-600" />,
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group">
                <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4 group-hover:bg-blue-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
              <span className="text-sm font-medium">Simple Process</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with these simple steps and transform your financial life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400 transform -translate-y-1/2 z-0"></div>
            
            {[
              {
                step: "01",
                title: "Create Account",
                description: "Sign up for free and verify your identity in minutes with our secure and streamlined process.",
              },
              {
                step: "02",
                title: "Connect Your Accounts",
                description: "Link your bank accounts and investment portfolios with bank-level security and encryption.",
              },
              {
                step: "03",
                title: "Start Managing",
                description: "Get insights and start making smarter financial decisions with AI-powered recommendations.",
              },
            ].map((item, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 mt-6">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
              <span className="text-sm font-medium">User Stories</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied users worldwide who have transformed their financial lives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI insights have completely transformed how I manage my investments. I've seen a 15% increase in my portfolio performance since I started using FinAI.",
                author: "Sarah Johnson",
                role: "Small Business Owner",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
              },
              {
                quote: "Best financial app I've ever used. The automation features save me hours every month, and the recommendations are spot-on for my financial goals.",
                author: "Michael Chen",
                role: "Software Engineer",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
              },
              {
                quote: "Finally, an app that makes financial management simple and actually enjoyable! The interface is intuitive, and the AI suggestions are incredibly helpful.",
                author: "Emily Rodriguez",
                role: "Freelancer",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image || "/placeholder.svg"} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
              <span className="text-sm font-medium">Simple Pricing</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">Plans for Every Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your financial journey, with no hidden fees
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "Free",
                description: "Perfect for getting started with personal finance management",
                features: [
                  "Basic financial insights",
                  "Connect up to 2 accounts",
                  "Monthly spending reports",
                  "Basic budgeting tools",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Pro",
                price: "$9.99",
                period: "per month",
                description: "Advanced features for serious financial management",
                features: [
                  "Everything in Basic",
                  "AI-powered recommendations",
                  "Connect unlimited accounts",
                  "Investment tracking",
                  "Goal-based savings",
                  "Priority support",
                ],
                cta: "Start 14-Day Trial",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For teams and businesses with advanced needs",
                features: [
                  "Everything in Pro",
                  "Custom integrations",
                  "Team collaboration",
                  "Advanced analytics",
                  "Dedicated account manager",
                  "Custom reporting",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`p-6 relative overflow-hidden ${
                  plan.popular 
                    ? 'border-blue-500 shadow-xl' 
                    : 'border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-6 -translate-y-1">
                      POPULAR
                    </div>
                  </div>
                )}
                <div className="text-xl font-bold mb-2">{plan.name}</div>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-2">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
              <span className="text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our service
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How secure is my financial data?",
                answer: "We use bank-level 256-bit encryption and follow industry best practices for data security. We never store your bank credentials, and all data is encrypted both in transit and at rest."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your paid features until the end of your billing period."
              },
              {
                question: "How does the AI provide financial recommendations?",
                answer: "Our AI analyzes your spending patterns, income, and financial goals to provide personalized recommendations. It learns from your habits and improves over time to give you more accurate insights."
              },
              {
                question: "Is there a mobile app available?",
                answer: "Yes, we offer mobile apps for both iOS and Android platforms, providing the same powerful features on the go."
              },
              {
                question: "How do I get support if I have questions?",
                answer: "We offer 24/7 customer support via chat, email, and phone for our paid users. Free users can access our comprehensive knowledge base and community forums."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="font-semibold text-lg mb-2">{faq.question}</div>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already managing their money smarter with our AI-powered platform.
          </p>
          <Button size="lg" variant="secondary" className="px-8 shadow-lg hover:shadow-xl transition-all">
            Get Started Free
            <ChevronRight className="ml-2" />
          </Button>
          <p className="mt-4 text-blue-100">No credit card required • Free 14-day trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">FinAI</span>
              <p className="mt-4">Making financial management smarter with AI-powered insights and automation.</p>
              <div className="flex space-x-4 mt-6">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href={`#${social}`} className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                      <span className="text-xs">{social[0].toUpperCase()}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} FinAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

