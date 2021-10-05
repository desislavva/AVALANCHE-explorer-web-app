<template>
    <div class="back">
        <loading :active.sync="getLoader.isLoading"
                 :is-full-page="false"
                 :color="getLoader.color"/>
        <br />
        
        <label> Total staked AVAX </label>
        <h1> {{ getNetworkActivity[0].slice(0, 8) }}  AVAX </h1>

        <br />

        <label> Validators </label>
        <h2> {{ getNetworkActivity[1] }} </h2>

        <label> C-chain latest block </label>
        <h2> {{ getNetworkActivity[2] }} </h2>

        <label> P-chain latest block </label>
        <h2> {{ getNetworkActivity[3] }} </h2>
    </div> 
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import Loading from 'vue-loading-overlay'
//import 'vue-loading-overlay/dist/vue-loading.css'

export default {
    data () {
        return {
            setIntervalId: null
        }
    },
    components: {
        Loading
    },
    methods: {
        ...mapActions(['fetchNetworkActivity']),
        ...mapMutations(['setLoaderState'])
    },
    computed: {
        ...mapGetters(['getNetworkActivity', 'getLoader'])
    },
    created() {
        this.setLoaderState(true)
        this.setIntervalId = setInterval(() => {
            this.fetchNetworkActivity()
                .then(() => {
                    this.setLoaderState(false)
                })
        }, 2000)
    },
    beforeDestroy() {
        clearInterval(this.setIntervalId)
    } 
}
</script>

<style scoped>
@import 'vue-loading-overlay/dist/vue-loading.css';

.back {
  background-color: rgba(255,255,255, 0.76);
  background-clip: content-box;
  width: 400px;
  height: 400px;
  padding: 40px;
  border-radius: 100px 100px 100px 100px; 
  border-style: outset;
  text-align: center;
  margin: auto;
 
  
}


h1, h2 {
    color: rgb(78, 0, 0);
    margin-top: 0;
}

</style>