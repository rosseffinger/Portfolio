import $ from 'jquery'
$(window).on("load",function(){
    setTimeout(function(){
        $(".load").fadeOut("slow");
    }, 10000)
    setTimeout(function(){
        $('.loader-inner').fadeIn('fast')}, 1200)
});
export default{
    name: "loadingScreen"
}