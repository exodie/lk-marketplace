import { useMemo, type FC } from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { createStore } from './store'

const App: FC = () => {
  const store = useMemo(() => createStore(), [])

  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  )
}

export default App
