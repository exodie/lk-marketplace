import { type Store, configureStore } from '@reduxjs/toolkit'

import { itemsReducer } from '@/reducers'

const reducer = {
  items: itemsReducer
}

export const createStore = (): Store => {
  return configureStore({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reducer,
    devTools: { name: 'LK_MARKETPLACE' },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  })
}
