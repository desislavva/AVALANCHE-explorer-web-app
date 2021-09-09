!--  ****************************** HTML ************************************-->

<template>
  <div class="back">

      <Table />

      <Footer />

  </div>  
</template>


!--  ****************************** SCRIPT ************************************-->

<script>

import Footer from '../components/Footer.vue'
import Table from '../components/TransactionsTable.vue'
import HomeS from '@/services/Home'

export default {
    components: {
      Footer,
      Table
      
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


<style>

#info {
  background-color: #FFFFFF;
  padding-top:10px;
  text-align: center;
}

.back {
  position: relative;
  min-height: 100%;
  height: 1000px;
  background-image:url(https://coinjournal.net/wp-content/uploads/imagecache/2021/08/1629291824161-542c54b4-f0f2-49d4-a0d3-67200ce11548-smartcrop-725x375.webp) ;
  background-size: contain;
  
}

</style>
