<template>
      <div class="bg-green rounded">
            <div id="aplayer"></div>
      </div>
</template>

<script setup>
import APlayer from 'aplayer'
import { onMounted } from 'vue'
import 'aplayer/dist/APlayer.min.css';

onMounted(() => {
thePlayer()
})

const thePlayer = () => {
new APlayer({
      container: document.getElementById('aplayer'),
      audio: [{
            name: 'first song',
            artist: 'artist',
            url: '/music/beats.mp3',
            cover: 'cover.jpg'
},
{
            name: 'second song',
            artist: 'artist',
            url: '/music/solomun-friends.mp3',
            cover: 'cover.jpg'
},
]
});
}
</script>