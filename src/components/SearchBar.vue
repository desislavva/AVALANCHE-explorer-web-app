!--  ****************************** HTML ************************************-->

<template>
    <div>
      <input
      @keyup.enter="onEnter"
      type="text" 
      name="hash"
      v-model="inputValue"
      :placeholder="searchBarPlaceholderText"/>
      <br/>
      <label> {{ error }} </label>
    </div>
</template>

!--  ****************************** SCRIPT ************************************-->
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      inputValue: '',
      error: '',
    }
  },
  props: {
    searchBarPlaceholderText: String
  },
  methods: {
    async onEnter() {
      //clear blockinfo
      this.$store.commit('clearBlockInfo')

      if (this.inputValue.slice(0, 2) == '0x') {
        if (/^0x([A-Fa-f0-9]{64})$/.test(this.inputValue)) {

          //transaction or block hash
          await this.$store.dispatch('fetchBlockByHash', this.inputValue)

          if (this.getBlockInfo == null) {
            this.$router.push({ name: 'Transaction', params: { transactionHash: this.inputValue } })
          } else {
            this.$router.push({ name: 'Block', params: { hash: this.inputValue, pageNumber: 1 } })
          }
          
        } else {
          //address hash
          this.$router.push({ name: 'Address', params: { addressHash: this.inputValue} })
        }
      } else if (this.inputValue.charAt(0) == 'X' || this.inputValue.charAt(0) == 'P') {
        //x-chain or p-chain address hash
        this.$router.push({ name: 'Address', params: { addressHash: this.inputValue} })

        //TODO: X-chain and P-chain tx hash !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      } 
      else if (this.inputValue.match(/^[0-9]+$/) != null) {
        //c-chain block number
        await this.$store.dispatch('fetchBlockByNumber', this.inputValue)

        this.$router.push({ name: 'Block', params: { hash: this.getBlockInfoByNumber.hash, pageNumber: 1 } })
      }
    }
  },
  computed: {
    ...mapGetters(['getBlockInfo', 'getTransactionInfo', 'getBlockInfoByNumber'])
  },
  created() {
  }
}
</script>

<--  ****************************** CSS ************************************-->

<style scoped>

.back {
  margin-top: 10px;
  
}

input {
  background-color: rgba(255,255,255, 0.70);
  font-size: 20px;
  border-radius: 25px;
  width: 600px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  
}

label {
  background-color: rgba(255,255,255, 0.70);
  font-size: 22px;
}

</style>