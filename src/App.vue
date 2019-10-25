<template>
  <div id="app">
    <button @click="test">TEST</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { funql } from "./utils";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    async test() {
      console.log(await funql());
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
