<template>
<div class="progress-bar">
    <div class="inner-progress-bar"></div>
  </div> 
</template>

<script>
import $ from 'jquery';
export default {
    name: "ProgressBar",
    methods: {
        increaseBar(){
            document.addEventListener('DOMContentLoaded', function(){
                const progressBarInner = document.querySelector('.inner-progress-bar')
                const progressBar = document.querySelector('.progress-bar')
                window.addEventListener('scroll', function(){
                    let h = document.documentElement;
                    let st = h.scrollTop || document.body.scrollTop;
                    let sh = h.scrollHeight || document.body.scrollHeight;
                    let percent = st / (sh - h.clientHeight) * 100;
                    let round = Math.round(percent)
                    progressBarInner.style.width = percent + '%'
                    progressBarInner.innerText = round;

                })  
            })
            
        }
        },
        mounted() {
            this.increaseBar()
        } 
    }
</script>

<style scoped>
.progress-bar {
    position: sticky;
    top: 0;
    background: white;
    width: 100%;
    left: 0;
    z-index: 100;
    
}
.inner-progress-bar{
    position: relative;
    width: 0%;
    padding: 0px;
    font-size: 2px;
    color: var(--light-red);
    background-color: var(--light-red);
    z-index: 100;
}

</style>