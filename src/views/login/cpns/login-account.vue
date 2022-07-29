<template>
  <div>
    <el-form
      :model="account"
      status-icon
      :rules="rules"
      label-width="70px"
      ref="formRef"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="account.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/accountConfig'
import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const account = reactive({
      userName: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const accountAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //判断是否要记住密码
          if (isKeepPassword) {
            //本地缓存
            localCache.setCache('userName', account.userName)
            localCache.setCache('password', account.password)
          }
        }
      })
    }
    return { account, rules, accountAction, formRef }
  }
})
</script>

<style scoped></style>
