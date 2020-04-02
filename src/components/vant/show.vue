<template>
  <div class="show">
     方式1:a==>{{a}} <br />
     方式2:b==>{{b}}
  </div>
</template>

<script>
export default {
  name: "show",
  data() {
    return {

    };
  },
  computed: {
    a(){
      return this.$store.getters.getA;
    },
    b(){
      return this.$store.getters.getB;
    }
  },
  methods: {

  },
 
  
};
</script>

<style scoped>
.show{
  background: pink;
  padding: 10px;
}
</style>
