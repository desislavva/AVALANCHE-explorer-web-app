!--  ****************************** HTML ************************************-->

<template>
    <div class="nav">
        <table>
          <caption> Recent Blocks </caption>
          <tbody>
            <tr>
              
              <td> 

                <img src="https://icon-library.com/images/cube-thin-512_10612.png" id="block">
                <router-link to="/block"> 0xdq1212121XXXXXXXXXXXXXX <br/> 12345 </router-link> 
              
              </td>
              <td> 
                
                <img src="https://icon-library.com/images/cube-thin-512_10612.png" id="block">
                <router-link to="" > 0xXXXXXXXXXXXXXXXXXXXXX <br/> 42345 </router-link> 
                
              </td>
             
              
           
            </tr>
          </tbody>
          
      </table>

      

    </div>
</template>

!--  ****************************** SCRIPT ************************************-->

<script>

    export default {
        components: {
            
        }
    }
</script>

<--  ****************************** CSS ************************************-->

<style scoped>

.nav a {
  font-weight: bold;
  font-size: 25px;
  color: #000000;
  display: inline-block;
  padding: 20px;
}

.nav a.router-link-exact-active {
  color: #FFFFFF;
}

table {
  width: 100%;
  border-spacing: 50px 3px;
  
    
}

table caption {
  font-size: 40px;
  margin: .5em 0 .75em;
  padding-top: 30px;
  padding-left: 45px;
  text-align: left;
  color: #ffffff;
  font-weight: bold;
}

table tr {
  background: rgba(255,255,255,0.51);
 
  
}

table td {
  padding: .625em;
  text-align: center;
  text-decoration: underline;
}

#block {
  height: 80px;
}
  
</style>