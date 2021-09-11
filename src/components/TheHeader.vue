!--  ****************************** HTML ************************************-->

<template>
  <div>
        <Logo />
        <MainBar />        
  </div>
</template>


<-- ***************************** SCRIPT ******************************** --> 

<script>

import MainBar from '../components/theHeaderComponents/MainBar.vue'
import Logo from '../components/theHeaderComponents/Logo.vue'

    export default {
        components: {
      Logo,
      MainBar
  },
    }
</script>


<--  ****************************** CSS ************************************-->

<style scoped>



</style>


