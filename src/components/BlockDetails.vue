<--  ****************************** HTML ************************************-->

<template>

 <div class="info">
          <h3> Hash: <label> {{hash}} </label> </h3>
          
          <h3> Number: <label> {{number}} </label> </h3>
          
          <h3> Timestamp: <label> {{timestamp}} </label> </h3>
          
          <h3> Size: <label> {{size}}  </label> </h3>
          
          <h3> Parent Hash: <label><router-link to="/block"> {{parent}} </router-link> </label> </h3>
          
          <h3> Gas used: <label> {{gasused}} </label> </h3>
          
          <h3> Gas limit: <label> {{gaslimit}} </label> </h3>
        </div>
    
</template>


<--  ****************************** SCRIPT ************************************-->

<script>
     export default {

      data () {
            return {
                  hash: '0x00000000000000000',
                  number: 'wqwqwqw',
                  timestamp: '12.2121.2121',
                  size: '2222',
                  parent: '0x11111111111111111',
                  gasused: '2',
                  gaslimit: '2'
            }
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