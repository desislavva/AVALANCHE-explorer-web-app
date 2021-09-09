!--  ****************************** HTML ************************************-->

<template>
    <div>
      
        <table>
          <caption> Recent Transactions </caption>
          <thead>
              <tr>
              <th scope="col"> ID </th>
              <th scope="col"> FROM </th>
              <th scope="col"> TO </th>
              <th scope="col"> CHAIN </th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td> ID </td>
              <td> FROM </td>
              <td> TO </td>
              <td> CHAIN </td>
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
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 20px;
  width: 100%;
  table-layout: fixed;
   
}

table caption {
  font-size: 40px;
  margin: .5em 0 .75em;
  text-align: left;
  color: #FFFFFF;
}

table tr {
  background: rgba(255,255,255,0.51);
  padding: .35em;
}

table td {
  padding: .625em;
  text-align: center;
}

table th {
  background: rgba(255,0,0,0.51);
  padding: .625em;
  text-align: center;
}


table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}



</style>