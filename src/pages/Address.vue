<--  ****************************** HTML ************************************-->
<template>
     <div class="back">
         <Details />


        <!-- if (only for X-chain)  -->
         <Assets />

        <p> Address Transactions </p>

         <Transactions />

    </div>
</template>


<--  ****************************** SCRIPT ************************************-->

<script>
import Details from '../components/AddressDetails.vue'
import Transactions from '../components/TransactionsTable.vue'
import Assets from '../components/AssetsTable.vue'

    export default {
        components: {
            Details,
            Transactions,
            Assets    
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