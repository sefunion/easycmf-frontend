<template>
  <slot :name="`form-${props.component.dataIndex}`" v-bind="props.component">
    <a-link
      :status="props.component.status"
      :hoverable="props.component.hoverable"
      :disabled="props.component.disabled"
      :loading="props.component.loading"
      :href="props.component.href"
      @click="easyEvent.handleCommonEvent(props.component, 'onClick')"
    >
      <template #icon v-if="props.component.icon">
        <component :is="props.component.icon" />
      </template>
      {{ props.component.title ?? 'link' }}
    </a-link>
  </slot>
</template>
  
<script setup>
import { onMounted } from 'vue'
import { easyEvent } from '../js/formItemMixin.js'
const props = defineProps({
  component: Object,
})

easyEvent.handleCommonEvent(props.component, 'onCreated')
onMounted(() => {
  easyEvent.handleCommonEvent(props.component, 'onMounted')
})
</script>