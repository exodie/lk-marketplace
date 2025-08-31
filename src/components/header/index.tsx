import type { FC } from 'react'

import { LOGO_NAME } from '@/constants'

export const Header: FC = () => {
  return (
    <header className="m-4 p-4 border-2 border-foreground rounded-4xl">
      <nav className="flex flex-row items-center justify-between">
        <h1 className="text-3xl">{LOGO_NAME}</h1>
      </nav>
    </header>
  )
}
