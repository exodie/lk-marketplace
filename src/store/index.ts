import { type Store, configureStore } from '@reduxjs/toolkit'

const reducer = {}

export const createStore = (): Store => {
  return configureStore({
    reducer,
    devTools: { name: 'LK_MARKETPLACE' },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  })
}
