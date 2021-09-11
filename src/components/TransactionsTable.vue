!--  ****************************** HTML ************************************-->

<template>
    <div>
      
        <table>
          <thead>
              <tr>
              <th> HASH </th>
              <th> FROM </th>
              <th> TO </th>
              <th> CHAIN </th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td><router-link to="/transaction"> {{hash}} </router-link></td>
              <td><router-link to="/address"> {{from}} </router-link></td>
              <td><router-link to="/address"> {{to}} </router-link></td>
              <td id="chain"> {{chain}} </td>
          </tr>
        </tbody>
      </table>

    </div>
</template>

!--  ****************************** SCRIPT ************************************-->

<script>

    export default {
        components: {
            
        },
        data (){
          return {
            hash: '1',
            from: '0x99999999',
            to: '099999',
            chain: 'X'

          }

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

a {
  color: black;
  font-weight: bold;
}

#chain {

  font-size: 30px;
  font-weight: bold;
  background-color: rgba(255, 0, 0, 0.30);
}


</style>