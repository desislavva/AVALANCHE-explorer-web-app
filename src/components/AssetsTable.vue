<--  ****************************** HTML ************************************-->
<template>
    <div>
      <table>
        <caption> Assets </caption>
        <tbody>
          <tr v-for="(assetDetails, index) in getAddressDetails.slice(1)" :key="index">
            <td> 
              <p> {{ assetDetails.assetID }} <br/> {{ assetDetails.name }} <br /> {{ assetDetails.symbol }} </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<--  ****************************** SCRIPT ************************************-->

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['getAddressDetails'])
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
  color: #ffffff;
  font-weight: bold;
}

table tr {
  background: rgba(10, 10, 10, 0.70);
 
  
}

table td {
  padding: .625em;
  text-align: center;
  
  
}

p {
    font-size: 25px;
    
}

</style>