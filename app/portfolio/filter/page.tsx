"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TopNav } from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Filter, ArrowRight, PieChart } from "lucide-react"

export default function PortfolioFilterPage() {
  const router = useRouter()
  const [filters, setFilters] = useState({
    geography: {
      country: "",
      province: "",
      city: "",
    },
    propertyTypes: [] as string[],
    energySources: [] as string[],
    emissionIntensity: [0, 100],
    certifications: [] as string[],
    lob: [] as string[],
  })

  const handlePropertyTypeChange = (type: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      propertyTypes: checked ? [...prev.propertyTypes, type] : prev.propertyTypes.filter((t) => t !== type),
    }))
  }

  const handleEnergySourceChange = (source: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      energySources: checked ? [...prev.energySources, source] : prev.energySources.filter((s) => s !== source),
    }))
  }

  const handleCertificationChange = (cert: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      certifications: checked ? [...prev.certifications, cert] : prev.certifications.filter((c) => c !== cert),
    }))
  }

  const handleLOBChange = (lob: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      lob: checked ? [...prev.lob, lob] : prev.lob.filter((l) => l !== lob),
    }))
  }

  const handleContinue = () => {
    router.push("/portfolio/overview")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopNav />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Portfolio Filter</h1>
          <p className="text-slate-600">
            Select portfolio parameters to analyze climate transition risks across your properties
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Geography */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Geographic Filters
                </CardTitle>
                <CardDescription>Select geographic regions for analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Select
                      value={filters.geography.country}
                      onValueChange={(value) =>
                        setFilters((prev) => ({ ...prev, geography: { ...prev.geography, country: value } }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="mexico">Mexico</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Province/State</Label>
                    <Select
                      value={filters.geography.province}
                      onValueChange={(value) =>
                        setFilters((prev) => ({ ...prev, geography: { ...prev.geography, province: value } }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select province" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ontario">Ontario</SelectItem>
                        <SelectItem value="quebec">Quebec</SelectItem>
                        <SelectItem value="bc">British Columbia</SelectItem>
                        <SelectItem value="alberta">Alberta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>City</Label>
                    <Select
                      value={filters.geography.city}
                      onValueChange={(value) =>
                        setFilters((prev) => ({ ...prev, geography: { ...prev.geography, city: value } }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toronto">Toronto</SelectItem>
                        <SelectItem value="vancouver">Vancouver</SelectItem>
                        <SelectItem value="montreal">Montreal</SelectItem>
                        <SelectItem value="calgary">Calgary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Types */}
            <Card>
              <CardHeader>
                <CardTitle>Property Types</CardTitle>
                <CardDescription>Select property types to include in analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {["Office Buildings", "Retail Centers", "Industrial", "Mixed Use", "Warehouses", "Hotels"].map(
                    (type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={filters.propertyTypes.includes(type)}
                          onCheckedChange={(checked) => handlePropertyTypeChange(type, checked as boolean)}
                        />
                        <Label htmlFor={type}>{type}</Label>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Energy Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Energy Sources</CardTitle>
                <CardDescription>Filter by primary energy sources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {["Natural Gas", "Electric", "Oil", "Heat Pump", "District Heating", "Solar"].map((source) => (
                    <div key={source} className="flex items-center space-x-2">
                      <Checkbox
                        id={source}
                        checked={filters.energySources.includes(source)}
                        onCheckedChange={(checked) => handleEnergySourceChange(source, checked as boolean)}
                      />
                      <Label htmlFor={source}>{source}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emission Intensity */}
            <Card>
              <CardHeader>
                <CardTitle>Emission Intensity Range</CardTitle>
                <CardDescription>Filter by carbon emission intensity (kg CO2/m²/year)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={filters.emissionIntensity}
                    onValueChange={(value) => setFilters((prev) => ({ ...prev, emissionIntensity: value }))}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>{filters.emissionIntensity[0]} kg CO2/m²</span>
                    <span>{filters.emissionIntensity[1]} kg CO2/m²</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Green Certifications</CardTitle>
                <CardDescription>Filter by environmental certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {["LEED Certified", "LEED Gold", "LEED Platinum", "Energy Star", "BOMA BEST", "Green Globes"].map(
                    (cert) => (
                      <div key={cert} className="flex items-center space-x-2">
                        <Checkbox
                          id={cert}
                          checked={filters.certifications.includes(cert)}
                          onCheckedChange={(checked) => handleCertificationChange(cert, checked as boolean)}
                        />
                        <Label htmlFor={cert}>{cert}</Label>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Line of Business */}
            <Card>
              <CardHeader>
                <CardTitle>Line of Business / Sub-LOB</CardTitle>
                <CardDescription>Filter by business segments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Commercial Banking",
                    "Investment Banking",
                    "Wealth Management",
                    "Insurance",
                    "Capital Markets",
                    "Real Estate",
                  ].map((lob) => (
                    <div key={lob} className="flex items-center space-x-2">
                      <Checkbox
                        id={lob}
                        checked={filters.lob.includes(lob)}
                        onCheckedChange={(checked) => handleLOBChange(lob, checked as boolean)}
                      />
                      <Label htmlFor={lob}>{lob}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  Filter Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-700">Geographic Scope</p>
                  <p className="text-sm text-slate-500">
                    {filters.geography.country || "All Countries"} • {filters.geography.province || "All Provinces"}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">Property Types</p>
                  <p className="text-sm text-slate-500">
                    {filters.propertyTypes.length > 0 ? `${filters.propertyTypes.length} selected` : "All types"}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">Energy Sources</p>
                  <p className="text-sm text-slate-500">
                    {filters.energySources.length > 0 ? `${filters.energySources.length} selected` : "All sources"}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">Emission Range</p>
                  <p className="text-sm text-slate-500">
                    {filters.emissionIntensity[0]} - {filters.emissionIntensity[1]} kg CO2/m²
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">Certifications</p>
                  <p className="text-sm text-slate-500">
                    {filters.certifications.length > 0
                      ? `${filters.certifications.length} selected`
                      : "All certifications"}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">Business Lines</p>
                  <p className="text-sm text-slate-500">
                    {filters.lob.length > 0 ? `${filters.lob.length} selected` : "All LOBs"}
                  </p>
                </div>

                <Button onClick={handleContinue} className="w-full bg-blue-600 hover:bg-blue-700">
                  Continue to Portfolio View
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
