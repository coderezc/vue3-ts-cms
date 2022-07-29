export const rules = {
  telephone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern:
        /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  verification: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}
