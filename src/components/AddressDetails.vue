<template>
  <div class="info">
    <h2> {{ addressHash }} </h2>
    
    <h3 v-if="getChainType() == 'C'"> Transactions: <label> {{ getAddressDetails[1] }} </label> </h3>
    
    <h3 v-if="getChainType() == 'C'"> Balance: <label> {{ getAddressDetails[0].slice(0, 10) }} AVAX</label> </h3>

    <div v-for="(addressDetails, index) in getAddressDetails[0]" :key="index" id="X chain">
      <h3 v-if="getChainType() == 'X'"> Balance: <label> {{ addressDetails.balance.slice(0, 8) }} {{ addressDetails.asset }}</label> </h3>
    </div>

    <h3 v-if="getChainType() == 'P'"> Balance: <label> {{ getAddressDetails.balance / 1000000000 }} AVAX</label> </h3>
    
  </div>
</template>

<--  ****************************** SCRIPT *********************************-->

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  props: {
    addressHash: String
  },
  methods: {
    getChainType() {
      if (this.addressHash.slice(0, 2) == '0x') {
        return 'C'
      } else if (this.addressHash.charAt(0) == 'X') {
        return 'X'
      } else if (this.addressHash.charAt(0) == 'P') {
        return 'P'
      }
    }
  },
  computed: {
    ...mapGetters(['getAddressDetails']),
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