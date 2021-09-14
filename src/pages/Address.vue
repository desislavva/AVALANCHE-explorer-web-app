<--  ****************************** HTML ************************************-->
<template>
     <div class="back">
       <loading :active.sync="getLoader.isLoading"
                 :is-full-page="getLoader.fullPage"
                 :color="getLoader.color"/>
         <Details :addressHash="addressHash" />
        <!-- if (only for X-chain)  -->
         <Assets v-if="chainType == 'X'"/>
        <p> Address Transactions </p>
         <Transactions />
    </div>
</template>

<--  ****************************** SCRIPT ************************************-->

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import Details from '../components/AddressDetails.vue'
import Transactions from '../components/TransactionsTable.vue'
import Assets from '../components/AssetsTable.vue'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data() {
    return {
      addressHash: this.$route.params.addressHash,
      setIntervalId: null,
      chainType: null
    }
  },
  components: {
    Details,
    Transactions,
    Assets,
    Loading
  },
  methods: {
    ...mapActions(['fetchAddressDetails']),
    ...mapMutations(['setLoaderState']),
    findChainType() {
      if (this.addressHash.charAt(0) == 'X') {
        console.log(this.chainType)
        this.chainType = 'X'
      }
    }
  },
  computed: {
    ...mapGetters(['getLoader'])
  },
  created() {
    this.setLoaderState(true)
    this.setIntervalId = setInterval(() => {
      this.fetchAddressDetails(this.addressHash)
      .then(() => {
        this.setLoaderState(false)
      })
    }, 2000)
    this.findChainType()
  },
  beforeDestroy() {
    clearInterval(this.setIntervalId)
  }
}
</script>

<--  ****************************** CSS ************************************-->

<style scoped>

.back {

  position: relative;
  min-height: 100%;
  height: auto;
  padding-bottom: 10px;
  background-image: url("https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2Fc5ee3a6ef69847dda30cdf3e0dfa123e.png&w=1920&q=100");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}


</style>