<template>
  <a-layout class="layout flex justify-between h-full">

    <easy-classic-slider class="easy-ui-slider" />

    <a-layout-content class="flex flex-col">
      <easy-classic-header class="easy-ui-header" />
      <easy-worker-area />
    </a-layout-content>

  </a-layout>
</template>

<script setup>
import { ref } from 'vue'

import EasyClassicSlider from './easy-classic-slider.vue'
import EasyClassicHeader from './easy-classic-header.vue'
import EasyWorkerArea from '../easy-workerArea.vue'

</script>
