<template>
  <div class="line"></div>
</template>

<script>
export default {
    name: 'Icons'
}
</script>

<style scoped>
.line{
    top: 150px;
    display: block;
    position: absolute;
    width: 100%;
    height: 100px;
    border-radius: 50%/100px 100px 0 0;
    border: 3px solid var(--light-red);
    border-color: var(--light-red);
    background-color: var(--black);

}
</style>