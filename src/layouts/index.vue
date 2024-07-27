<script setup lang="ts">
import Sidebar from "./sidebar/index.vue";
</script>

<template>
  <div class="min-h-screen min-w-full relative font-DmSans">
    <Sidebar />
    <slot />
  </div>
</template>
