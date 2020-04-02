<template>
  <div class="add">
  请输入数字:<input type="number" v-model.number="n" />
   <br />
   <button type="button" @click="add1">commit a 每次加{{n}}</button>
   <button type="button" @click="add11">dispatch a 每次加{{n}}</button>
   <button type="button" @click="add111">commit异步 a 每次加{{n}}</button>
   <br />
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      n:1
    };
  },
  methods: {
    add1(){
      this.$store.commit("add2",this.n)
    },
    add11(){
      this.$store.dispatch("add3",this.n)
    },
    add111(){
      this.$store.commit("add1",this.n);
    }
  },
 
  
};
</script>

<style scoped>
.add{
  border: solid 1px red;
  padding: 10px;
}
</style>
