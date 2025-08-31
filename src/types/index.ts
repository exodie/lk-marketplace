import type { Action } from 'redux'
import type { ThunkDispatch } from 'redux-thunk'

// Объявление дженерик-типов
export type DispatchApi<
  S = unknown, // StateType по умолчанию
  A extends Action = Action, // Базовый Action из Redux
  E = Record<string, never> // Дополнительные аргументы Thunk
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S) => Promise<void>

export type Advertisment = {
  /* Уникальный идентификатор. */
  id?: string
  /* Название. */
  name?: string
  /* Описание. */
  description?: string
  /* Цена. */
  price?: number
  /* Дата и время создания. */
  createdAt?: string
  /* Количество просмотров. */
  views?: number
  /* Количество лайков. */
  likes?: number
  /* Ссылка на изображение. */
  imageUrl?: string
}

export const OrderStatus = {
  Created: 0,
  Paid: 1,
  Transport: 2,
  DeliveredToThePoint: 3,
  Received: 4,
  Archived: 5,
  Refund: 6
} as const

export type OrderItem = Advertisment & { count: number }

export type Order = {
  /* Уникальный идентификатор. */
  id: string
  /* Статус. */
  status: number
  /* Дата и время создания. */
  createdAt: string
  /* Дата и время завершения. */
  finishedAt?: string
  /* Товары в заказе. */
  items: OrderItem[]
  /* Способ доставки(Почта, СДЭК...) */
  deliveryWay: string
  /* Сумма заказа */
  total: number
}

export type Image = {
  /* Уникальный идентификатор. */
  id: number
  /* Ссылка. */
  url: string
  /* Название. */
  name: string
}

export * from './reducers'
