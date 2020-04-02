<template>
  <div class="autio1">
    <button type="button" @click="showLrcAll">
      {{showLrc?"隐藏":"显示"}}歌词
    </button>
    <aplayer v-if="music.lrc" autoplay  :music="music" :list="list" :showLrc="showLrc"></aplayer>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  name: "autio1",
  data() {
    return {
      showLrc:true,
      list:[],
      music:{
        src:"static/mp3/huya.m4a",
        title:"有多少爱值得等待",
        artist:"琥牙歌后",
        pic:"static/mp3/huya.jpg"
      },
      music1:{
        src:"static/mp3/loulan.m4a",
        title:"我的楼兰",
        artist:"云朵",
        pic:"static/mp3/loulan.jpg"
      },
      music2:{
        src:"static/mp3/zuoshouzhiyue.m4a",
        title:"左手指月",
        artist:"萨顶顶",
        pic:"static/mp3/zuoshouzhiyue.jpg"
      },
      music3:{
        src:"static/mp3/pingfantianshi.m4a",
        title:"平凡天使",
        artist:"邓紫棋",
        pic:"static/mp3/pingfantianshi.jpg"
      },
    };
  },
  components: {
    Aplayer
  },
  methods: {
    getLrc(lrcUrl,music){
      this.axios.get(lrcUrl).then(res=>{
        this.$nextTick(()=>{
          this.$set(music,"lrc",res.data)
        })
      })
    },
    showLrcAll(){
      this.showLrc=!this.showLrc
    }
  },
  created () {
    let lrcUrl="static/mp3/huya.lrc";
    let lrcUrl1="static/mp3/loulan.lrc";
    let lrcUrl2="static/mp3/zuoshouzhiyue.lrc";
    let lrcUrl3="static/mp3/pingfantianshi.lrc";
    this.getLrc(lrcUrl,this.music)
    this.getLrc(lrcUrl1,this.music1)
    this.getLrc(lrcUrl2,this.music2)
    this.getLrc(lrcUrl3,this.music3)
    // this.getLrc(this.music3);
    this.list.push(this.music)
    this.list.push(this.music1)
    this.list.push(this.music2)
    this.list.push(this.music3)
  }
}
</script>

<style scoped>
.autio1 {
  border: solid 1px red;
  padding: 5px;
  margin-top: 10px;
}
</style>
