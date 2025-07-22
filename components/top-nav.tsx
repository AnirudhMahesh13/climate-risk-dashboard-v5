"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Building2, PieChart, Info, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export function TopNav() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Asset", path: "/asset", icon: Building2 },
    { name: "Portfolio", path: "/portfolio", icon: PieChart },
    { name: "About Us", path: "/about", icon: Info },
  ]

  const handleLogout = () => {
    localStorage.removeItem("github_auth")
    router.push("/")
    window.location.reload()
  }

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg"></div>
              <span className="text-xl font-bold text-slate-900">Climate Risk Analytics</span>
            </div>

            <div className="flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.path || pathname.startsWith(item.path + "/")

                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-md transition-colors",
                      isActive
                        ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                    )}
                    onClick={() => router.push(item.path)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Button>
                )
              })}
            </div>
          </div>

          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-slate-600 hover:text-slate-900">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </nav>
  )
}
