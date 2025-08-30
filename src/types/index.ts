import type { Action } from 'redux'
import type { ThunkDispatch } from 'redux-thunk'

// Объявление дженерик-типов
export type DispatchApi<
  S = unknown, // StateType по умолчанию
  A extends Action = Action, // Базовый Action из Redux
  E = Record<string, never> // Дополнительные аргументы Thunk
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S) => Promise<void>
