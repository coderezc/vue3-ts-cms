<template>
  <div class="user">
    <div class="search">
      <e-form v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import eForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    eForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
