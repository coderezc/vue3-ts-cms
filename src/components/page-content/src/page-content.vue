<template>
  <div class="page-content">
    <e-table v-bind="contentTableConfig" :listData="dataList">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
        <el-button>刷新</el-button>
      </template>
      <!-- 表格中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handle>
        <div class="btns">
          <el-button size="small" type="info">操作</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </div>
      </template>
    </e-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import ETable from '@/base-ui/table'
export default defineComponent({
  components: {
    ETable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    return { dataList }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
