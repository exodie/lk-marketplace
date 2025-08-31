import type { Advertisment } from '.'

export type ItemsReducerType = {
  data?: Advertisment[]
  isLoading: boolean
  error?: {
    code?: number
    message?: string
  }
}
