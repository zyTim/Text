<template>
  <div class="myRouter">
    <strong>编程式导航+传值+命名路由</strong>
    <strong v-show="this.$route.hash">hash==>{{this.$route.hash}}</strong>
    <div v-if="this.$route.params.age">
      年龄:{{this.$route.params.age}}<br />
      性别:{{this.$route.params.sex==0?"小哥哥":"小姐姐"}}
    </div>
    <div v-if="this.$route.query.age">
      年龄:{{this.$route.query.age}}<br />
      性别:{{this.$route.query.sex==0?"小哥哥":"小姐姐"}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'myRouter',
  data () {
    return {
    
    }
  },
  
}
</script>

<style scoped>
pre{
  font-size: 16px;
}
</style>
