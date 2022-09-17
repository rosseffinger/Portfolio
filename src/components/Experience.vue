<template>
  <div class="experience-div-widget">
    <div class="upper-level-div">
        <div class="mid-level-div">
            <h1 class="title">{{ experience.title }}</h1>
            <p class="description"> {{ experience.description }}</p>
            <p class="tech-stack"> 
                Tech stack: {{experience.techStack}}</p>
            <p class="company">Company: {{ experience.company }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ExperienceWidget',
    props: ['experience']
}
</script>

<style scoped>
div{
    color: var(--white);
}
/* .experience-div-widget{
    font-size: 1.1rem;
    display: flex;
    flex-direction: row;
    padding: 1rem 1rem;
    margin-top: 15px;
    margin-right:8px;
    background: var(--light-grey);
    box-shadow: 5px 5px 5px 0px rgb(158,158,158, .5);
    max-width: 28vw;
    max-height: 28vw;
    min-height: 28vw;
    min-width: 28vw;
}
.mid-level-div{
    height: 100%
}
.title{
    margin-bottom:10px;
}
.description{
    margin-bottom:5px;
    padding-bottom: 5px;
}
.tech-stack{
    margin-bottom: 5px;
    padding-bottom: 5px;
}
.upper-level-div{
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    width: 30vw;
    /* box-shadow: 5px 5px 5px 0px rgb(244,67,54, .5); */

</style>