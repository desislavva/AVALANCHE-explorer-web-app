<template>
    <div class="back">
        <br />
        
        <label> 24h Volume </label>
        <h1> {{volume}}  AVAX </h1>

        <br />

        <label> Blocks </label>
        <h2> {{blocks}} </h2>

        <label> Transactions </label>
        <h2> {{transactions}} </h2>

        <label> Validators </label>
        <h2> {{validators}} </h2>
        </div>

    
</template>

<script>
    export default {
        data () {
            return {
                  volume: '567 567 567',
                  blocks: '111111.11',                  transactions: '12.2121.2121',
                  validators: '2222',
                  parent: '0x11111111111111111',
                  gasused: '2',
                  gaslimit: '2'
            }
      }
        
    }
</script>

<style scoped>

.back {
  background-color: rgba(255,255,255, 0.76);
  background-clip: content-box;
  width: 400px;
  height: 400px;
  padding: 40px;
  border-radius: 100px 100px 100px 100px; 
  border-style: outset;
  text-align: center;
 
  
}


h1, h2 {
    color: rgb(78, 0, 0);
    margin-top: 0;
}

</style>