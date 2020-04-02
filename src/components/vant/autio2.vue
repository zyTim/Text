<template>
  <div class="autio2">
   <div>
     <videoPlayer 
        class="videoPlayer"
        ref="videoPlayer"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"

      ></videoPlayer>
   </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'autio2',
  data () {
    return {
      
      playerOptions:{
        muted:false,
        language: 'zh-CN',//'en',
        playbackRates: [0.1,0.5, 1.0, 1.5, 2.0],
        sources:[{
          type:"video/mp4",
          src:"static/mp4/wanrenmi.mp4"
        }],
        poster:"static/mp4/1.png",
        controlBar:{
          remainingTimeDisplay:true,//显示剩余时间
        }
      }
    }
  },
  components: {
    videoPlayer
  },
  methods: {
    onPlayerPlay(player){
      log('播放',player)
    },
    onPlayerPause(player){
      log('暂停',player)
    },
    onPlayerEnded(player){
      log('结束',player)
    }
  },
   computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
}
</script>

<style>
.autio2{
    border: solid 1px red;
    padding: 5px;
    margin-top: 10px;
}
.video-player.videoPlayer>div{
  width: 640px !important;
  height: 480px !important;
}
</style>
