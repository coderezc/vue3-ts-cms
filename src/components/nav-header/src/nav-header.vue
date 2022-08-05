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
      <e-breadcrumb :breadcrumbs="breadcrumbs" />
      <userInfo></userInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import userInfo from './user-info.vue'
import EBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    userInfo,
    EBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    //面包屑数据
    const breadcrumbs = computed(() => {
      const store = useStore()
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return { isFold, handleFoldClick, breadcrumbs }
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
