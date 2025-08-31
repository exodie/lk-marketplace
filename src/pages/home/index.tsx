import { useEffect, type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchItems } from '@/actions'

import { type ItemsState } from '@/reducers/items'

export const Home: FC = () => {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(
    (state: { items: ItemsState }) => state.items
  )

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch(fetchItems())
  }, [dispatch])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return null

  return (
    <>
      {data?.map((adverts) => (
        <div key={adverts.id}>{adverts.name}</div>
      ))}
    </>
  )
}
