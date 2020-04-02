<template>
  <div class="minus">
    请输入数字:
    <input type="number" v-model.number="n" />
    <br />
    <button type="button" @click="minus1">commit a 每次减{{n}}</button>
    <button type="button" @click="minus11">dispatch a 每次减{{n}}</button>
  </div>
</template>

<script>
export default {
  name: "minus",
  data() {
    return {
      n:1
    };
  },
  methods: {
    minus1(){
      this.$store.commit("minus2",{n:this.n})
    },
    minus11(){
      this.$store.dispatch("minus3",{n:this.n})
    }
  }
};
</script>

<style scoped>
</style>
