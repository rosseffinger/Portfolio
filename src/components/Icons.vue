<template>
  <div class="line">
    <div class="logo"></div>
    <div class="logo"></div>
    <div class="logo"></div>
    <div class="logo"></div>
    <div class="logo"></div>
    <div class="logo"></div>
<!--     <font-awesome-icon icon="fa-brands fa-html5" />
    <font-awesome-icon icon="fa-brands fa-vuejs" />
    <font-awesome-icon icon="fa-brands fa-css3-alt" />
    <font-awesome-icon icon="fa-brands fa-java" />
    <font-awesome-icon icon="fa-brands fa-js" />
    <font-awesome-icon icon="fa-solid fa-c" /> -->
  </div>
</template>

<script>
export default {
    name: 'Icons'
}
</script>

<style scoped>
/* .line{
    top: 150px;
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    width: 100%;
    height: 100px;
    border-radius: 50%/100px 100px 0 0;
    border: 3px solid;
    border-color: var(--light-red) transparent transparent transparent;
    background-color: var(--black);
} */

.line {
  position: absolute;
  top: 10px;
  height: 400px;
  width: 100%;
  border: 1px solid;
  border-radius: 50%;
  display: flex;
  justify-content: space-evenly;
}
div{
  position: absolute;
  height: 50%;
  width: 100%;
  transform-origin: bottom;
}
.line > div{
  position: relative;
  height: 50%;
  width: 16.67%;

}
.line > div:after{
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: var(--light-red);
}
.line > div:nth-child(1):after{
  transform: translateY(750%);
}
</style>