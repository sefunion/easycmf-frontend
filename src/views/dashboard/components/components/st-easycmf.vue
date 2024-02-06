<template>
  <div class="w-full lg:w-3/12 easy-content-block rounded-sm ml-0 lg:ml-3 p-3 mt-3">
    <div class="flex">
      EasyCMF 相关
    </div>
    <div class="block lg:grid lg:grid-cols-2 lg:gap-1 mt-3">
      <a-card class="rounded-sm text-center" :body-style="{ padding: 0 }" :bordered="false">
        <a-button
          type="outline"
          class="w-4/5"
          @click="openPage('https://www.easycmf.cn')"
        >官方网站</a-button>
      </a-card>
    </div>
    <div class="w-11/12 mx-auto mt-3">
      <a-tag class="ml-0.5">EasyCMF v{{ config.version }} release</a-tag>
    </div>
  </div>
</template>

<script setup>
  import config from '@/../package.json'

  const openPage = (url = '') => {
    window.open(url)
  }
</script>