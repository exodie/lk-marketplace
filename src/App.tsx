import { useMemo, type FC } from 'react'
import { Provider } from 'react-redux'

import { createStore } from './store'

const App: FC = () => {
  const store = useMemo(() => createStore(), [])

  return <Provider store={store}>Click me</Provider>
}

export default App
