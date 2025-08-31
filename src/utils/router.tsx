import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import { Home } from '@/pages'

export const configRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true
      }
    ]
  }
])
