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
  overflow-y: hidden;
}

p {
  font-size: 40px;
  margin: .5em 0 .75em;
  padding-top: 30px;
  padding-left: 45px;
  text-align: left;
  color: #ffffff;
  font-weight: bold;
}

</style>
