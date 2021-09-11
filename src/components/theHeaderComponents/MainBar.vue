<template>
    
  <div id="nav">
         <router-link to="/"> Home </router-link> |
         <router-link to="/c-chain"> C-Chain </router-link> |
         <router-link to="/p-chain"> P-Chain </router-link> |
         <router-link to="/x-chain"> X-chain </router-link>     
  </div>
  
    
</template>



<-- ***************************** SCRIPT ******************************** --> 

<script>
    export default {
        
    }
</script>


<-- **************** CSS *********** --> 

<style scoped>


#nav {
  background-color: #C61B1B;
  text-align: center;
}

#nav a {
  font-weight: bold;
  font-size: 25px;
  color: #000000;
  display: inline-block;
  padding: 20px;
}

#nav a.router-link-exact-active {
  color: #FFFFFF;
}



</style>