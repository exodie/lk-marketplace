import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '@/store'

export const useFavorites = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.items)

  const addToFavorites = useCallback(
    (itemId: string) => {
      dispatch({ type: 'favorites/addToFavorites', payload: itemId })
    },
    [dispatch]
  )

  const removeFromFavorites = useCallback(
    (itemId: string) => {
      dispatch({ type: 'favorites/removeFromFavorites', payload: itemId })
    },
    [dispatch]
  )

  const toggleFavorite = useCallback(
    (itemId: string) => {
      dispatch({ type: 'favorites/toggleFavorite', payload: itemId })
    },
    [dispatch]
  )

  const clearFavorites = useCallback(() => {
    dispatch({ type: 'favorites/clearFavorites' })
  }, [dispatch])

  const isFavorite = useCallback(
    (itemId: string) => {
      return favorites.some((id) => id === itemId)
    },
    [favorites]
  )

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    clearFavorites,
    isFavorite,
    favoritesCount: favorites.length
  }
}
