"use client"

import { TopNav } from "@/components/top-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, AlertTriangle, CheckCircle, MapPin, Thermometer, Zap, DollarSign } from "lucide-react"

const riskData = [
  { year: 2024, physical: 15, transition: 25, financial: 20 },
  { year: 2025, physical: 18, transition: 30, financial: 24 },
  { year: 2026, physical: 22, transition: 35, financial: 28 },
  { year: 2027, physical: 25, transition: 42, financial: 33 },
  { year: 2028, physical: 28, transition: 48, financial: 38 },
  { year: 2029, physical: 32, transition: 55, financial: 44 },
  { year: 2030, physical: 35, transition: 62, financial: 50 },
]

const scenarioData = [
  { scenario: "Lower", revenue: 2.1, costs: 1.8, netImpact: 0.3 },
  { scenario: "Expected", revenue: 1.8, costs: 2.2, netImpact: -0.4 },
  { scenario: "Upper", revenue: 1.4, costs: 2.8, netImpact: -1.4 },
]

const energyData = [
  { name: "Heating", value: 45, color: "#ef4444" },
  { name: "Cooling", value: 25, color: "#3b82f6" },
  { name: "Lighting", value: 15, color: "#f59e0b" },
  { name: "Equipment", value: 15, color: "#10b981" },
]

export default function AssetAnalysisPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopNav />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Asset Analysis</h1>
          <p className="text-slate-600">123 Bay Street, Toronto, ON - Comprehensive climate risk assessment</p>
        </div>

        {/* Top Half - Map and Insights */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Interactive Map Placeholder */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Property Location & Climate Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-slate-700">Interactive Map</p>
                  <p className="text-slate-500">Climate zones, flood risks, and environmental factors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Sidebar - Key Insights */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Risk Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Physical Risk</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Medium
                  </Badge>
                </div>
                <Progress value={35} className="h-2" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Transition Risk</span>
                  <Badge variant="destructive">High</Badge>
                </div>
                <Progress value={62} className="h-2" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Financial Impact</span>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Medium-High
                  </Badge>
                </div>
                <Progress value={50} className="h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Energy Efficiency Upgrade</p>
                    <p className="text-xs text-slate-500">Priority: High</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">HVAC System Modernization</p>
                    <p className="text-xs text-slate-500">ROI: 3.2 years</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Thermometer className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Climate Resilience Plan</p>
                    <p className="text-xs text-slate-500">Timeline: 6 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Financial Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Annual Risk Cost</span>
                    <span className="text-sm font-semibold text-red-600">$1.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Mitigation Investment</span>
                    <span className="text-sm font-semibold">$3.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Net Savings (10yr)</span>
                    <span className="text-sm font-semibold text-green-600">$8.4M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Half - Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Risk Forecast Timeline
              </CardTitle>
              <CardDescription>Projected risk evolution over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={riskData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="physical" stroke="#ef4444" strokeWidth={2} name="Physical Risk" />
                  <Line type="monotone" dataKey="transition" stroke="#f59e0b" strokeWidth={2} name="Transition Risk" />
                  <Line type="monotone" dataKey="financial" stroke="#3b82f6" strokeWidth={2} name="Financial Impact" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Energy Consumption Breakdown
              </CardTitle>
              <CardDescription>Current energy usage by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={energyData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {energyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Scenario Analysis - Financial Impact
              </CardTitle>
              <CardDescription>Revenue and cost projections under different climate scenarios</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={scenarioData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="scenario" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}M`, ""]} />
                  <Bar dataKey="revenue" fill="#10b981" name="Revenue Impact" />
                  <Bar dataKey="costs" fill="#ef4444" name="Cost Impact" />
                  <Bar dataKey="netImpact" fill="#3b82f6" name="Net Impact" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
