<template>
  <easy-form-item
    v-if="(typeof props.component.display == 'undefined' || props.component.display === true)"
    :component="props.component"
    :custom-field="props.customField"
  >
    <slot :name="`form-${props.component.dataIndex}`" v-bind="props.component">
      <easy-upload
        v-model="value"
        :title="props.component.title"
        :disabled="props.component.disabled"
        :icon="props.component.icon"
        :rounded="props.component.rounded"
        :multiple="props.component.multiple"
        :draggable="props.component.draggable"
        :size="props.component.size"
        :chunk="props.component.chunk"
        :chunkSize="props.component.chunkSize"
        :limit="props.component.limit"
        :tip="props.component.tip"
        :type="props.component.type"
        :accept="props.component.accept"
        :returnType="props.component.returnType"
        :fileType="props.component.fileType"
        :showList="props.component.showList"
        :requestData="props.component.requestData"
      >
      </easy-upload>
    </slot>
  </easy-form-item>
</template>

<script setup>
import { ref, inject, onMounted, watch } from 'vue'
import { get, set } from 'lodash'
import EasyUpload from '@/components/easy-upload/index.vue'
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