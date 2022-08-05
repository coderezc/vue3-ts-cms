import { ILoginState } from './login/type'
import { ISystemState } from './main/system/types'
export interface IRootState {
  userId: string
  age: number
}
export interface IRootWithMoudle {
  login: ILoginState
  system: ISystemState
}
export type IStoreType = IRootState & IRootWithMoudle
