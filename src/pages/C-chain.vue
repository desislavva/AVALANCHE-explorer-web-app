!--  ****************************** HTML ************************************-->

<template>
  <div class="back">
  
    <Search />
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
  height: 1000px;
  background-image: url("https://cryptoactu.com/wp-content/uploads/2021/08/avalanche-avax-chainlink-tvl.jpeg");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}



</style>
