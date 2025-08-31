import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { fetchItems } from '@/actions'

import type { Advertisment, ItemsReducerType } from '@/types'

export const initialState: ItemsReducerType = {
  isLoading: false
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined
    },

    clearItems: (state) => {
      state.data = undefined
      state.error = undefined
      state.isLoading = false
    },

    addItem: (state, action: PayloadAction<Advertisment>) => {
      if (state.data) {
        state.data.push(action.payload)
      } else {
        state.data = [action.payload]
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.filter((item) => item.id !== action.payload)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Advertisment[]>) => {
        state.isLoading = false
        state.data = action.payload
        state.error = undefined
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false
        state.error = {
          message: action.error.message || 'Unknown error',
          code: (action.payload as unknown as Record<string, number>)?.code
        }
      })
  }
})

export const { clearError, clearItems, addItem, removeItem } = itemsSlice.actions

export const itemsReducer = itemsSlice.reducer

export type ItemsState = ReturnType<typeof itemsReducer>
