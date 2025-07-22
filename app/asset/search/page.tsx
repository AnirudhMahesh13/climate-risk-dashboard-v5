"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TopNav } from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Building, DollarSign } from "lucide-react"

const mockProperties = [
  {
    id: 1,
    address: "123 Bay Street, Toronto, ON",
    type: "Office Building",
    value: "$45M",
    sqft: "250,000",
    riskScore: "Medium",
  },
  {
    id: 2,
    address: "456 King Street West, Toronto, ON",
    type: "Mixed Use",
    value: "$32M",
    sqft: "180,000",
    riskScore: "Low",
  },
  {
    id: 3,
    address: "789 Queen Street, Toronto, ON",
    type: "Retail Complex",
    value: "$28M",
    sqft: "120,000",
    riskScore: "High",
  },
]

export default function AssetSearchPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(mockProperties)

  const handleSearch = () => {
    // Mock search functionality
    const filtered = mockProperties.filter((property) =>
      property.address.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setSearchResults(filtered)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-600 bg-green-50"
      case "Medium":
        return "text-yellow-600 bg-yellow-50"
      case "High":
        return "text-red-600 bg-red-50"
      default:
        return "text-slate-600 bg-slate-50"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopNav />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Asset Search</h1>
          <p className="text-slate-600">Search for commercial properties to analyze climate transition risks</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Property Search
            </CardTitle>
            <CardDescription>Enter a property address to find commercial real estate assets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Input
                placeholder="Enter property address (e.g., 123 Bay Street, Toronto)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button onClick={handleSearch} className="bg-emerald-600 hover:bg-emerald-700">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Search Results</h2>

          {searchResults.map((property) => (
            <Card
              key={property.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => router.push(`/asset/details/${property.id}`)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 text-slate-500 mr-2" />
                      <h3 className="text-lg font-semibold text-slate-900">{property.address}</h3>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 text-slate-400 mr-1" />
                        <span className="text-slate-600">{property.type}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-slate-400 mr-1" />
                        <span className="text-slate-600">{property.value}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Size: </span>
                        <span className="text-slate-600">{property.sqft} sq ft</span>
                      </div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(property.riskScore)}`}
                        >
                          {property.riskScore} Risk
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    Analyze Property
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
