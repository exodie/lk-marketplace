import type { FC, PropsWithChildren } from 'react'

import { Footer } from '../footer'
import { Header } from '../header'

import { ThemeProvider } from './theme-provider'

// TODO: Add header component
// TODO: Add footer component
export const RootLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="py-2 px-4 flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
