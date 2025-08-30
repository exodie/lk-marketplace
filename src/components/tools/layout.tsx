import type { FC, PropsWithChildren } from 'react'

import { ThemeProvider } from './theme-provider'

// TODO: Add header component
// TODO: Add footer component
export const RootLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <main className="py-2 px-4 flex-1">{children}</main>
      </div>
    </ThemeProvider>
  )
}
