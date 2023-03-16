<template>
  <div class="bg-green rounded">
    <div id="aplayer"></div>
  </div>
</template>

<script setup>
import APlayer from "aplayer";
import { onMounted } from "vue";
import "aplayer/dist/APlayer.min.css";

onMounted(() => {
  thePlayer();
});

const thePlayer = () => {
  new APlayer({
    container: document.getElementById("aplayer"),
    audio: [
      {
        name: "LoFi Guitar Chill",
        artist: "Fruits Music",
        url: "/music/beats.mp3",
        cover: "cover.jpg",
        theme: "#22c55e",
      },
      {
        name: "Friends",
        artist: "Solomun",
        url: "/music/solomun-friends.mp3",
        cover: "cover.jpg",
        theme: "#22c55e",
      },
    ],
  });
};
</script>

<style>
#aplayer {
  border-radius: 10px;
}
</style>
