<template>
  <div class="page-search">
    <div class="search">
      <e-form v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h1>高级检索</h1>
        </template>
        <template #footer>
          <div class="btns">
            <el-button type="primary">重置</el-button>
            <el-button type="primary">搜索</el-button>
          </div>
        </template>
      </e-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EForm from '@/base-ui/form'
export default defineComponent({
  props: {
    searchFormConfig: {
      required: true,
      type: Object
    }
  },
  components: {
    EForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
