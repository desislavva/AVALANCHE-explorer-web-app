!--  ****************************** HTML ************************************-->

<template>
  <div class="back">
    <Search :searchBarPlaceholderText="this.searchBarPlaceholderText"/>
    <BlocksTable />

    <p> Recent Transactions </p>

    <TransactionsTable />

    <p> Unaccepted Transactions </p>

    <UnacceptedTransactionsTable />


  </div>
</template>

!--  ****************************** SCRIPT ************************************-->

<script>
import Search from '../components/SearchBar.vue'
import BlocksTable from '../components/BlocksTable.vue'
import TransactionsTable from '../components/TransactionsTable.vue'
import UnacceptedTransactionsTable from '../components/TransactionsTable.vue'

export default {
  data() {
    return {
      searchBarPlaceholderText: 'Block hash / block number / tx hash / address hash'
    }
  },
  components: {
      BlocksTable,
      TransactionsTable,
      Search,
      UnacceptedTransactionsTable
  },
  methods: { 
     
    }
  }
</script>

!--  ****************************** CSS ************************************-->

<style scoped>
.back {
  position: relative;
  min-height: 100%;
  height: auto;
  background-image: url("https://cryptoactu.com/wp-content/uploads/2021/08/avalanche-avax-chainlink-tvl.jpeg");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 10px;
  
}



</style>

