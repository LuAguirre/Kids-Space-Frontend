<template>
<main class="videoPlayer">
  <div id="app">
    <div v-if="!!video" class="container">
      <my-video :sources="video.sources" :options="video.options"></my-video>
    </div>
  </div>
</main>
</template>

<script>
import { VIDEOS } from "@/type";

import myVideo from "vue-video";
export default {
  mounted() {
    console.info("esta es la ruta",this.$route);
    const videoId = this.$route.params.id;
    const requestedVideo = VIDEOS.find((video) => (video.id == videoId));
    console.info("esta es la info del video", requestedVideo);
    this.video = this.mapToVideo(requestedVideo);
    console.info(this.mapToVideo(requestedVideo));
  },
  data() {
    return { video: null};
  },
  methods: {
    //video: Video
    mapToVideo(video) {
      return {
        sources: [
          {
            src: this.getAsset(video.videoUrl),
            type: "video/mp4",
          },
        ],
        options: {
          volume: 0.6,
          poster: this.getAsset(video.imageUrl),
        },
      };
    },
    getAsset(path) {
      return require(`../assets/${path}`);
    },
  },
  components: {
    myVideo,
  },
};
</script>
<style>
  .videoPlayer {
    background-color: #242528;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  }
</style>
