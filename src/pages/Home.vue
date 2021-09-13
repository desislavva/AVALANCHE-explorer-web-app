!--  ****************************** HTML ************************************-->

<template>
  <div class="backp">

    <NetworkActivity />

    <p> Recent Transactions  </p>

    <div class="search">
      <Search />
    </div>

    <Table />

    <Footer />

  </div>  
</template>


!--  ****************************** SCRIPT ************************************-->

<script>

import Table from '../components/TransactionsTable.vue'
import Search from '../components/SearchBar.vue'
import NetworkActivity from '../components/NetworkActivity.vue'

export default {
    components: {
      Table,
      Search,
      NetworkActivity,

      
  },
    data () {
      return {
        hash: 'asdas',
        error: null
      }
  },
   

    methods: { 
      async getD () {
        try {
        const response = await HomeS.getD({
          

        })
        } catch(error){
          this.error = error.response.data.error;
        }
         this.error = ""; 


      }
    }
  }
  

</script>


<--  ****************************** CSS ************************************-->


<style scoped>

.search {

  text-align: center;
}

.backp {
  position: relative;
  min-height: 100%;
  height: auto;
  background-image: url(https://coinjournal.net/wp-content/uploads/imagecache/2021/08/1629291824161-542c54b4-f0f2-49d4-a0d3-67200ce11548-smartcrop-725x375.webp);
  background-size: contain;
  padding-top: 30px;
  padding-bottom: 10px;

  
}

p {
  font-size: 40px;
  text-align: left;
  color: #FFFFFF;
  padding-top: 100px;
}


</style>
