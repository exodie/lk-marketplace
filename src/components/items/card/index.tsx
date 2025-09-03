import { useCallback, type FC } from 'react'

import { Card, CardContent, CardHeader, CardTitle, AspectRatio } from '@/components/ui'

import { UNKNOWN_IMAGE } from '@/constants'

import type { Advertisment } from '@/types'

export const ItemsCard: FC<Advertisment> = ({ id, name, imageUrl }) => {
  const handleCardClick = useCallback((id?: string) => {
    window.open(`/${id}`, '_blank')
  }, [])

  return (
    <Card
      className="hover:cursor-pointer active:cursor-pointer focus:cursor-pointer"
      onClick={() => handleCardClick(id)}
      role="link"
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={3 / 4}>
          <img
            src={imageUrl || UNKNOWN_IMAGE}
            className="h-full w-full rounded-lg object-cover"
            loading="lazy"
          />
        </AspectRatio>
      </CardContent>
    </Card>
  )
}
