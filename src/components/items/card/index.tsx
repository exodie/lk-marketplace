import { useCallback, useMemo, type FC } from 'react'

import { HeartIcon } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  AspectRatio,
  CardAction,
  Button
} from '@/components/ui'

import { UNKNOWN_IMAGE } from '@/constants'

import { useFavorites } from '@/hooks'

import type { Advertisment } from '@/types'

export const ItemsCard: FC<Required<Advertisment>> = ({ id, name, imageUrl }) => {
  const { toggleFavorite, isFavorite } = useFavorites()

  const handleFavoriteClick = useCallback(() => {
    toggleFavorite(id)
  }, [id, toggleFavorite])

  const isFavoriteItem = useMemo(() => {
    return isFavorite(id)
  }, [id, isFavorite])

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardAction>
          <Button
            onClick={handleFavoriteClick}
            variant="outline"
            size="icon"
            className={isFavoriteItem ? 'text-red-500 border-red-500' : ''}
          >
            <HeartIcon fill={isFavoriteItem ? 'currentColor' : 'none'} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={3 / 4}>
          <img
            src={imageUrl || UNKNOWN_IMAGE}
            className="h-full w-full rounded-lg object-cover"
            loading="lazy"
            alt={name}
          />
        </AspectRatio>
      </CardContent>
    </Card>
  )
}
