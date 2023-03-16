<template>
  <nav class="w-full px-4 mb-10 relative z-20 text-gray-100">
    <div
      class="container mx-auto max-w-4xl h-16 flex justify-between text-xs md:text-sm"
    >
      <div class="h-full flex items-center">
        <router-link
          to=""
          class="text-2xl text-green-500 flex justify-center items-center"
          ><b>Wizztunes</b></router-link
        >
      </div>
      <div class="h-full flex items-center">
        <FullScreenModal />
      </div>
    </div>
  </nav>
</template>

<script setup>
import FullScreenModal from "./FullScreenModal.vue";
</script>
