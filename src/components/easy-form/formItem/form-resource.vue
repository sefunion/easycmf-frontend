<template>
  <easy-form-item
    v-if="(typeof props.component.display == 'undefined' || props.component.display === true)"
    :component="props.component"
    :custom-field="props.customField"
  >
    <slot :name="`form-${props.component.dataIndex}`" v-bind="props.component">
      <easy-resource
        v-if="(props.component.type ?? 'preview') == 'preview'"
        v-model="value"
        :multiple="props.component.multiple"
        :onlyData="props.component.onlyData"
        :returnType="props.component.returnType"
      />
      <easy-resource-button
        v-else
        v-model="value"
        :multiple="props.component.multiple"
        :onlyData="props.component.onlyData"
        :returnType="props.component.returnType"
      />
    </slot>
  </easy-form-item>
</template>

<script setup>
import { ref, inject, onMounted, watch } from 'vue'
import { get, set } from 'lodash'
import EasyResource from '@/components/easy-resource/index.vue'
import EasyResourceButton from '@/components/easy-resource/button.vue'
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

if (props.component.multiple && ! value.value) {
  value.value = []
}

easyEvent.handleCommonEvent(props.component, 'onCreated')
onMounted(() => {
  easyEvent.handleCommonEvent(props.component, 'onMounted')
})
</script>