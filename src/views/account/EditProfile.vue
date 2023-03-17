<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
    <div class="text-gray-100 text-xl">Edit Profile</div>
    <div class="bg-green-500 mt-5 w-full h-1"></div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w1/2 px-3">
        <TextInput
          label="firstName"
          placeholder="canguden"
          v-model:input="firstName"
          inputType="text"
          error="This is an error"
        />
      </div>

      <div class="w-full md:w1/2 px-3">
        <TextInput
          label="Name"
          placeholder="Can Guden"
          v-model:input="lastName"
          inputType="text"
          error="This is an error"
        />
      </div>

      <div class="w-full md:w1/2 px-3">
        <TextInput
          label="Location"
          placeholder="Amsterdam, Netherlands"
          v-model:input="location"
          inputType="text"
          error="This is an error"
        />
      </div>

      <div class="w-full md:w1/2 px-3">
        <DisplayCropperButton
          label="Profile Image"
          btnText="Update Profile Image"
        />
      </div>
    </div>

    <div class="w-full md:w1/2 px-3">
      <TextArea
        label="Description"
        placeholder="enter your thoughts"
        v-model="description"
        error="this is a test error"
      />
    </div>

    <div class="flex flex-wrap mt-8 mb-6">
      <div class="w-full px-3">
        <SubmitFormButton btnText="Save Profile" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextInput from "../../components/global/TextInput.vue";
import TextArea from "@/components/global/TextArea.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";

let lastName = ref(null);
let firstName = ref(null);
let location = ref(null);
</script>
