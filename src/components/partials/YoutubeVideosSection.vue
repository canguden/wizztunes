<template>
  <div class="">
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-100 text-xl">Music Wall</div>
        <div class="bg-green-500 mt-5 w-full h-1"></div>

        <div class="w-full mt-4">
          <RouterLinkButton
            btnText="Delete Youtube Video"
            color="red"
            url="/account/delete-youtube-video"
          />

          <RouterLinkButton
            class="mr-2"
            btnText="Add Youtube Video"
            color="green"
            url="/account/add-youtube-video"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap pb-4">
      <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
        <iframe
          class="w-full h-60 rounded-xl"
          src="https://www.youtube.com/embed/QThYaD1cMrU?autoplay=0"
        ></iframe>
        <div class="text-xl text-gray-100">ANOTR - Vertigo</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
</script>
