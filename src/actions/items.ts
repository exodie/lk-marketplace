import { createAsyncThunk } from '@reduxjs/toolkit'

import { UNKNOWN_ERROR } from '@/constants'

import type { Advertisment } from '@/types'

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/advertisements`)

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }

      const data: Advertisment[] = await response.json()

      return data
    } catch (error) {
      return rejectWithValue({
        message: error instanceof Error ? error.message : UNKNOWN_ERROR,
        code: (error as unknown as Record<string, number>).code
      })
    }
  }
)
