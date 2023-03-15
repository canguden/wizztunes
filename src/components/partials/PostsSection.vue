<template>
      <div class="">
            <div class="mx-auto py-4">
                  <div class="flex flex-wrap font-bold text-gray-100">
                        <div class="text-gray-900 text-xl">My Events</div>
                        <div class="bg-green-500 w-full h-1"></div>

                        <div class="w-full mt-4">
                        <RouterLinkButton
                              class="mr-2"
                              btnText="Create/Add Event"
                              color="green"
                              url="/account/add-create-event"
                        />

                        </div>
                  </div>
            </div>

            <div class="flex flex-wrap pb-4">
                  <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
                        <div class="text-xl text-gray-900">Video Title</div>
                        <iframe class="w-full h-60" src="https://www.youtube.com/embed/QThYaD1cMrU?autoplay=0"></iframe>
                  </div>
            </div>

      </div>
</template>

<script setup>
import RouterLinkButton from '@/components/global/RouterLinkButton.vue'
</script>