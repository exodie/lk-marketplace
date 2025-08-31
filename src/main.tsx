import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'

import { RootLayout } from '@/components/tools'

import { configRouter } from '@/utils'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout>
      <RouterProvider router={configRouter} />
    </RootLayout>
  </StrictMode>
)
