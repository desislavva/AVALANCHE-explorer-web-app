<--  ****************************** HTML ************************************-->

<template>
 <div class="info">
          <h2> {{ getBlockInfo.hash }} </h2>

          <h3> Number: <label> {{ parseInt(getBlockInfo.number) }} </label> </h3>
          
          <h3> Timestamp: <label> {{ convertDate() }} </label> </h3>
          
          <h3> Size: <label> {{ parseInt(getBlockInfo.size) }} bytes</label> </h3>
          
          <h3> Parent Hash: <label><router-link :to="{ name: 'Block', params: { hash: getBlockInfo.parentHash } }"> {{ getBlockInfo.parentHash }} </router-link> </label> </h3>
          
          <h3> Gas used: <label> {{ parseInt(getBlockInfo.gasUsed) }} </label> </h3>
          
          <h3> Gas limit: <label> {{ parseInt(getBlockInfo.gasLimit) }} </label> </h3>
        </div>
</template>

<--  ****************************** SCRIPT ************************************-->

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  props: {
    hash: String
  },
  methods: {
    convertDate() {
      let date = new Date(this.getBlockInfo.timestamp * 1000);
      return date.toUTCString();
    }
  },
  computed: {
    ...mapGetters(['getBlockInfo'])
  },
  created() {
    
  }
}
</script>

<--  ****************************** CSS ************************************-->

<style scoped>
.info{
  background-color: rgba(255,255,255, 0.56);
  background-clip: content-box;
  width: 1000px;
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