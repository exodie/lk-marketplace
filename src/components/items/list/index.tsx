import type { FC, PropsWithChildren } from 'react'

/**
 * Служит CSS-оберткой для отображения айтемов\скелетона 
 * @returns FC with Children
 */
export const ItemsList: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {children}
    </div>
  )
}
