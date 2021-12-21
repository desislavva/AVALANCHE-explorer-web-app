<template>
  <div id="nav">
         <router-link to="/"> Home </router-link> |
         <router-link to="/c-chain"> C-Chain </router-link> |
         <router-link to="/p-chain"> P-Chain </router-link> |
         <router-link to="/x-chain"> X-chain </router-link> |
         <button v-on:click="change">Switch to {{ buttonValue }}</button> 
  </div> 
</template>



<-- ***************************** SCRIPT ******************************** --> 

<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'
import BlocksModule from '../../store/modules/blocks'

    export default {
      data: function() {
        return {
          buttonValue: ''
        }
      },
      methods: {
        change: function() {
          if(this.toggleAlias === true) {
            this.$store.commit('setToggleState', false);
            this.buttonValue = 'Websocket';
            window.location.reload();
          } else {
            this.$store.commit('setToggleState', true);
            this.buttonValue = 'HTTP';
            window.location.reload();
          }
        }
      },
      computed: {
        ...mapMutations({setState: 'setToggleState'}),
        ...mapState({
          toggleAlias: state => state.BlocksModule.isWebSocketToggleOn
        })
      },
      created() {
        if(this.toggleAlias === true) {
          this.buttonValue = 'HTTP';
        } else {
          this.buttonValue = 'Websocket';
        }
      }
    }
</script>


<-- **************** CSS *********** --> 

<style scoped>


#nav {
  background-color: #C61B1B;
  text-align: center;
  border-radius: 30px 30px 30px 30px; 
  margin-bottom: 20px;
}

#nav a {
  font-weight: bold;
  font-size: 25px;
  color: #000000;
  display: inline-block;
  padding: 20px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #FFFFFF;
}



</style>