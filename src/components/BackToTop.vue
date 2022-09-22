<template v-scrollanimate>
  <div class="back-to-top" @click="back"><i class="fa-solid fa-arrow-up"></i></div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'BackToTop',
    methods:{
        back(){
            window.addEventListener('scroll', function(){

                    $('.progress-bar').show()
                    var showAfter = 100;
                    if ($(this).scrollTop() > showAfter ) { 
                        $('.back-to-top').show();
                        $('.back-to-top').css('visibility', 'visible')
                        $('.back-to-top').css('position', 'absolute')
                    } else { 
                        $('.back-to-top').hide();
                    }
                    }),
                $('.back-to-top').click(function(){
                    $('html, body').animate({scrollTop: 0}, 800)
                    setTimeout(function(){
                        $('.progress-bar').hide()
                    }, 801) 
                })
        },

    },
    mounted(){
        this.back();
    }
}
</script>

<style scoped>
.back-to-top {
    position: absolute;
    visibility: hidden;
    width: 100%;
    bottom: 0;
    right: 0;
    height: 45px;
    width: 45px;
    background: var(--light-grey);
    z-index: 100;
    transition: opacity .2s ease-in-out;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border-radius: .5rem;
}
.back-to-top:hover{
    cursor: pointer;
}
</style>