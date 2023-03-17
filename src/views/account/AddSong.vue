<template>
  <div id="song" class="text-gray-100 container mx-auto max-w-4xl pt-20 px6">
    <div class="text-gray-100 text-xl">Add Song</div>
    <div class="bg-green-500 mt-5 mb-5 w-full h-1"></div>
    <TextInput
      class="mb-6"
      label="Title"
      placeholder="Cool new song"
      v-model:input="title"
      inputType="text"
      error="This is an error"
    />

    <div class="w-full">
      <label
        class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
        >Add Song</label
      >

      <input
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-100 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="file"
        id="image"
        ref="fileInput"
        @change="getUploadedImage"
      />
    </div>

    <SubmitFormButton btnText="Upload" />
  </div>
</template>

<script setup>
import TextInput from "../../components/global/TextInput.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
</script>
