<template>
  <button
    class="float-right mt-2 inline-block bg-green-500 hover:bg-green-600 font-bold text-white no-underline py-4 px-4"
    @click="$emit('submit', true)"
  >
    {{ btnText }}
  </button>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  btnText: String,
});

const { btnText } = toRefs(props);
</script>
