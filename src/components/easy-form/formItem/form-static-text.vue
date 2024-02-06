<template>
  <slot :name="`form-${props.component.dataIndex}`" v-bind="props.component">
    <div
      v-if="(typeof props.component.display == 'undefined' || props.component.display === true)"
      :class="[ 'static-text', props.component.customClass ]"
      :style="props.component.style"
    >{{ props.component.title ?? '' }}</div>
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