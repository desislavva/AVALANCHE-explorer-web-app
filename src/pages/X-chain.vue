!--  ****************************** HTML ************************************-->


<template>
  <div class="back">

     <div class="description">
        <label>
            
            The X-Chain acts as a decentralized platform
            for creating and trading digital smart assets, 
            a representation of a real-world resource (e.g., equity, bonds) 
            with a set of rules that govern its behavior, 
            like "can’t be traded until tomorrow" or "can only be sent to US citizens."
            The X-Chain API allows clients to create and trade assets
            on the X-Chain and other instances of the AVM.
            
        </label>

      </div>

  
    <Search :searchBarPlaceholderText="this.searchBarPlaceholderText"/>

    <p> Recent Transactions </p>

    <TransactionsTable />
  </div>
</template>
!--  ****************************** SCRIPT ************************************-->

<script>
import Search from '../components/SearchBar.vue'

import TransactionsTable from '../components/TransactionsTable.vue'


export default {
  data() {
    return {
      searchBarPlaceholderText: "tx hash / address hash"
    }
  },
  components: {
      TransactionsTable,
      Search
      
  },
  methods: { 
     
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
  background-image: url("https://i2.wp.com/keyring.app/wp-content/uploads/2021/07/og_ava.png?resize=1024%2C538&ssl=1");
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
  
}

.description {

background-color: rgba(36, 30, 30, 0.46);
  background-clip: border-box;
  width: 300px;
  height: 300px;
  padding: 40px;
  margin-left: 20px;
  border-radius: 0 100px 0 100px; 
  border-style: outset;
  text-align: center; 

}

label {
  font-size: 20px;
  color: white;
  
}


</style>
