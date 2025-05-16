import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ProvidersWrapper } from "@/components/ProvidersWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinSmart",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <link rel="icon" href="/Fevicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <main className="min-h-screen">
          {/* <ProvidersWrapper>{children}</ProvidersWrapper> */}
          {children}
        </main>
        <Toaster richColors />

        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with ❤️ by Harshit Maurya</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
