<--  ****************************** HTML ************************************-->
<template>
    <div class="back">
        <loading :active.sync="getLoader.isLoading"
                 :is-full-page="getLoader.fullPage"
                 :color="getLoader.color"/>
        <Details v-if="getTransactionInfo.hash" :transactionHash="transactionHash"/>
    </div>
</template>

<--  ****************************** SCRIPT ************************************-->
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import Details from '../components/TransactionDetails.vue'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
    data() {
        return {
            transactionHash: this.$route.params.transactionHash
        }
    },
    components: {
        Details,
        Loading
    },
    methods: {
        ...mapActions(['fetchTransactionInfoByHash']),
        ...mapMutations(['setLoaderState'])
    },
    computed: {
        ...mapGetters(['getTransactionInfo', 'getLoader'])
    },
    created() {
        this.setLoaderState(true)
        this.fetchTransactionInfoByHash(this.transactionHash)
            .then(() => {
                this.setLoaderState(false)
            })
    },
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