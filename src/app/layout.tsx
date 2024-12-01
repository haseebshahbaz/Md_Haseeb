import { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhammad Haseeb - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. View my portfolio, projects, and get in touch.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "Web Developer", "Frontend Developer", "Muhammad Haseeb"],
  authors: [{ name: "Muhammad Haseeb" }],
  creator: "Muhammad Haseeb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haseeb.dev",
    title: "Muhammad Haseeb - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies",
    siteName: "Muhammad Haseeb Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Haseeb - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies",
    creator: "@haseebdev"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  manifest: "/site.webmanifest"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

