<template>
    <section>
        <p class="pagination-container">
             <button @click="changePage(-1); pushChanges()"> Previous </button>
           
            <span>
                Showing Page {{ page }} of {{ pages }}
            </span>
            
            <button @click="changePage(+1); pushChanges()"> Next </button>  
        </p>
    </section>
</template>

<script>
export default {
    props: ['totalRecords', 'pages'],
    data: function () {
        return {
            page: this.$route.params.pageNumber
        }
    },
    computed: {
    },
    methods: {
        changePage (val) {
            switch (val) {
                case 0: this.page = 1; break;
                case -1: this.page = this.page > 1 ? this.page - 1 : this.page; break;
                case 1: this.page = this.page < this.pages ? this.page + 1 : this.page; break;
                case this.pages: this.page = this.pages; break;
            }
        },
        pushChanges () {
            this.$router.push({ name: 'Block', params: { pageNumber: this.page } })
        }
    }
}
</script>

<style scoped>
.pagination-container {
    display: flex;
    justify-content: center;
    
    
    
}
   
button {
      background-color: rgba(0, 0, 0, 0.56);
      color: white;
      border-radius: 100px 100px 100px 100px; 
      
}
.fal {
    width: 20px;
    color: #2997ff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2.5px;
    cursor: pointer;
}
</style>