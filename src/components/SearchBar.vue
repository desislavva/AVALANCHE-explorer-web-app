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
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      inputValue: '',
      error: 'asdasdsa',
    }
  },
  props: {
    searchBarPlaceholderText: String
  },
  methods: {
    onEnter() {
      if (this.inputValue.slice(0, 2) == '0x') {
        if (/^0x([A-Fa-f0-9]{64})$/.test(this.inputValue)) {
          //transaction or block hash

        } else {
          //address hash
        }
      } else if (this.inputValue.charAt(0) == 'X') {
        //x-chain address hash
      } else if (this.inputValue.charAt(0) == 'P') {
        //p-chain address hash
      } else if (this.inputValue.match(/^[0-9]+$/) != null) {
        //c-chain block number
      }
    }
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