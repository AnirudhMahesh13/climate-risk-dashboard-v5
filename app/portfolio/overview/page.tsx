"use client"

import { useState } from "react"
import { TopNav } from "@/components/top-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts"
import { PieChartIcon, BarChart3, TrendingUp, AlertTriangle, DollarSign, Building, MapPin, Zap } from "lucide-react"

const portfolioData = [
  { region: "Toronto", properties: 45, value: 2.1, risk: "Medium" },
  { region: "Vancouver", properties: 32, value: 1.8, risk: "Low" },
  { region: "Montreal", properties: 28, value: 1.2, risk: "High" },
  { region: "Calgary", properties: 18, value: 0.9, risk: "Medium" },
]

const riskTrendData = [
  { month: "Jan", physical: 25, transition: 35, financial: 30 },
  { month: "Feb", physical: 28, transition: 38, financial: 33 },
  { month: "Mar", physical: 30, transition: 42, financial: 36 },
  { month: "Apr", physical: 32, transition: 45, financial: 38 },
  { month: "May", physical: 35, transition: 48, financial: 41 },
  { month: "Jun", physical: 38, transition: 52, financial: 45 },
]

const exposureData = [
  { name: "Office", value: 45, color: "#3b82f6" },
  { name: "Retail", value: 25, color: "#ef4444" },
  { name: "Industrial", value: 20, color: "#f59e0b" },
  { name: "Mixed Use", value: 10, color: "#10b981" },
]

const riskScatterData = [
  { risk: 25, value: 45, name: "Toronto Office Complex" },
  { risk: 35, value: 32, name: "Vancouver Retail Center" },
  { risk: 55, value: 28, name: "Montreal Industrial" },
  { risk: 42, value: 38, name: "Calgary Mixed Use" },
  { risk: 30, value: 52, name: "Toronto Warehouse" },
  { risk: 48, value: 25, name: "Vancouver Office" },
]

export default function PortfolioOverviewPage() {
  const [viewMode, setViewMode] = useState<"count" | "value">("value")
  const [selectedExposure, setSelectedExposure] = useState("geo")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopNav />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Portfolio Overview</h1>
          <p className="text-slate-600">
            Comprehensive climate risk analysis across your commercial real estate portfolio
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Portfolio Stats Cards */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Properties</p>
                  <p className="text-2xl font-bold text-slate-900">123</p>
                </div>
                <Building className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Portfolio Value</p>
                  <p className="text-2xl font-bold text-slate-900">$6.0B</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Avg Risk Score</p>
                  <p className="text-2xl font-bold text-slate-900">42</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">At-Risk Value</p>
                  <p className="text-2xl font-bold text-red-600">$2.1B</p>
                </div>
                <TrendingUp className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Charts Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Portfolio Distribution
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant={viewMode === "count" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("count")}
                    >
                      Property Count
                    </Button>
                    <Button
                      variant={viewMode === "value" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("value")}
                    >
                      Dollar Value
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  View portfolio distribution by {viewMode === "count" ? "number of properties" : "total value"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={portfolioData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [
                        viewMode === "value" ? `$${value}B` : `${value} properties`,
                        viewMode === "value" ? "Value" : "Count",
                      ]}
                    />
                    <Bar dataKey={viewMode === "value" ? "value" : "properties"} fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Risk Trend Analysis
                </CardTitle>
                <CardDescription>Monthly risk evolution across portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={riskTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="physical" stroke="#ef4444" strokeWidth={2} name="Physical Risk" />
                    <Line
                      type="monotone"
                      dataKey="transition"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      name="Transition Risk"
                    />
                    <Line
                      type="monotone"
                      dataKey="financial"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Financial Impact"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk vs Value Scatter Analysis</CardTitle>
                <CardDescription>Property risk scores plotted against asset values</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={riskScatterData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="risk" name="Risk Score" />
                    <YAxis dataKey="value" name="Value ($M)" />
                    <Tooltip
                      formatter={(value, name) => [
                        name === "risk" ? `${value} Risk Score` : `$${value}M`,
                        name === "risk" ? "Risk" : "Value",
                      ]}
                      labelFormatter={(label, payload) => payload?.[0]?.payload?.name || ""}
                    />
                    <Scatter dataKey="value" fill="#3b82f6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChartIcon className="w-5 h-5 mr-2" />
                  Exposure Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedExposure} onValueChange={setSelectedExposure}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="geo">Geography</TabsTrigger>
                    <TabsTrigger value="type">Type</TabsTrigger>
                    <TabsTrigger value="lob">LOB</TabsTrigger>
                  </TabsList>

                  <TabsContent value="geo" className="mt-4">
                    <div className="space-y-3">
                      {portfolioData.map((item) => (
                        <div key={item.region} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.region}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-slate-600">${item.value}B</span>
                            <Badge
                              variant={
                                item.risk === "High" ? "destructive" : item.risk === "Medium" ? "secondary" : "default"
                              }
                            >
                              {item.risk}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="type" className="mt-4">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={exposureData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {exposureData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </TabsContent>

                  <TabsContent value="lob" className="mt-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Commercial Banking</span>
                        <span className="text-sm text-slate-600">$2.4B</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Investment Banking</span>
                        <span className="text-sm text-slate-600">$1.8B</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Wealth Management</span>
                        <span className="text-sm text-slate-600">$1.2B</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Real Estate</span>
                        <span className="text-sm text-slate-600">$0.6B</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Red Flag Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">High Flood Risk</p>
                    <p className="text-xs text-slate-600">12 properties in flood-prone areas</p>
                    <p className="text-xs text-red-600">$450M at risk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Carbon Tax Exposure</p>
                    <p className="text-xs text-slate-600">28 properties with high emissions</p>
                    <p className="text-xs text-amber-600">$1.2M annual impact</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Energy Inefficiency</p>
                    <p className="text-xs text-slate-600">35 properties below benchmark</p>
                    <p className="text-xs text-orange-600">15% above market costs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Segmentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Low Risk</span>
                    <span className="text-sm text-green-600">32%</span>
                  </div>
                  <Progress value={32} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Medium Risk</span>
                    <span className="text-sm text-yellow-600">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">High Risk</span>
                    <span className="text-sm text-red-600">23%</span>
                  </div>
                  <Progress value={23} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portfolio Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-transparent" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Export Risk Report
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Schedule Assessment
                </Button>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  View Recommendations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
