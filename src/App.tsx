import { type FC } from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { InitFavorites } from './components/tools'
import { store } from './store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <Outlet />
      <InitFavorites />
    </Provider>
  )
}

export default App
