<template>
  <div class="">
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-100 text-xl">My Events</div>
        <div class="bg-green-500 mt-5 w-full h-1"></div>

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

    <div class="flex flex-wrap mb-4">
      <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
        <div class="rounded-lg border">
          <a href="#">
            <img
              class="rounded-t-lg w-full"
              src="https:/via.placeholder.com/500x300"
              alt=""
            />
          </a>
          <div class="p-2 md:p-4">
            <div class="text-2xl">
              <router-link
                to=""
                class="underline text-blue-500 hover:text-blue-600"
              >
                Text Title
              </router-link>
              <p class="py-2 text-gray-100">Location Test</p>
              <p class="text-gray-100 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                mollitia atque labore minima ducimus cum quam possimus laborum
                ex quaerat?
              </p>
              <div class="mt-2 flex items-center justify-end">
                <router-link
                  to=""
                  class="bg-blue-500 hover:bg-blue-700 text-white text-sm mx-2 font-bold py-1 px-2 rounded-full"
                >
                  Edit Post
                </router-link>
                <button
                  class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-2 rounded-full"
                >
                  Delete Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
</script>
