<template>
  <div class="">
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-100 text-xl">My Music</div>
        <div class="bg-green-500 mt-5 w-full h-1"></div>

        <div class="w-full mt-4">
          <RouterLinkButton
            btnText="Delete Song"
            color="red"
            url="/account/delete-song"
          />

          <RouterLinkButton
            class="mr-2"
            btnText="Add Song"
            color="green"
            url="/account/add-song"
          />
        </div>
      </div>
    </div>

    <div class="pb-4">
      <SongPlayer />
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import SongPlayer from "@/components/partials/SongPlayer.vue";
</script>
