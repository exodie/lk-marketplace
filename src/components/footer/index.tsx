import { ModeToggle } from '@/components/tools'

import { AUTHOR_NAME, AUTHOR_TITLE } from '@/constants'

export const Footer = () => {
  return (
    <footer className="py-2 px-4 flex sm:flex-row flex-col sm:items-center justify-between sm:gap-x-4">
      <span>
        {AUTHOR_TITLE}
        <a
          className="underline text-blue-600"
          href="https://github.com/exodie"
          target="_blank"
        >
          {AUTHOR_NAME}
        </a>
      </span>

      <ModeToggle />
    </footer>
  )
}
