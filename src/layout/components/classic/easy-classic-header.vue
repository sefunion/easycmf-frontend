<template>
  <a-layout-header class="layout-classic-header flex flex-col operation-area">
    <div class="flex justify-between layout-classic-header-container">
      <a-avatar class="mt-1 ml-2 inline lg:hidden" style="width:45px;" :size="40"><img :src="`${$url}logo.svg`" class="bg-white" /></a-avatar>
      <easy-breadcrumb />
      <easy-operation />
    </div>
    <easy-tags class="hidden lg:flex" />
  </a-layout-header>
</template>

<script setup>
  import EasyBreadcrumb from '../easy-breadcrumb.vue'
  import EasyOperation from '../easy-operation.vue'
  import EasyTags from '../easy-tags.vue'
</script>
