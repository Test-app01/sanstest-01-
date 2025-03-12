import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpRight,
  BarChart3,
  DollarSign,
  TrendingUp,
  Wallet,
  ArrowDownRight,
  Clock,
  AlertCircle,
  Bell,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's an overview of your portfolio</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            Last updated: 5 mins ago
          </Button>
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            Set Alerts
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +20.1% from last month
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="px-0">
              View details
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investments</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$21,345.67</div>
            <p className="text-xs text-muted-foreground">12 active investments</p>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="px-0">
              Manage investments
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,891.22</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +14.5% from initial investment
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="px-0">
              View profit breakdown
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Health</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <p className="text-xs text-muted-foreground">Based on risk assessment</p>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="px-0">
              View risk analysis
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Market Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Market Summary</CardTitle>
          <CardDescription>Today's market performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium">S&P 500</p>
                <p className="text-2xl font-bold">4,587.64</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>+1.2%</span>
                </div>
                <p className="text-xs text-muted-foreground">+54.32 pts</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium">NASDAQ</p>
                <p className="text-2xl font-bold">14,346.02</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>+0.8%</span>
                </div>
                <p className="text-xs text-muted-foreground">+114.85 pts</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium">DOW JONES</p>
                <p className="text-2xl font-bold">35,768.06</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-red-500">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  <span>-0.3%</span>
                </div>
                <p className="text-xs text-muted-foreground">-107.30 pts</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">View Full Market Data</Button>
        </CardFooter>
      </Card>

      {/* Charts and Analytics */}
      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Portfolio Overview</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Portfolio Distribution</CardTitle>
                <CardDescription>Your investment allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                  Portfolio Distribution Chart
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Rebalance Portfolio</Button>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Top Holdings</CardTitle>
                <CardDescription>Your best performing assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "AAPL", fullName: "Apple Inc.", value: "$3,450.00", change: "+2.4%" },
                    { name: "MSFT", fullName: "Microsoft Corp.", value: "$2,830.00", change: "+1.8%" },
                    { name: "AMZN", fullName: "Amazon.com Inc.", value: "$2,150.00", change: "+3.2%" },
                    { name: "GOOGL", fullName: "Alphabet Inc.", value: "$1,950.00", change: "+0.9%" },
                    { name: "TSLA", fullName: "Tesla Inc.", value: "$1,780.00", change: "-1.2%" },
                  ].map((stock, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{stock.name}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{stock.fullName}</p>
                          <p className="text-xs text-muted-foreground">{stock.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{stock.value}</p>
                        <p className={`text-xs ${stock.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                          {stock.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View All Holdings</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest financial activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "buy", asset: "AAPL", amount: "$1,200.00", shares: "5.2 shares", time: "2 hours ago" },
                  { type: "sell", asset: "TSLA", amount: "$950.00", shares: "3.8 shares", time: "1 day ago" },
                  { type: "deposit", asset: "Bank Transfer", amount: "$5,000.00", shares: "", time: "3 days ago" },
                  { type: "dividend", asset: "MSFT", amount: "$32.50", shares: "", time: "1 week ago" },
                  { type: "buy", asset: "AMZN", amount: "$2,800.00", shares: "8.4 shares", time: "1 week ago" },
                ].map((transaction, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg border">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        transaction.type === "buy"
                          ? "bg-green-100 text-green-600"
                          : transaction.type === "sell"
                            ? "bg-red-100 text-red-600"
                            : transaction.type === "deposit"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <p className="text-sm font-medium capitalize">{transaction.type}</p>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <p className="text-sm">{transaction.asset}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{transaction.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{transaction.amount}</p>
                      {transaction.shares && <p className="text-xs text-muted-foreground">{transaction.shares}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">
                Export History
              </Button>
              <Button>New Transaction</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Insights</CardTitle>
              <CardDescription>Personalized recommendations based on your portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Portfolio Diversification",
                    description:
                      "Your portfolio is heavily weighted in technology stocks. Consider diversifying into other sectors to reduce risk.",
                    type: "warning",
                  },
                  {
                    title: "Potential Investment Opportunity",
                    description:
                      "Based on your investment style, renewable energy stocks align with your goals and may offer growth potential.",
                    type: "opportunity",
                  },
                  {
                    title: "Market Trend Alert",
                    description:
                      "Recent Fed announcements may impact your bond holdings. Monitor interest rate changes closely.",
                    type: "alert",
                  },
                ].map((insight, i) => (
                  <div key={i} className="p-4 rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle
                        className={`h-5 w-5 ${
                          insight.type === "warning"
                            ? "text-amber-500"
                            : insight.type === "opportunity"
                              ? "text-green-500"
                              : "text-blue-500"
                        }`}
                      />
                      <h3 className="font-medium">{insight.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                    <div className="mt-3 flex justify-end">
                      <Button variant="ghost" size="sm">
                        Learn More
                      </Button>
                      <Button variant="outline" size="sm" className="ml-2">
                        Take Action
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Bell className="mr-2 h-4 w-4" />
                Set Up Custom Alerts
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Link href="/dashboard/portfolio">
          <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Wallet className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Manage Portfolio</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboard/market-analysis">
          <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <BarChart3 className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Market Analysis</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboard/ai-assistant">
          <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Bell className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">AI Assistant</h3>
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboard/goals">
          <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Financial Goals</h3>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

