<--  ****************************** HTML ************************************-->
<template>
  <div class="back" v-if="hash">
    <loading :active.sync="getLoader.isLoading"
                 :is-full-page="getLoader.fullPage"
                 :color="getLoader.color"/>
    <Details :hash="hash"/>
    <p> Block Transactions </p>
    <Transactions :RouteType="RouteType" :hash="hash" :pageNumber="pageNumber" />
  </div>
</template>
<--  ****************************** SCRIPT ************************************-->

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

import Transactions from '../components/TransactionsTable.vue'
import Details from '../components/BlockDetails.vue'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
      hash: this.$route.params.hash,
      pageNumber: this.$route.params.pageNumber,
      RouteType: 'C'
    }
  },
  components: {
    Transactions, 
    Details,
    Loading 
  },
  methods: {
    ...mapActions(['fetchTransactionsByBlockHash', 'fetchBlockByHash']),
    ...mapMutations(['setLoaderState'])
  },
  computed: {
    ...mapGetters(['getLoader'])
  },
  created() {
    this.setLoaderState(true)
    this.fetchBlockByHash(this.hash)
      .then(() => {
        this.fetchTransactionsByBlockHash(this.hash)
        this.setLoaderState(false)
      })
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