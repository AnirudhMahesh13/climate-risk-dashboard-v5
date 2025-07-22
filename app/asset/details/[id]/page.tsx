"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TopNav } from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Building, Save, ArrowRight } from "lucide-react"

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    companyName: "RBC Commercial Properties",
    propertyValue: "45000000",
    squareFootage: "250000",
    heatSource: "natural-gas",
    certifications: "leed-gold",
    climateZone: "4a",
    propertyType: "office",
    yearBuilt: "2010",
    occupancyRate: "95",
    notes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveAndContinue = () => {
    // Save form data (mock)
    router.push(`/asset/analysis/${params.id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopNav />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Property Details</h1>
          <p className="text-slate-600">Modify property metadata for accurate risk analysis</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="w-5 h-5 mr-2" />
              Property Information
            </CardTitle>
            <CardDescription>Update the property details to ensure accurate climate risk assessment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyValue">Property Value ($)</Label>
                <Input
                  id="propertyValue"
                  type="number"
                  value={formData.propertyValue}
                  onChange={(e) => handleInputChange("propertyValue", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="squareFootage">Square Footage</Label>
                <Input
                  id="squareFootage"
                  type="number"
                  value={formData.squareFootage}
                  onChange={(e) => handleInputChange("squareFootage", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearBuilt">Year Built</Label>
                <Input
                  id="yearBuilt"
                  type="number"
                  value={formData.yearBuilt}
                  onChange={(e) => handleInputChange("yearBuilt", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="heatSource">Primary Heat Source</Label>
                <Select value={formData.heatSource} onValueChange={(value) => handleInputChange("heatSource", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="natural-gas">Natural Gas</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="oil">Oil</SelectItem>
                    <SelectItem value="heat-pump">Heat Pump</SelectItem>
                    <SelectItem value="district">District Heating</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) => handleInputChange("propertyType", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="office">Office Building</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="mixed-use">Mixed Use</SelectItem>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="certifications">Green Certifications</Label>
                <Select
                  value={formData.certifications}
                  onValueChange={(value) => handleInputChange("certifications", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="leed-certified">LEED Certified</SelectItem>
                    <SelectItem value="leed-silver">LEED Silver</SelectItem>
                    <SelectItem value="leed-gold">LEED Gold</SelectItem>
                    <SelectItem value="leed-platinum">LEED Platinum</SelectItem>
                    <SelectItem value="energy-star">Energy Star</SelectItem>
                    <SelectItem value="boma-best">BOMA BEST</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="climateZone">Climate Zone</Label>
                <Select value={formData.climateZone} onValueChange={(value) => handleInputChange("climateZone", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1a">1A - Very Hot, Humid</SelectItem>
                    <SelectItem value="2a">2A - Hot, Humid</SelectItem>
                    <SelectItem value="3a">3A - Warm, Humid</SelectItem>
                    <SelectItem value="4a">4A - Mixed, Humid</SelectItem>
                    <SelectItem value="5a">5A - Cool, Humid</SelectItem>
                    <SelectItem value="6a">6A - Cold, Humid</SelectItem>
                    <SelectItem value="7a">7A - Very Cold</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupancyRate">Current Occupancy Rate (%)</Label>
              <Input
                id="occupancyRate"
                type="number"
                min="0"
                max="100"
                value={formData.occupancyRate}
                onChange={(e) => handleInputChange("occupancyRate", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any additional property information or special considerations..."
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={3}
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <Button variant="outline">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button onClick={handleSaveAndContinue} className="bg-emerald-600 hover:bg-emerald-700">
                Continue to Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
