<template>
  <div class="myScroll">
    <div class="content">
      <div class="conLeft" ref="conLeft">
        <div class="left">
          <div
            v-for="(item,index) in goodsList"
            :key="index"
            class="leftGoods"
            ref="goodsMenu"
            :class="{'active':index==currentIndex}"
            @click="myGoods(index,$event)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="conRight" ref="conRight">
        <div class="right">
          <div v-for="(item,i) in goodsList" :key="i" ref="goodsType">
            <div class="goodsName">{{item.name}}</div>
            <div v-for="(item1,index1) in item.foods" :key="index1" class="rightFood">
              <div>
                <img :src="item1.image" class="img" />
              </div>
              <div class="goodRight">
                <div class="listNames">{{item1.name}}</div>
                <div>{{item1.description}}</div>
                <div>
                  月售
                  <span>{{item1.sellCount}}</span>份
                </div>
                <div>
                  好评率
                  <span>{{item1.rating}}</span>%
                </div>
                <div>
                  <span class="price">¥{{item1.price}}</span>
                  <s v-if="item1.oldPrice">¥{{item1.oldPrice}}</s>
                  
                </div>
                <div class="jia">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "myScroll",
  data() {
    return {
      goodsList: [],
      scrollY: 0,
      listHeight:[]
    };
  },
  methods: {
    getData() {
      this.axios.get("./static/data/goodsList.json").then(res => {
        this.goodsList = res.data.goods;
        // console.log(this.goodsList);
        this.$nextTick(()=>{
          this.getHeights()
        })
      });
    },
    myGoods(i,event) {
      let goodsType=this.$refs.goodsType;
      let el=goodsType[i];
      this.conRightScroll.scrollToElement(el,300)
    },
    initBS() {
      // 左边滑动
      let conLeft = this.$refs.conLeft;
      this.conLeftScroll = new BScroll(conLeft, {
        click: true,
        scrollY: true
      });
      // 右边滑动
      let conRight = this.$refs.conRight;
      this.conRightScroll = new BScroll(conRight, {
        click: true,
        scrollY: true,
        probeType: 3
      });
        this.conRightScroll.on("scroll",pos=>{
            this.scrollY=Math.abs(Math.round(pos.y))
        })
    },
    getHeights(){
      let goodsType=this.$refs.goodsType;
      // console.log(goodsType);
      let h=0;
      this.listHeight.push(h);
      for(let i=0;i<goodsType.length;i++){
        h+=goodsType[i].clientHeight;
        this.listHeight.push(h);
      }
      console.log("所有高度",this.listHeight)
    }
  },
  created() {},
  mounted() {
    //   初始化数据
    this.getData();
    this.initBS();
  },
  computed: {
    currentIndex(){
      for(let i=0,len=this.listHeight.length;i<len;i++){
        let h1=this.listHeight[i];
        let h2=this.listHeight[i+1];
        if(!h2||(this.scrollY>=h1&&this.scrollY<h2)){
          let goodsMenu=this.$refs.goodsMenu;
          let el;
          if(i>=len/2){
            el=goodsMenu[parseInt(len/2)]
          }else{
            el=goodsMenu[0]
          }
          this.conLeftScroll.scrollToElement(el,300);
          return i;
        }
      }
      return 0
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  height: 480px;
  overflow: hidden;
}
.content .conLeft {
  width: 25%;
  background: rgb(228, 224, 224);
}
.conLeft .leftGoods {
  height: 40px;
  text-align: center;
  padding: 20px 10px;
  font-size: 14px;
  margin-top: 10px;
}
.active {
  background: red;
  color: white;
}
.conRight {
  width: 75%;
  padding: 10px;
}
.conRight .img {
  height: 50px;
  width: 50px;
}
.goodsName {
  background: #f3f5f7;
  border-left: 2px solid #d9dde1;
  color: #666;
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  padding-left: 14px;
}
.rightFood {
  display: flex;
  margin: 10px 0;
}
.goodRight {
  margin-left: 15px;
  font-size: 12px;
}
.price {
  color: tomato;
}
.listNames {
  font-size: 16px;
}

.van-icon-add-o {
  font-size: 20px;
}
.jia{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 16px;
    background: rgb(9, 233, 9);
    position: relative;
    left: 150px;
    top: -10px;
    font-size: 14px;
}
</style>
