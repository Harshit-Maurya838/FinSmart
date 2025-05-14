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
import { Home, User, Plus, CreditCard, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AppSidebar = () => {
//   const pathname = usePathname();
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
      path: "/transaction",
      icon: Plus,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Finy Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.path}
                        // className={`${
                        //   isActive ? "sidebar-active" : ""
                        // }`}
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
        <Button
          variant="outline"
          className="w-full text-white border-white/20 hover:bg-white/10"
          // onClick={() => (window.location.href = "/")}
        >
          <LogOut size={16} className="mr-2" />
          <span>Sign out</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
