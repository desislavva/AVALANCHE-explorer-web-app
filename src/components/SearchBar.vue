!--  ****************************** HTML ************************************-->

<template>
    <div>

        <input
        type="text" 
        name="hash"
        v-model="hashOrNumber"
        placeholder="hash /number"/>
        <br/>
        <label> {{error}} </label>

    </div>
</template>


!--  ****************************** SCRIPT ************************************-->

<script>
export default {
  data () {
    return {
      hashOrNumber: '',
      error: ''
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