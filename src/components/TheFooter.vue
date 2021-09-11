
!--  ****************************** HTML ************************************-->

<template>
    <div class="footer">
      
      <AboutUs />
      <Social />
           
       
    
    </div>  
</template>


<-- ***************************** SCRIPT ******************************** --> 

<script>

import AboutUs from '../components/theFooterComponents/AboutUs.vue'
import Social from '../components/theFooterComponents/Social.vue'
    
    export default {
         components: {
      AboutUs,
      Social
        
    }
    }
</script>


<-- **************** CSS *********** --> 

<style scoped>

.footer {
    left: 0;
    width: 100%;
    
}


</style>