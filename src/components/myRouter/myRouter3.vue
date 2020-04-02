<template>
  <div class="myRouter3">
     <strong>这是动态组价</strong>
     <pre>
      注意事项
      1 router to 与 path 配置时注意 变量对应关系
      2 接收数据 this.$route.params.属性名
    </pre>
    <div>
      <ol>
        <li>姓名:{{this.$route.params.user}}</li>
        <li>年龄:{{this.$route.params.age}}</li>
        <li>性别:{{this.$route.params.sex==0?"小哥哥":"小姐姐"}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myRouter3',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
pre{
  font-size: 16px;
}
</style>
