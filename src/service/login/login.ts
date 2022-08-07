import eRequest from '../index'
import { IAccount, ILoginResult } from './type'
import { IDataType } from '../types'
enum loginAPI {
  AccountLogin = './login',
  LoginUserInfo = '/users/', // /users/1
  UserMenus = '/role/' // role/1/menu
}
export function accountLoginRequest(account: IAccount) {
  return eRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: {
      name: account.userName,
      password: account.password
    }
  })
}
export function requestUserInfoById(id: number) {
  return eRequest.get<IDataType>({
    url: loginAPI.LoginUserInfo + id
  })
}
export function requestUserMenusByRoleId(id: number) {
  return eRequest.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu'
  })
}
