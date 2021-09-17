!--  ****************************** HTML ************************************-->
<template>
    <div>
        <table>
          <thead>
              <tr>
              <th> </th>
              <th> HASH </th>
              <th> FROM </th>
              <th> TO </th>
              <th> CHAIN </th>
              </tr>
          </thead>
          <tbody v-if="dataRouteType == 'C'">
            <tr v-for="(transaction, index) in getChunkedTransactions[this.$route.params.pageNumber - 1]" :key="index">
              <td> <img src="https://icon-library.com/images/transactions-icon/transactions-icon-5.jpg" id="transaction"></td>
              <td><router-link :to="{ name: 'Transaction', params: { transactionHash: transaction.hash } }"> {{ transaction.hash }} </router-link></td>
              <td><router-link :to="{ name: 'Address', params: { addressHash: transaction.from } }"> {{ transaction.from }} </router-link></td>
              <td><router-link :to="{ name: 'Address', params: { addressHash: transaction.to } }"> {{ transaction.to }} </router-link></td>
              <td id="chain"> {{ dataRouteType }} </td>
            </tr>
          </tbody>
          <!-- <tbody v-if="addressHashType == 'X'">
            <tr v-for="(transaction, index) in getAddressTransactions" :key="index">
              <td> <img src="https://icon-library.com/images/transactions-icon/transactions-icon-5.jpg" id="transaction"></td>
              <td><router-link :to="{ name: 'Transaction', params: { transactionHash: transaction.id } }"> {{ transaction.id }} </router-link></td>
              <tr v-for="(transactionElementInputs, index) in transaction.inputs" :key="index">
                <td><router-link :to="{ name: 'Address', params: { addressHash: `X-${transactionElementInputs.output.addresses[0]}` } }"> {{ transactionElementInputs.output.addresses[0] }} </router-link></td>

              <tr v-for="(transactionElementsOutputs, index) in transaction.outputs" :key="index">
              <td><router-link :to="{ name: 'Address', params: { addressHash: `X-${transactionElementsOutputs.addresses[0]}` } }"> {{ transactionElementsOutputs.addresses[0] }} </router-link></td>
              <td id="chain"> {{ X }} </td>
            </tr>
          </tbody> -->
          <tbody v-if="parentComponent == 'Home'">
            <tr v-for="(recentTransactions, index) in getRecentTransactions.slice(0, 5)" :key="index">
              <td> <img src="https://icon-library.com/images/transactions-icon/transactions-icon-5.jpg" id="transaction"></td>
              <td><router-link :to="{ name: 'Transaction', params: { transactionHash: recentTransactions.id } }"> {{ recentTransactions.id }} </router-link></td>
              <td><router-link :to="{ name: 'Address', params: { addressHash: `X-${recentTransactions.inputs[0].output.addresses[0]}` } }"> {{ recentTransactions.inputs[0].output.addresses[0] }} </router-link></td>
              <td><router-link :to="{ name: 'Address', params: { addressHash: `X-${recentTransactions.outputs[0].addresses[0]}` } }"> {{ recentTransactions.outputs[0].addresses[0] }} </router-link></td>
              <td v-if="recentTransactions.chainID == '11111111111111111111111111111111LpoYY'" id="chain"> P </td>
              <td v-else id="chain"> X </td>
            </tr>
          </tbody>
      </table>
      <Pagination v-if="dataRouteType == 'C'" :pages="findPages()"/>
    </div>
</template>

!--  ****************************** SCRIPT ************************************-->

<script>
import { mapGetters } from 'vuex'

import Pagination from './Pagination.vue'

export default {
  data() {
    return {
      dataRouteType: 'NULL',
      chain: 'X'
    }
  },
  components: {
    Pagination
  },
  props: {
    hash: String,
    RouteType: String,
    addressHashType: String,
    parentComponent: String
  },
  methods: {
    setRouteType() {
      this.dataRouteType = this.RouteType
    },
    findPages() {
      let allPages = Math.trunc(this.getTransactions.length / 5)

      if (this.getTransactions.length % 5 != 0){
        return allPages + 1
      } 

      return allPages
    }
  },
  computed: {
    ...mapGetters(['getTransactions', 'getChunkedTransactions', 'getAddressTransactions', 'getRecentTransactions'])
    
  },
  created() {
    if (this.RouteType == 'C') {
      this.setRouteType()
    }
  },
  beforeDestroy() {
    this.dataRouteType = 'NULL'
  }
}
</script>

<--  ****************************** CSS ************************************-->

<style scoped>

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin-bottom: 20px;
  padding: 50px;
  width: 1000px;
  text-align: center;
  margin: auto;
  
}

table tr {
  background: rgba(255,255,255,0.51);
  padding: .35em;
}

table td {
  padding: .625em;
  text-align: center;
  white-space: nowrap;
text-overflow:ellipsis;
overflow: hidden;
max-width:10px;
  
  
}

table th {
  background: rgba(255,0,0,0.51);
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

a {
  color: black;
  font-weight: bold;
  font-size: 15px;
}

#chain {
  font-size: 20px;
  font-weight: bold;
  background-color: rgba(255, 0, 0, 0.30);
}
#transaction {
  height: 40px;
}

</style>