
!--  ****************************** HTML ************************************-->

<template>
    <div class="footer">
        <hr>
        <div id="info"> 
        <h4> Avalanche Explorer is an analytics tool <br/> 
            that enables people to search the Avalanche blockchain for transactions, <br/> 
            addresses, and other platform activities. <br/> <br/> 
            <hr color="black">
            <h3> Social: </h3> 
            <a href="https://github.com/desislavva/avalanche-explorer-web-app"> 
            <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38630/preview.svg" alt="Logo" id="logo"> 
            </a>
        </h4>
        </div>
    </div>  
</template>


<-- ***************************** SCRIPT ******************************** --> 

<script>
    export default {
        name: 'Footer'
    }
</script>


<-- **************** CSS *********** --> 

<style scoped>

.footer {
    left: 0;
    width: 100%;
    bottom: 0;
    position: absolute;
}

#info {
    background-color: #FFFFFF;
    padding-top:10px;
    text-align: center;
}

h4 {
   margin-bottom: 0px;
}

</style>