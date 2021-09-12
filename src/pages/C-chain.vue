!--  ****************************** HTML ************************************-->

<template>
  <div class="back">
    <Search />
    <BlocksTable />

    <p> Recent Transactions </p>

    <TransactionsTable />
  </div>
</template>

!--  ****************************** SCRIPT ************************************-->

<script>
import Search from '../components/SearchBar.vue'
import BlocksTable from '../components/BlocksTable.vue'
import TransactionsTable from '../components/TransactionsTable.vue'

export default {
  components: {
      BlocksTable,
      TransactionsTable,
      Search
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
  background-image: url("https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2Fc5ee3a6ef69847dda30cdf3e0dfa123e.png&w=1920&q=100");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

p {
  font-size: 40px;
  text-align: left;
  color: #FFFFFF;
  margin-top: 0;
  padding-top: 100px;
}
</style>