// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@once-ui-system/core'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DApp Planner',
  description: 'Generate product plans for your Web3 app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
