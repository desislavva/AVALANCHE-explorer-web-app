<--  ****************************** HTML ************************************-->

<template>
 <div class="info">


          <h1> {{ getBlockInfo.hash }} </h1>

          
          <h3> Number: <label> {{ parseInt(getBlockInfo.number) }} </label> </h3>
          
          <h3> Timestamp: <label> {{ convertDate() }} bytes</label> </h3>
          
          <h3> Size: <label> {{ parseInt(getBlockInfo.size) }}  </label> </h3>
          
          <h3> Parent Hash: <label><router-link to="/block"> {{ getBlockInfo.parentHash }} </router-link> </label> </h3>
          
          <h3> Gas used: <label> {{ parseInt(getBlockInfo.gasUsed) }} </label> </h3>
          
          <h3> Gas limit: <label> {{ parseInt(getBlockInfo.gasLimit) }} </label> </h3>
        </div>
</template>

<--  ****************************** SCRIPT ************************************-->

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      // hash: '0x00000000000000000',
      // number: 'wqwqwqw',
      // timestamp: '12.2121.2121',
      // size: '2222',
      // parent: '0x11111111111111111',
      // gasused: '2',
      // gaslimit: '2'
    }
  },
  props: {
    hash: String
  },
  methods: {
    ...mapActions(['fetchBlockByHash']),
    convertDate() {
      let date = new Date(this.getBlockInfo.timestamp * 1000);
      return date.toUTCString();
    }
  },
  computed: {
    ...mapGetters(['getBlockInfo'])
  },
  created() {
    this.fetchBlockByHash(this.hash)
  }
}
</script>

<--  ****************************** CSS ************************************-->

<style scoped>
.info{
  background-color: rgba(255,255,255, 0.56);
  background-clip: content-box;
  width: 700px;
  padding: 40px;
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