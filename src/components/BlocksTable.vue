!--  ****************************** HTML ************************************-->

<template>
    <div class="nav">
        <table>
          <caption> Recent Blocks </caption>
          <tbody>
            <tr v-for="(blocks, index) in chunkedBlocks" :key="index">
              <td v-for="block in blocks" :key="block.id"> <img src="https://icon-library.com/images/cube-thin-512_10612.png" id="block">
                <router-link :to="{ name: 'Block', params: { hash: block.hash } }"> {{ block.hash }} <br/> {{ parseInt(block.number) }} </router-link> 
              </td>
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
    ...mapActions(['fetchBlocks'])
  },
  computed: {
    ...mapGetters(['blocksList', 'chunkedBlocks'])
  },
  created () {
    this.fetchBlocks();
    this.setIntervalId = setInterval(() => {
      this.fetchBlocks();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.setIntervalId)
  }
}

</script>

<--  ****************************** CSS ************************************-->

<style scoped>

.nav a {
  font-weight: bold;
  font-size: 17px;
  color: #000000;
  display: inline-block;
  padding: 20px;
  text-decoration: none;
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