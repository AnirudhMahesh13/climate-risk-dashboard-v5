"use client"

import { TopNav } from "@/components/top-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, TrendingUp, Shield, Users, Zap, Globe, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopNav />

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About Climate Risk Analytics</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Empowering commercial lenders and risk managers with comprehensive climate transition risk assessment
              tools for commercial real estate portfolios.
            </p>
          </div>

          {/* Purpose Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="w-6 h-6 mr-3 text-emerald-600" />
                Our Purpose
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-slate-700">
              <p className="mb-4">
                Climate Risk Analytics is designed to help financial institutions navigate the complex landscape of
                climate-related risks in commercial real estate. As climate change accelerates and regulatory frameworks
                evolve, understanding and managing transition risks has become critical for maintaining portfolio
                resilience and meeting fiduciary responsibilities.
              </p>
              <p>
                Our platform provides actionable insights that enable informed decision-making, risk mitigation
                strategies, and sustainable investment practices across commercial real estate portfolios.
              </p>
            </CardContent>
          </Card>

          {/* Features Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="w-6 h-6 mr-3 text-blue-600" />
                Key Features & Capabilities
              </CardTitle>
              <CardDescription className="text-lg">
                Comprehensive tools for climate risk assessment and portfolio management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Individual Asset Analysis</h3>
                      <p className="text-slate-600">
                        Detailed climate risk assessment for individual commercial properties with interactive mapping
                        and scenario modeling.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Portfolio Risk Aggregation</h3>
                      <p className="text-slate-600">
                        Comprehensive portfolio-level analysis with risk segmentation, exposure management, and
                        performance tracking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Risk Forecasting</h3>
                      <p className="text-slate-600">
                        Advanced modeling for physical and transition risks with multiple climate scenarios and time
                        horizons.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Energy Efficiency Analysis</h3>
                      <p className="text-slate-600">
                        Detailed energy consumption analysis with recommendations for efficiency improvements and cost
                        savings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Regulatory Compliance</h3>
                      <p className="text-slate-600">
                        Stay ahead of evolving climate disclosure requirements and regulatory frameworks across
                        jurisdictions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Stakeholder Reporting</h3>
                      <p className="text-slate-600">
                        Generate comprehensive reports for investors, regulators, and internal risk management teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Target Users */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="w-6 h-6 mr-3 text-purple-600" />
                Built For
              </CardTitle>
              <CardDescription className="text-lg">
                Designed specifically for financial services professionals managing commercial real estate risk
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Commercial Lenders</h3>
                  <p className="text-sm text-slate-600">
                    Assess climate risks in loan portfolios and make informed lending decisions
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg">
                  <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Risk Managers</h3>
                  <p className="text-sm text-slate-600">
                    Monitor and mitigate climate-related risks across real estate portfolios
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
                  <TrendingUp className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Investment Teams</h3>
                  <p className="text-sm text-slate-600">
                    Integrate climate considerations into investment strategies and due diligence
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Zap className="w-6 h-6 mr-3 text-orange-600" />
                Technologies Used
              </CardTitle>
              <CardDescription className="text-lg">
                Built with modern, scalable technologies for enterprise-grade performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  React + Vite
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  Tailwind CSS
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  GitHub SSO
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  Interactive Maps
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  Advanced Charts
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  Real-time Data
                </Badge>
                <Badge variant="secondary" className="p-3 text-center justify-center">
                  Cloud Infrastructure
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="w-6 h-6 mr-3 text-green-600" />
                Team & Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-8 bg-red-600 rounded mr-4 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">RBC</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">RBC Amplify 2025</h3>
                    <p className="text-slate-600">Internal Innovation Project</p>
                  </div>
                </div>

                <p className="text-slate-700 mb-4">
                  This application was developed as part of RBC's Amplify 2025 innovation initiative, focusing on
                  advancing climate risk management capabilities for commercial real estate portfolios.
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Project Goals:</p>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Enhance climate risk assessment capabilities</li>
                      <li>• Improve portfolio management efficiency</li>
                      <li>• Support regulatory compliance initiatives</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Impact Areas:</p>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Commercial lending risk management</li>
                      <li>• Sustainable finance initiatives</li>
                      <li>• Climate disclosure and reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
