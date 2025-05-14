"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "./ui/sidebar";


export function ProvidersWrapper({ children }) {
  return (
    <ClerkProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </ClerkProvider>
  );
}
