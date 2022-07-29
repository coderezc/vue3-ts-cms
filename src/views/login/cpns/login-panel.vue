<template>
  <div class="login-panel">
    <h1 class="title">东农集市管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="loginAccountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机号登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="handleAccount">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="danger">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="loginBtn">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Iphone, User } from '@element-plus/icons-vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    Iphone,
    User,
    loginAccount,
    loginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const loginAccountRef = ref<InstanceType<typeof loginAccount>>()
    const loginBtn = () => {
      alert('正在登陆')
      loginAccountRef.value?.accountAction(isKeepPassword.value)
    }
    return { isKeepPassword, loginBtn, loginAccountRef }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
}
.title {
  text-align: center;
}
.el-button {
  width: 100%;
  margin-top: 10px;
}
.handleAccount {
  display: flex;
  justify-content: space-between;
}
</style>
