import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Map,
  BarChart3,
  Train,
  Car,
  Leaf,
  MessageSquare,
  Info,
  Mail,
  Menu,
  Accessibility
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Live Map", url: "/live-map", icon: Map },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Metro", url: "/metro", icon: Train },
  { title: "Cab/Taxi", url: "/taxi", icon: Car },
  { title: "CO₂ Tracker", url: "/co2-tracker", icon: Leaf },
  { title: "Feedback", url: "/feedback", icon: MessageSquare },
  { title: "Accessibility", url: "/accessibility", icon: Accessibility },
  { title: "About", url: "/about", icon: Info },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/20 text-primary border-l-2 border-primary glow-button" 
      : "hover:bg-accent/50 hover:text-accent-foreground transition-colors";

  return (
    <Sidebar 
      className={`${isCollapsed ? "w-14" : "w-64"} glass-card border-r border-border/50 transition-all duration-300`}
      collapsible="icon"
    >
      <SidebarContent className="bg-gradient-to-b from-sidebar to-sidebar/80">
        {/* Brand Header */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <img src="/logo.svg" alt="UrbanMobility Logo" className="w-6 h-6" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg gradient-text">UrbanMobility</h2>
                <p className="text-xs text-muted-foreground">Smart Transportation</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-muted-foreground text-xs uppercase tracking-wider px-4">
            Navigation
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status indicator */}
        {!isCollapsed && (
          <div className="mt-auto p-4 border-t border-border/50">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-muted-foreground">System Online</span>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}