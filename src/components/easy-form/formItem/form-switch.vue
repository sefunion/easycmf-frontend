<template>
  <easy-form-item
    v-if="(typeof props.component.display == 'undefined' || props.component.display === true)"
    :component="props.component"
    :custom-field="props.customField"
  >
    <slot :name="`form-${props.component.dataIndex}`" v-bind="props.component">
      <a-switch
        v-model="value"
        :size="props.component.size"
        :disabled="props.component.disabled"
        :loading="props.component.loading"
        :type="props.component.type"
        :checked-value="props.component.checkedValue"
        :unchecked-value="props.component.uncheckedValue"
        :checked-color="props.component.checkedColor"
        :unchecked-color="props.component.uncheckedColor"
        :before-change="props.component.beforeChange"
        @change="easyEvent.handleChangeEvent(props.component, $event)"
        @focus="easyEvent.handleCommonEvent(props.component, 'onFocus')"
        @blur="easyEvent.handleCommonEvent(props.component, 'onBlur')"
      >
        <template #checked>
          <slot :name="`switchChecked-${props.component.dataIndex}`" />
        </template>
        <template #unchecked>
          <slot :name="`switchUnchecked-${props.component.dataIndex}`" />
        </template>
        <template #checked-icon>
          <slot :name="`switchChecked-${props.component.dataIndex}`" />
        </template>
        <template #unchecked-icon>
          <slot :name="`switchUncheckedIcon-${props.component.dataIndex}`" />
        </template>
      </a-switch>
    </slot>
  </easy-form-item>
</template>

<script setup>
import { ref, inject, onMounted, watch } from 'vue'
import { get, set } from 'lodash'
import EasyFormItem from './form-item.vue'
import { easyEvent } from '../js/formItemMixin.js'
const props = defineProps({
  component: Object,
  customField: { type: String, default: undefined }
})

const formModel = inject('formModel')
const index = props.customField ?? props.component.dataIndex
const value = ref(get(formModel.value, index))

watch( () => get(formModel.value, index), vl => value.value = vl )
watch( () => value.value, v => {
  set(formModel.value, index, v)
  index.indexOf('.') > -1 && delete formModel.value[index]
} )

easyEvent.handleCommonEvent(props.component, 'onCreated')
onMounted(() => {
  easyEvent.handleCommonEvent(props.component, 'onMounted')
})
</script>