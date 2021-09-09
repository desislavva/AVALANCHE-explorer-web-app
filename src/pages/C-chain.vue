!--  ****************************** HTML ************************************-->


<template>
  <div class="back">
  
    <input 
    type="text" 
    name="hash"
    v-model="hashOrNumber"
    placeholder="block hash/number"/>

    <button type="submit"> Search </button>

    <div v-html="error"/>

    <Table />

    <Footer />

  </div>
</template>


!--  ****************************** SCRIPT ************************************-->

<script>

import HomeS from '@/services/Home'
import Footer from '../components/Footer.vue'
import Table from '../components/BlocksTable.vue'

export default {
  
  components: {
      Footer,
      Table
  },
  data () {
    return {
      hashOrNumber: '',
      error: null
    }
  },
  methods: { //izprashta danni kym service-a
      async getD () {
        try {
        const response = await HomeS.getD({
          //na parametrite dawame this. ot stranicata;

        })
        } catch(error){
            this.error = error.response.data.error;
        }
            this.error = "fffffffff"; //ako nqmae problem, wzimame otgowora i pokazwame


      }
    }
  }
  

</script>



!--  ****************************** CSS ************************************-->


<style>


.back {
  position: relative;
  min-height: 100%;
  height: 1000px;
  background-image: url("https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2Fc5ee3a6ef69847dda30cdf3e0dfa123e.png&w=1920&q=100");
 
}

input {
  background-color: rgba(255,255,255, 0.70);
  font-size: 20px;
  border-radius: 25px;
  width: 600px;
  height: 30px;
  margin-top: 50px;
}

button{
  border-radius: 25px;
  font-size: 20px;
  border-color: transparent;
  
}

</style>
