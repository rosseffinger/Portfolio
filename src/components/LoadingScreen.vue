<template>
  <div class="load" loadingScreen>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
    name: "LoadingScreen",

}
</script>

<style scoped>
.load{
  height: 100vh;
  width: 100vw;
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  background: var(--light-red);
  z-index: 20000;
  align-items: center;
}
.loader {
	width: 100px;
	height: 100px;
	border-radius: 50%;
  animation: circle-loader 1s ease-in-out infinite;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  align-self: center;
  height: 150%;
  background-image: url('../pictures/icons8-r-16.png');
  width: 150%;
}
@keyframes circle-loader {
  0%{
    border-left: 10px solid black;
  }
  33%{
    border-top: 10px solid black;
  }
  66%{
    border-right:10px solid black;
  }
  100%{
    border-bottom: 10px solid black;
  }
}
</style>