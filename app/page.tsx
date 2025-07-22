"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, PieChart, TrendingUp, Shield } from "lucide-react"
import { TopNav } from "@/components/top-nav"

export default function HomePage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate GitHub SSO check
    const checkAuth = async () => {
      const authStatus = localStorage.getItem("github_auth")
      if (!authStatus) {
        // Simulate GitHub OAuth redirect
        localStorage.setItem("github_auth", "authenticated")
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(true)
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Authenticating with GitHub...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="w-96">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Climate Risk Analytics</CardTitle>
            <CardDescription>Sign in to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-slate-900 hover:bg-slate-800" onClick={() => setIsAuthenticated(true)}>
              Continue with GitHub
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopNav />

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Climate Transition Risk Analytics</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Assess resiliency and risk exposure across commercial real estate assets and portfolios. Make informed
            decisions with comprehensive climate transition analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card
            className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-emerald-200"
            onClick={() => router.push("/asset/search")}
          >
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                <Building2 className="w-8 h-8 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl text-slate-900">Asset Analysis</CardTitle>
              <CardDescription className="text-base">
                Analyze individual commercial buildings for climate transition risks, energy efficiency, and future
                resilience scenarios.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Risk Forecasting
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Resilience Scoring
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-blue-200"
            onClick={() => router.push("/portfolio/filter")}
          >
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <PieChart className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-slate-900">Portfolio Overview</CardTitle>
              <CardDescription className="text-base">
                Comprehensive portfolio analysis across multiple properties with risk segmentation and exposure
                management insights.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                <div className="flex items-center">
                  <PieChart className="w-4 h-4 mr-1" />
                  Portfolio Metrics
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Risk Aggregation
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm">Built for commercial lenders and risk managers • RBC Amplify 2025</p>
        </div>
      </main>
    </div>
  )
}
