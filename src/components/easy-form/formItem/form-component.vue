<template>
  <easy-form-item
    v-if="(typeof props.component.display == 'undefined' || props.component.display === true)"
    :component="props.component"
    :custom-field="props.customField"
  >
    <slot :name="`form-${props.component.dataIndex}`" v-bind="props.component">
      <component
        :is="props.component.dataIndex"
        :component="props.component"
        :customField="props.customField"
      />
    </slot>
  </easy-form-item>
</template>
  
<script setup>
import { onMounted, getCurrentInstance, watch } from 'vue'
import { get, set } from 'lodash'
import EasyFormItem from './form-item.vue'
import { easyEvent } from '../js/formItemMixin.js'

const props = defineProps({
  component: Object,
  customField: { type: String, default: undefined }
})

const app = getCurrentInstance().appContext.app

if (props.component.formType === 'component' && props.component.component && !app._context.components[props.component.dataIndex]) {
  app.component(props.component.dataIndex, props.component.component)
}

easyEvent.handleCommonEvent(props.component, 'onCreated')
onMounted(() => {
  easyEvent.handleCommonEvent(props.component, 'onMounted')
})
</script>