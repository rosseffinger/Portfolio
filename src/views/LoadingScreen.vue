<template>
  <div class="loading-screen" id="loadingScreen">
    <div class="circle">
        <font-awesome-icon icon="fa-solid fa-r" />
    </div>
    <div class="square-loader"></div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "LoadingScreen",
    methods: {
        loadingScreen(){
            setTimeout(() => {
                $('.loading-screen').fadeOut();
            }, 2100);
        }
    },
    beforeMount(){
        this.loadingScreen()
    },
}
</script>

<style scoped>
    .loading-screen{
        background: var(--black);
        height: 100vh;
        width: 100vw;
        z-index: 10000;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circle{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        border: 1px solid var(--light-red);
        align-items: center;
    }
    .fa-r{
        color: white;
    }
    .square-loader{
        height: 60px;
        width: 60px;
        background: var(--black);
        animation: square 2s linear 0s 1;
        /* transform: translateX(-150px); */
        position: absolute;
        
    }
    @keyframes square{
        from{
            transform: translateX(0px);
        }
        to{
            transform: translateX(-150px);
        }
    }
</style>