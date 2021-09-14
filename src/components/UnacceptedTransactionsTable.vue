<template>
    <div>
       <table>
            <thead>
                <tr>
                    <th> </th>
                    <th> HASH </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(unacceptedTransaction, index) in getUnacceptedTransactions.slice(0, 5)" :key="index">
                    <td> <img src="https://icon-library.com/images/transactions-icon/transactions-icon-5.jpg" id="transaction"></td>
                    <td> {{ unacceptedTransaction.hash }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

!--  ****************************** SCRIPT ************************************-->

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      setIntervalId: null
    }
  },
  methods: {
    ...mapActions(['fetchUnacceptedTransactions'])
  },
  computed: {
    ...mapGetters(['getUnacceptedTransactions']),
    
  },
  created() {
    this.setIntervalId = setInterval(() => {
      this.fetchUnacceptedTransactions()
    }, 2000) 
  },
  beforeDestroy() {
    clearInterval(this.setIntervalId)
  }
}
</script>

<--  ****************************** CSS ************************************-->

<style scoped>

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin-bottom: 20px;
  padding: 50px;
  width: 1000px;
  text-align: center;
  margin: auto;
  
}

table tr {
  background: rgba(255,255,255,0.51);
  padding: .35em;
}

table td {
  padding: .625em;
  text-align: center;
  white-space: nowrap;
text-overflow:ellipsis;
overflow: hidden;
max-width:10px;
  
  
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
  font-size: 25px;
}

#transaction {
  height: 40px;
}

</style>