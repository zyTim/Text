<template>
  <div class="vuex">
    <add></add>
    <show></show>
    <minus></minus>
  </div>
</template>

<script>
import add from "./add"
import minus from "./minus"
import show from "./show"
export default {
  name: "vuex",
  data() {
    return {

    };
  },
  components: {
    add,
    minus,
    show
  }
};
</script>

<style scoped>

</style>
