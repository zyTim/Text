<template>
  <div class="myRouter">
      <div>
       <router-link to="/myRouter/myRouter1">基本路由+嵌套路由</router-link>   
       <br />
       <router-link to="/myRouter/myRouter2" tag="button" event="mouseenter">tag+event</router-link>  
       <br>
      <router-link to="/myRouter/myRouter3/kky/18/0">动态路由(kky=>18=>0)</router-link>
      <router-link to="/myRouter/myRouter3/aa/16/1">动态路由(aa=>16=>1)</router-link>
      <router-link to="/myRouter/myRouter3/bb/20/0">动态路由(bb=>20=>0)</router-link>
         <br>
     <button type="button" @click="myPush('/myRouter/myRouter4#id='+1)">编程式导航1</button>
      <button type="button" @click="myPush(url2)">编程式导航2</button>
      <button type="button" @click="myPush({path:'/myRouter/myRouter4#id=3'})">编程式导航3</button>
      <button type="button" @click="myPush({name:'myRouter4',params:{age:18,sex:0}})">编程式导航4(name+params)</button>
      <button type="button" @click="myPush({name:'myRouter4',query:{age:16,sex:1}})">编程式导航5(name+query)</button>
      <button type="button" @click="myPush({path:'/myRouter/myRouter4#id=5',query:{age:20,sex:0}})">编程式导航6(path+query)</button>
       <br />
      <button type="button" @click="myGo(1)">编程式导航7 go(1)</button>
      <button type="button" @click="myGo(0)">编程式导航7 go(0) 刷新</button>
      <button type="button" @click="myGo(-1)">编程式导航7 go(-1)</button>
      <br />
      <button type="button" @click="myBack">编程式导航8 back</button>
      <button type="button" @click="myForward">编程式导航9 forward</button>
       <br />
      </div>
      <div>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'myRouter',
  data () {
    return {
        url2:'/myRouter/myRouter4#id='+2,
      f:true
    }
  },
  methods: {
    myPush(url){
      let f=this.f;
      if(f){
        this.$router.push(url).catch(err=>err);
      }else{
        this.$router.replace(url).catch(err=>err);
      }
    },
     myGo(n){
      this.$router.go(n);
    },
    myBack(){
      this.$router.back();
    },
    myForward(){
      this.$router.forward();
    }
  }
}
</script>

<style scoped>

</style>
