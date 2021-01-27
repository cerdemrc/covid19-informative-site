<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/shared/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./style/shared.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $red-hat;
  height: 100vh;
  // overflow: hidden;
}
</style>
