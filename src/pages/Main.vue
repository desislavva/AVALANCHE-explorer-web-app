!--  ****************************** HTML ************************************-->

<template>
  <div id="app">

    <img src="https://logowik.com/content/uploads/images/avalanche-coin-avax8592.jpg" alt="Logo" id="logo"> 
    <h2 id="name"> Avalanche </h2>
    <h4 id="testnet"> Fuji Testnet </h4>
    <div id="nav">

         <router-link to="/"> Home </router-link> |
         <router-link to="/c-chain"> C-Chain </router-link> |
         <router-link to="/p-chain"> P-Chain </router-link> |
         <router-link to="/x-chain"> X-chain </router-link>
     
         <router-view></router-view>
    </div>
  
  </div>
</template>


<--  ****************************** CSS ************************************-->

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

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

img {
  width: 100px;
  height: 70px;
}

#name {
  font-size: 50px;
}


#logo, #name, #testnet{
    display: inline;
}

</style>
