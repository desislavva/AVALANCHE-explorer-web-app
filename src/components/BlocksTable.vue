!--  ****************************** HTML ************************************-->

<template>
    <div>
        <table>
          <caption> Recent Blocks </caption>
          <tbody>
            <tr>
              <td> <router-link to="/" > 0xdq1212121XXXXXXXXXXXXXX <br/> 12345 </router-link> </td>
              <td> <router-link to="" > 0xXXXXXXXXXXXXXXXXXXXXX <br/> 42345 </router-link> </td>
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
  color: #070707;
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


</style>