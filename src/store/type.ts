import { ILoginState } from './login/type'
import { ISystemState } from './main/system/types'
import { IDashboardState } from './main/analysis/type'
export interface IRootState {
  userId: string
  age: number
}
export interface IRootWithMoudle {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}
export type IStoreType = IRootState & IRootWithMoudle
