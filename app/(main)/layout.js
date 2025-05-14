"use client";
import React from "react";
import TopNav from "./_components/TopNav";
import AppSidebar from "./_components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const MainLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col md:flex-row w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col w-full">
          <TopNav />
          <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full animate-fade-in">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;