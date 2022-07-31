import { ILoginState } from './login/type'
export interface IRootState {
  userId: string
  age: number
}
export interface IRootWithMoudle {
  login: ILoginState
}
export type IStoreType = IRootState & IRootWithMoudle
