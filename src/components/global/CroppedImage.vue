<template>
  <div>
    <label
      class="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-100"
    >
      {{ label }}
    </label>

    <img
      class="rounded-full w-40 h-40 items-center border-solid border-2 border-green-500"
      :src="image"
    />
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
const props = defineProps({ label: String, image: String });
const { label, image } = toRefs(props);
</script>
