"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@clerk/nextjs";
import { Home, User, Plus, CreditCard, LogOut, PiggyBank } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AppSidebar = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: Home,
      exact: true,
    },
    {
      title: "Account",
      path: "/account",
      icon: User,
    },
    {
      title: "New Transaction",
      path: "/transaction/create",
      icon: Plus,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex items-center">
        <div className="flex h-16 items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <PiggyBank className="h-8 w-8" />
            <span className="font-bold">FinSmart</span>
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                // Check if the current path starts with the item path
                const isActive =
                  item.path === "/account"
                    ? pathname.startsWith("/account")
                    : pathname === item.path;

                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.path}
                        className={`flex items-center gap-3 px-3 py-2 w-full ${
                          isActive ? "sidebar-active" : "text-gray-400"
                        }`}
                      >
                        <item.icon size={20} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SignOutButton>
          <Button
            variant="outline"
            className="w-full text-white bg-[hsl(265 83% 45%)] border-white/20"
          >
            <LogOut size={16} className="mr-2" />
            <span>Sign out</span>
          </Button>
        </SignOutButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
