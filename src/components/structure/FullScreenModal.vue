<template>
  <div>
    <PostButton />
  </div>
  <div>
    <div>
      <button
        @click="open = !open"
        class="bg-transparent hover:bg-green-400 text-white font-semibold h-8 w-8 hover:text-white py-1 ml-2 px-1 hover:border-transparent rounded"
      >
        <i class="fa-solid fa-gear fa-xl"></i>
      </button>

      <div
        v-show="open"
        class="animated slideInDown faster fixed w-full h-full top-0 left-0 flex justify-center backdrop-blur-sm"
      >
        <div class="bg-black absolute w-full h-full opacity-75"></div>
        <div class="my-auto fixed border-white w-80 pt-16">
          <p class="text-2xl pb-2 text-center text-whtite font-bold">
            Settings
          </p>
          <RouterLinkButton
            class="w-full text-gray-100 text-center text-lg"
            btnText="Edit Profile"
            color="green"
            url="/account/add-create-event"
          />
          <RouterLinkButton
            @click="open = !open"
            class="w-full text-gray-100 text-center text-lg mt-4"
            btnText="Close"
            color="green"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostButton from "../partials/profile/PostButton.vue";
import RouterLinkButton from "../global/RouterLinkButton.vue";
import { ref } from "vue";

let open = ref(false);
</script>
