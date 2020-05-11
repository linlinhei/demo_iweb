<template>
  <div id="app" :key="Key">
    <top-nav></top-nav>
    <Header></Header>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { router } from "./route/router";
import TopNav from "./components/TopNav";

export default {
  name: "App",
  router,
  components: {
    Header,
    Footer,
    TopNav
  },
  data() {
    return {
      Key: "" //监听URL的变化(解决路由不变,参数变,但是页面不刷新的问题)
    };
  },
  watch: {
    $route: function(newUrl, oldUrl) {
      //路由(包括参数)发生变化时,对Key进行赋值
      //如果Key发生了变化,则页面刷新
      this.Key = new Date().getTime();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
