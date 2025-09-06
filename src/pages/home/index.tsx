import { useEffect, type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchItems } from '@/actions'

import { ItemsList, ItemsLoading, ItemsCard } from '@/components/items'

import { type ItemsState } from '@/reducers'
import type { Advertisment } from '@/types'

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

  if (isLoading) {
    return <ItemsLoading />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data) {
    return null
  }

  return (
    <ItemsList>
      {data?.map((adverts) => (
        <ItemsCard key={adverts.id} {...adverts as Required<Advertisment>} />
      ))}
    </ItemsList>
  )
}
