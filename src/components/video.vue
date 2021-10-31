<template>
    <div id="app">
        <div class="container">
            <my-video :sources="video.sources" :options="video.options"></my-video>
        </div>
    </div>
</template>

<script>
import myVideo from 'vue-video'
export default {
    data () {
        return {
            video: {
                sources: [{
                    src: '../assets/videosKS/cambioClimatico.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                    poster: '../assets/img/cambioclimaticoIMG.png'
                }
            }
        }
    },
    components: {
        myVideo
    }
}
</script>
