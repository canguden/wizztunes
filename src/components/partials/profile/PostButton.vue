<template>
  <div>
    <button
      @click="open = !open"
      class="h-8 w-8 bg-green-500 hover:bg-green-600 text-white font-semibold hover:text-white py-1 px-1 hover:border-transparent rounded"
    >
      <i class="fa-regular fa-plus fa-xl"></i>
    </button>

    <div
      v-show="open"
      class="animated slideInDown faster fixed w-full h-full top-0 left-0 flex justify-center backdrop-blur-sm"
    >
      <div class="bg-black absolute w-full h-full opacity-75"></div>
      <div class="my-auto fixed border-white w-80 pt-16">
        <p class="text-2xl mb-2 text-center text-whtite font-bold">Add</p>

        <RouterLinkButton
          class="w-full text-gray-100 text-center text-lg"
          btnText="Add Youtube Video"
          color="green"
          url="/account/add-youtube-video"
        />
        <RouterLinkButton
          @click="open = !open"
          class="w-full text-gray-100 text-center mt-4 text-lg"
          btnText="Close"
          color="green"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import { ref } from "vue";

let open = ref(false);
</script>
