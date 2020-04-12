<template>
  <div class="home">
    <Hanzi />
  </div>
</template>

<script>
// @ is an alias to /src
import Hanzi from "@/components/Hanzi.vue";

export default {
  name: "Home",
  components: {
    Hanzi
  }
};
</script>

<style scoped>
.home {
  margin-top: 2rem;
}
</style>
