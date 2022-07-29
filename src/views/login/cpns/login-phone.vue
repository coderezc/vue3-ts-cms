<template>
  <div>
    <el-form :model="phone" status-icon :rules="rules" label-width="70px">
      <el-form-item label="手机号" prop="telephone">
        <el-input type="text" v-model="phone.telephone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verification">
        <div class="getCode">
          <el-input type="text" v-model="phone.verification"></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phoneConfig'
export default defineComponent({
  setup() {
    const phone = reactive({
      telephone: '',
      verification: ''
    })
    return { phone, rules }
  }
})
</script>

<style scoped>
.getCode {
  display: flex;
}
.el-button {
  margin-left: 5px;
}
</style>
