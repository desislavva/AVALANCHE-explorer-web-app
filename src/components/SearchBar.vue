!--  ****************************** HTML ************************************-->

<template>
    <div>

        <input 
        type="text" 
        name="hash"
        v-model="hashOrNumber"
        placeholder="block hash /number"/>

        <p> {{error}}</p>

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

input {
  background-color: rgba(255,255,255, 0.70);
  font-size: 20px;
  border-radius: 25px;
  width: 600px;
  height: 30px;
  margin-top: 50px;
}

p {
  
  background-color: white;
  font-weight: bold;
}

</style>