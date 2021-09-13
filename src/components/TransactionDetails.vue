<--  ****************************** HTML ************************************-->
<template>
   
<div class="info">
          <h1> {{hash}} </h1>
          
          <h3> Accepted: <label> {{accepted}} </label> </h3>
          
          <h3> Value: <label> {{value}} </label> </h3>
          
          <h3> Status: <label> {{status}}  </label> </h3>
          
          <h3> From: <label><router-link to="/address"> {{from}} </router-link> </label> </h3>
          
          <h3> To: <label><router-link to="/address"> {{to}} </router-link></label> </h3>
          
          <h3> Block: <label> {{block}} </label> </h3>

          <h3> Blockchain: <label> {{blockchain}} </label> </h3>
        </div>
    
</template>
   


<--  ****************************** SCRIPT ************************************-->

<script>
    export default {
        data () {
            return {
                  hash: '0x00000000000000000',
                  accepted: 'wqwqwqw',
                  value: '12.2121.2121',
                  status: 'Confirmed',
                  from: '0x11111111111111111',
                  to: '2xdddd00000000000',
                  block: '2234',
                  blockchain: 'C'
            }
        }
    }
</script>


<--  ****************************** CSS ************************************-->

<style scoped>

.info{
  margin: auto;
  width: 50%;
  background-color: rgba(255,255,255, 0.56);
  background-clip: content-box;
  width: 700px;
  padding-top: 100px;
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