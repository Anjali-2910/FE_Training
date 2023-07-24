<template>
  <router-view></router-view>
</template>
<script>
import NavBar from "./components/nav/NavBar.vue";
import PageNotFound from "./components/pages/PageNotFound.vue";

export default {
  name: "App",
  components: {
    NavBar,
    PageNotFound
  },
};
</script>

<style scoped></style>
