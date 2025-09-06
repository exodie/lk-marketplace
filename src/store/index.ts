import { configureStore } from '@reduxjs/toolkit'

import { favoritesReducer, itemsReducer } from '@/reducers'

const reducer = {
  items: itemsReducer,
  favorites: favoritesReducer
}

export const store = configureStore({
  reducer,
  devTools: { name: 'LK_MARKETPLACE' },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
