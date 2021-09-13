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
            <tr v-for="(transaction, index) in getTransactions" :key="index">
              <td> <img src="https://icon-library.com/images/transactions-icon/transactions-icon-5.jpg" id="transaction"></td>
              <td><router-link :to="{ name: 'Transaction', params: { transactionHash: transaction.hash } }"> {{ transaction.hash }} </router-link></td>
              <td><router-link to="/address"> {{ transaction.from }} </router-link></td>
              <td><router-link to="/address"> {{ transaction.to }} </router-link></td>
              <td id="chain"> {{chain}} </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

!--  ****************************** SCRIPT ************************************-->

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      chain: 'NULL',
      dataRouteType: 'NULL'
    }
  },
  props: {
    hash: String,
    RouteType: String
  },
  methods: {
    setRouteType() {
      console.log("Route type in setRouteType: " + this.dataRouteType)
      this.dataRouteType = this.RouteType
    }
  },
  computed: {
    ...mapGetters(['getTransactions'])
  },
  created() {
    if (this.RouteType == 'C') {
      this.setRouteType()
      console.log("Route type in created: " + this.dataRouteType)
    }
  },
  beforeDestroy() {
    console.log("Route type in beforeDestroy: " + this.dataRouteType)
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
max-width:1px;
  
  
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
  font-size: 10px;
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