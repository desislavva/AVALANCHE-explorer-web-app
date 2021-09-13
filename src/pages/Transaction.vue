<--  ****************************** HTML ************************************-->
<template>
    <div class="back">
        <Details />

    </div>
</template>


<--  ****************************** SCRIPT ************************************-->

<script>

import Details from '../components/TransactionDetails.vue'

export default {
    components: {
        Details    
  }
    }
</script>


<--  ****************************** CSS ************************************-->

<style scoped>

.back {

  position: relative;
  min-height: 100%;
  height: 1000px;
  background-image: url("https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2Fc5ee3a6ef69847dda30cdf3e0dfa123e.png&w=1920&q=100");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}


</style>