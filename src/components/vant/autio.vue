<template>
  <div class="autio">
   <div>
       <router-link to="/vant/autio/autio1">vue-aplayer(音频播放器)</router-link>
       <router-link to="/vant/autio/autio2">vue-video-aplayer(视频播放器)</router-link>
   </div>
   <div>
       <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
  name: 'autio',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
