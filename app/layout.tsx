'use client'

import { ThemeProvider } from "@/components/ui/themeProvider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/dashboard/components/appSidebar"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/app/globals.css'

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background text-foreground">
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <div className="flex min-h-screen w-full">
                {/* Sidebar */}
                <AppSidebar />

                {/* Main content area */}
                <div className="flex-1 flex flex-col">
                  {/* Optional top bar / trigger for mobile */}
                  <header className="border-b p-2 flex items-center">
                    <SidebarTrigger />
                    <h1 className="ml-2 font-semibold text-lg">Dashboard</h1>
                  </header>

                  <main className="flex-1 p-4">{children}</main>
                </div>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
