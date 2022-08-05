<template>
  <div class="e-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    v-model="formData[`${item.field}`]"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { propsToAttrMap } from '@vue/shared'
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types/index'
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      dafault: () => {
        return {
          padding: '10px 40px'
        }
      }
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(formData, (newValue) =>
      emit('update:modelValue', newValue, {
        deep: true
      })
    )
    return { formData }
  }
})
</script>

<style scoped lang="less">
.e-form {
  padding-top: 22px;
  .form-item {
    padding: 5px 3px;
  }
}
</style>