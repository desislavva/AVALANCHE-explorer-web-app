<--  ****************************** HTML ************************************-->
<template>
  <div class="info">
    <h3> {{ getTransactionInfo.hash }} </h3>
    
    <h3> Value: <label> {{ findValueInAVAX() }} AVAX</label> </h3>
    
    <h3> From: <label><router-link to="/address"> {{ getTransactionInfo.from }} </router-link> </label> </h3>
    
    <h3> To: <label><router-link to="/address"> {{ getTransactionInfo.to }} </router-link></label> </h3>
    
    <h3> Block: <label> {{ getTransactionInfo.blockHash }} </label> </h3>

    <h3> Blockchain: <label> {{ findBlockchain() }} </label> </h3>
  </div> 
</template>

<--  ****************************** SCRIPT ************************************-->

<script>
import { mapGetters, mapActions } from 'vuex'
const web3 = require('web3-utils')

export default {
  data () {
    return {
    }
  },
  props: {
    transactionHash: String
  },
  methods: {
    findBlockchain() {
      if (this.getTransactionInfo.hash.slice(0, 2) == '0x') {
        return 'C'
      }
    },
    findValueInAVAX() {
      return web3.fromWei(`${this.getTransactionInfo.value}`, 'ether')
    }
  },
  computed: {
    ...mapGetters(['getTransactionInfo'])
  },
  created() {
    
  }
}
</script>

<--  ****************************** CSS ************************************-->

<style scoped>

.info{
  margin: auto;
  width: 50%;
  background-color: rgba(255,255,255, 0.56);
  background-clip: content-box;
  width: 700px;
  padding-top: 100px;
  border-radius: 50px 50px 50px 50px; 
  text-align: center;
}

h3 {
  margin-top: 0px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 100px;
  text-align: center;
}

label {
  color:red;
  padding-left: 30px;
  font-weight: normal;
}

a {
  color: red;
}

</style>