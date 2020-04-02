<template>
  <div class="vant">
    <div v-for="(item,i) in routerLinks" :key="i">
      <router-link :to="item.to">{{item.name}}</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "vant",
  data() {
    return {
      routerLinks: [
        { name: "myImage", to: "/vant/myImage" },
        { name: "myScroll(左右联动)", to: "/vant/myScroll" },
        { name: "cityScroll(城市索引)", to: "/vant/cityScroll" },
        { name: "作业(城市索引)", to: "/vant/cityScroll1" },
        { name: "vuex", to: "/vant/vuex" },
        { name: "autio", to: "/vant/autio" },
      ]
    };
  }
};
</script>

<style scoped>
</style>
