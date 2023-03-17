<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 mb-2 px-6">
    <div class="text-gray-100 text-xl">Edit Profile</div>
    <div class="bg-green-500 mt-5 w-full h-1"></div>

    <div class="w-full rounded-full mb-2 mt-2">
      <CroppedImage label="Profile Photo" :image="image" />

      <CropperModal
        v-if="showModal"
        :minAspectRatioProp="{ width: 8, height: 8 }"
        :maxAspectRatioProp="{ width: 8, height: 8 }"
        @croppedImageData="setCroppedImageData"
        @showModal="showModal = false"
      />

      {{ image }}

      <div class="w-full mb-2 mt-2">
        <DisplayCropperButton
          label="Profile Image"
          btnText="Upload Profile Image"
          @showModal="showModal = true"
        />
      </div>

      <div class="w-full mt-5">
        <TextInput
          label="firstName"
          placeholder="canguden"
          v-model:input="firstName"
          inputType="text"
          error="This is an error"
        />
      </div>

      <div class="w-full">
        <TextInput
          label="Name"
          placeholder="Can Guden"
          v-model:input="lastName"
          inputType="text"
          error="This is an error"
        />
      </div>

      <div class="w-full">
        <TextInput
          label="Location"
          placeholder="Amsterdam, Netherlands"
          v-model:input="location"
          inputType="text"
          error="This is an error"
        />
      </div>

      <div class="w-full">
        <TextArea
          label="Description"
          placeholder="enter your thoughts"
          v-model="description"
          error="this is a test error"
        />
      </div>

      <div class="flex flex-wrap mt-6 mb-6">
        <div class="w-full">
          <SubmitFormButton btnText="Save Profile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextInput from "../../components/global/TextInput.vue";
import TextArea from "@/components/global/TextArea.vue";
import CropperModal from "../../components/global/CropperModal.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";

let showModal = ref(false);
let lastName = ref(null);
let firstName = ref(null);
let location = ref(null);
// let imageData = null;
let image = ref(null);

const setCroppedImageData = (data) => {
  // imageData = data
  image.value = data.imageUrl;
};
</script>
