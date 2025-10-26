import { ThemeProvider } from "@/components/ui/themeProvider";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="min-h-screen bg-background text-foreground">
          
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
      
        </body>
      </html>
    </>
  );
}
