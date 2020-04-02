<template>
  <div id="app">
    <div class="user">
      <div v-if="$root.userInfo.phone">
        你好!欢迎==>{{$root.userInfo.phone}} 登录
        <button type="button" class="logout" @click="logout">注销(退出登录)</button>
      </div>
      <div v-else>
        <strong>请先登录</strong>
      </div>
    </div>
    <div v-show="this.$root.isShowRouterLink">
      <div v-for="(item,i) in routerLinks" :key="i">
        <router-link :to="item.to" >
          {{item.name}}
        </router-link>
      </div>
    </div>
    <div class="routerView">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      routerLinks:[
        {name: 'vue基础', to: '/basic'},
        {name: 'myMintUI', to: '/myMintUI'},
        {name: 'myVant(需要登录)', to: '/vant'},
        {name: 'myElementUI(需要登录)', to: '/elementUI'},
        {name: '路由', to: '/myRouter'},
        {name: '登录', to: '/login'},
      ]
    }
  },
  created () {
    this.getUserInfo();
  },
  methods: {
    getUserInfo(){
      if(localStorage.token){
        this.$set(this.$root.userInfo,"phone",localStorage.phone)
      }
    },
    logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('phone');
      localStorage.removeItem('userName');
      this.$set(this.$root.userInfo,"phone","");
      this.$router.push("/")
    }
  }
}
</script>

<style>

</style>
