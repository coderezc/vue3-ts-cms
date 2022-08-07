import eRequest from '@/service'
import { IDataType } from '@/service/types'
export function getPageListData(url: string, queryInfo: any) {
  return eRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
