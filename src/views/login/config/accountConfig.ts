export const rules = {
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须为5-10位字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{4,12}$/,
      message: '密码必须为4-12位字母或数字',
      trigger: 'blur'
    }
  ]
}
