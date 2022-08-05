import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'spord',
      type: 'select',
      label: '喜欢的运动',
      placeholder: 'sdadasd',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间'
    }
  ],
  itemStyle: {
    padding: '10px 40px'
  }
}
