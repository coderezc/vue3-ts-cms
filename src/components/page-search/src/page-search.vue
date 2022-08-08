<template>
  <div class="page-search">
    <div class="search">
      <e-form v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h1>高级检索</h1>
        </template>
        <template #footer>
          <div class="btns">
            <el-button type="primary" @click="handleResetClick">重置</el-button>
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
  setup(props) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    const handleResetClick = () => {
      formData.value = formOriginData
    }
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    return { formData, handleResetClick }
  }
})
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
