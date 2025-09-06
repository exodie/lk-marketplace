import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface FavoritesState {
  items: string[]
}

const initialState: FavoritesState = {
  items: []
}

// Функция для загрузки избранного из localStorage
const loadFavoritesFromStorage = (): string[] => {
  if (typeof window === 'undefined') return []

  try {
    const stored = localStorage.getItem('favorites')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error loading favorites from localStorage:', error)
    return []
  }
}

// Функция для сохранения в localStorage
const saveFavoritesToStorage = (items: string[]) => {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem('favorites', JSON.stringify(items))
  } catch (error) {
    console.error('Error saving favorites to localStorage:', error)
  }
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ...initialState,
    items: loadFavoritesFromStorage()
  },
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find((itemId) => itemId === action.payload)
      if (!existingItem) {
        state.items.push(action.payload)
        saveFavoritesToStorage(state.items)
      }
    },

    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((itemId) => itemId !== action.payload)
      saveFavoritesToStorage(state.items)
    },

    toggleFavorite: (state, action: PayloadAction<string>) => {
      const existingIndex = state.items.findIndex((itemId) => itemId === action.payload)

      if (existingIndex === -1) {
        state.items.push(action.payload)
      } else {
        state.items.splice(existingIndex, 1)
      }

      saveFavoritesToStorage(state.items)
    },

    clearFavorites: (state) => {
      state.items = []
      saveFavoritesToStorage(state.items)
    },

    // Для синхронизации при загрузке приложения
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload
    }
  }
})

export const {
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  clearFavorites,
  setFavorites
} = favoritesSlice.actions

export const favoritesReducer = favoritesSlice.reducer
