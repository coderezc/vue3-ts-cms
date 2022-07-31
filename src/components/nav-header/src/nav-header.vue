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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand
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

<style scoped lang="less"></style>
