<template>
  <div class="nav-header">
    <el-icon
      style="font-size: 23px; cursor: pointer"
      @click="handleFoldClick"
      v-if="!isFold"
      ><Fold
    /></el-icon>
    <el-icon
      style="font-size: 23px; cursor: pointer"
      @click="handleFoldClick"
      v-if="isFold"
      ><Expand
    /></el-icon>
    <div class="content">
      <div>面包屑</div>
      <userInfo></userInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import userInfo from './user-info.vue'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    userInfo
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return { isFold, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
