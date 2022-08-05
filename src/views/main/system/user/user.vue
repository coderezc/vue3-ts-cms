<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  components: {
    PageSearch
  },
  name: 'user',
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    return { searchFormConfig }
  }
})
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
