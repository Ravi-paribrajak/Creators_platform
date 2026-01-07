import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from '@clerk/nextjs'
import { dark, neobrutalism, shadesOfPurple  } from '@clerk/themes'
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Content Platform",
  description: "Content Creation powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              theme: shadesOfPurple,
            }}>

            <ConvexClientProvider>
              <Header/>
              <main className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
                {children}
              </main>
            </ConvexClientProvider>
          </ClerkProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}
