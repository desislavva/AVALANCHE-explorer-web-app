<template>
   
<div class="info">
          <h1> {{hash}} </h1>
          
          <h3> Transactions: <label> {{numberOftransactions}} </label> </h3>
          
          <h3> Balance: <label> {{balance}} </label> </h3>
          
        </div>
    
</template>


<--  ****************************** SCRIPT ************************************-->

<script>
    export default {
        data () {
            return {
                  hash: '0x00000000000000000',
                  balance: '2234.2323232',
                  numberOftransactions: '4'
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