<template>
  <div class="cityScroll1">
    <div class="title">
      <strong>索引列表</strong>
    </div>
    <!-- 左边部分 -->
    <div class="box1" ref="box1">
      <div class="box2" ref="box2">
        <div v-for="(item,index) in cityList" :key="index" class="addressBox" ref="addressBox">
          <div class="addName">{{item.title}}</div>
          <div v-for="(item1,index1) in item.lists" :key="index1" class="addCity">{{item1}}</div>
        </div>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="addressIndex" ref="addressIndex">
      <div class="addressTitle" ref="addressTitle">
        <div v-for="(item,i) in cityList" :key="i" :class="{active:i===currentIndex}" ref="cityTitle" @click="mySelect(i,$event)">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import cityList1 from "./data/data.json";
export default {
  name: "cityScroll1",
  data() {
    return {
      cityList: cityList1.city,  //整条数据
      scrollY:0,
      heights:[0], //左边div的所有高度
    };
  },
  mounted() {
    this.initBs();
    this.getHeight();
  },
  methods: {
    //   设置左边滚动的初始值
    initBs() {
      let box1 = this.$refs.box1;
      this.box1bs = new BScroll(box1, {
        click: true,
        scrollY: true,
        probeType:3
      });
    //   设置右边滚动
      let addressIndex = this.$refs.addressIndex;
      this.addressIndexBs = new BScroll(addressIndex, {
        click: true,
        scrollY: true,
        probeType: 3
      }),
        this.box1bs.on("scroll", pos => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
        
    },
    // 获取所有高度
    getHeight(){
        let addressBox=this.$refs.addressBox;
        let h=0;
        for(let i=0,len=addressBox.length;i<len;i++){
            h+=addressBox[i].clientHeight;
            this.heights.push(h)
        }
        // console.log("所有高度",this.heights);
    },
    // 右边的点击事件
    mySelect(i,event){
       let addressBox=this.$refs.addressBox;
       let el=addressBox[i];
       this.box1bs.scrollToElement(el,300)
    }
  },
  computed: {
    //   计算所有高度,然后和右边滚动到对应的位置
      currentIndex(){
          for(let i=0,len=this.heights.length;i<len;i++){
              let h1=this.heights[i];
              let h2=this.heights[i+1];
              if(!h2||(this.scrollY>=h1&&this.scrollY<h2)){
                  return i
              }
          }
          return 0
      }
  }
};
</script>

<style scoped>
.box1{
  height: 400px;
  overflow: hidden;
}
.addressIndex{
    height: 350px;
    overflow: hidden;
}
.addName {
  padding: 16px 16px 10px 16px;
  line-height: 1;
  font-size: 14px;
  color: #999;
  background: #f7f7f7;
}
.addCity {
  position: relative;
  height: 50px;
  line-height: 50px;
  padding: 0 16px;
  font-size: 14px;
  color: #333;
}

.addressIndex {
  position: fixed;
  right: 15px;
  top: 55%;
}
.addressTitle > div {
  width: 25px;
  height: 25px;
  margin: 2px;
  text-align: center;
  line-height: 25px;
  border-radius: 100%;
}

.active {
  background-color: red;
  color: #fff;
}
</style>
