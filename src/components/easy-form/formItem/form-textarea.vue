<template>
  <easy-form-item
    v-if="(typeof props.component.display == 'undefined' || props.component.display === true)"
    :component="props.component"
    :custom-field="props.customField"
  >
    <slot :name="`form-${props.component.dataIndex}`" v-bind="props.component">
      <a-textarea
        v-model="value"
        :size="props.component.size"
        :allow-clear="props.component.allowClear ?? true"
        :disabled="props.component.disabled"
        :readonly="props.component.readonly"
        :auto-size="props.component.autoSize"
        :error="props.component.error"
        :placeholder="props.component.placeholder ?? `请输入${props.component.title}`"
        :max-length="props.component.maxLength"
        :show-word-limit="props.component.showWordLimit"
        :word-length="props.component.wordLength"
        :word-slice="props.component.wordSlice"
        @input="easyEvent.handleInputEvent(props.component, $event)"
        @change="easyEvent.handleChangeEvent(props.component, $event)"
        @clear="easyEvent.handleCommonEvent(props.component, 'onClear')"
        @focus="easyEvent.handleCommonEvent(props.component, 'onFocus')"
        @blur="easyEvent.handleCommonEvent(props.component, 'onBlur')"
      >
      </a-textarea>
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