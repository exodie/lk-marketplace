import type { FC } from 'react'

import { ItemsList } from '../list'

import { Card, CardContent, CardFooter, CardHeader, Skeleton } from '@/components/ui'

export const ItemsLoading: FC = () => {
  return (
    <ItemsList>
      {Array.from({ length: 20 }, (_, i) => i++).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <Skeleton key={index} className="h-[35px] w-1/2 rounded-xl" />
          </CardHeader>
          <CardContent>
            <Skeleton key={index} className="h-[150px] w-full rounded-xl" />
          </CardContent>
          <CardFooter>
            <Skeleton key={index} className="h-[35px] w-full rounded-xl" />
          </CardFooter>
        </Card>
      ))}
    </ItemsList>
  )
}
