!--  ****************************** HTML ************************************-->

<template>
  <div id="app">
      <Header />
      <router-view :key="$route.fullPath"></router-view>
      <Footer />
  </div>
</template>


<-- ***************************** SCRIPT ******************************** --> 

<script>

import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'

    export default {
        components: {
      Header,
      Footer
  }
    }
</script>


<--  ****************************** CSS ************************************-->

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  overflow-x: hidden;
}

</style>
