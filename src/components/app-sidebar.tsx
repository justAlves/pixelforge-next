'use client'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import userStore from "@/stores/user.store"
import Image from "next/image"
import { useTheme } from "next-themes"
import Logo from "@/assets/images/logo.svg"
import LogoDark from "@/assets/images/logo-dark.svg"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { user } = userStore()
  const { theme, systemTheme} = useTheme()
  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark")

  return (
    <Sidebar
      variant="floating"
      draggable
      className="max-w-xs h-full bg-sidebar"
    >
      <SidebarContent>
        <div className="flex items-center justify-center h-16">
          <Image
            src={isDark ? LogoDark : Logo}
            alt="Logo"
            width={150}
            height={50} 
          />
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
