import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const InitFavorites: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadFavorites = () => {
      try {
        const stored = localStorage.getItem('favorites')
        if (stored) {
          const favorites = JSON.parse(stored)
          dispatch({ type: 'favorites/setFavorites', payload: favorites })
        }
      } catch (error) {
        console.error('Error initializing favorites:', error)
      }
    }

    loadFavorites()
  }, [dispatch])

  return null
}
