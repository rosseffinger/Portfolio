<template>
  <div class="projects-div-widget">
    <div class="upper-level-div">
        <div class="mid-level-div">
            <div class="low-level-div">
                <a v-bind:href="project.link" target="_blank">
                <h1 class="title">{{ project.title }}</h1></a>
                <a v-bind:href="project.github" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" /></a>   
            </div>


            <p class="description"> {{ project.description }}</p>
            <p class="tech-stack"> 
                Tech stack: {{project.techStack}}</p>
        </div>
        <img :src="project.src" alt="" class="image vue-image">
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProjectWidget',
    props: ['project']
}
</script>

<style scoped>
.fa-github{
    height: 35px;
}
img{
    max-height: 350px;
    max-width: 350px;
    align-self: center;
}
.project-div .projects-div-widget:nth-child(2) > .upper-level-div > .mid-level-div > .low-level-div > a{
    text-decoration: none !important;
    
}
/* img[src='/img/vue-transparent-removebg-preview.5282018c.png']{
    align-self: center;
} */
.projects-div-widget{
    font-size: 1.1rem;
    display: flex;
    flex-direction: row;
    padding: 1rem 1rem;
    margin-right:8px;
    background: var(--light-red);
    box-shadow: 5px 5px 5px 0px rgb(158,158,158, .5);
    max-width: 28vw;
    max-height: 28vw;
    min-height: 28vw;
    min-width: 28vw;
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
}
.low-level-div{
    display: flex;
    align-items:center;
    gap: 20px
}
</style>