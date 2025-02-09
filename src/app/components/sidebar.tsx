
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ShoppingBag, Users, Settings, ChevronLeft, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components1/ui/avatar"

const sidebarItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: ShoppingBag },
  { name: "Users", href: "/admin/user", icon: Users },
  { name: "Settings", href: "/admin/setting", icon: Settings },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "flex flex-col bg-gray-900 text-white transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h1 className="text-xl font-bold">Admin</h1>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700">
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 mb-4">
          <Link href="/admin/profile" className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/2.jpg" alt="Misbah Jameel" />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="ml-3">
                <p className="font-medium">Misbah Jameel</p>
                <p className="text-xs text-gray-400">View Profile</p>
              </div>
            )}
          </Link>
        </div>
        <nav>
          <ul className="p-2 space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center p-2 rounded-lg transition-colors",
                    pathname === item.href ? "bg-pink-600 text-white" : "hover:bg-gray-800",
                  )}
                >
                  <item.icon size={20} className="shrink-0" />
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}