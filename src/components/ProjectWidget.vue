<template>
  <div class="card">
        <div class="information">
            <div class="title-div">
                <a v-bind:href="project.link" target="_blank">
                <h1 class="title">{{ project.title }}</h1></a>
                <a v-bind:href="project.github" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" /></a> 
            </div>
            <p class="description"> {{ project.description }}</p>
            <p class="tech-stack"> 
                <span>Tech stack: </span>{{project.techStack}}</p>
        </div>
        <img :src="project.src" alt="" class="image vue-image">
    </div>
</template>

<script>
export default {
    name: 'ProjectWidget',
    props: ['project']
}
</script>

<style scoped>

div{
    color: var(--white);
}
span{
    color: var(--light-grey);
    font-weight: bolder;
    font-size: 1.6vw;
}
.card{
    display: flex;
    flex-direction: column;
    border-radius: .50rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: var(--light-red);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
    overflow: hidden;
    max-width: 400px;
}
.information{
    padding:1rem;
}
.card > img{
    overflow: hidden;
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    max-height: 300px;
    object-position: center;
    padding:1rem;
}
.card > img:hover{
    transform: scale(1.025);
    transition: 200ms transform ease-in-out;
}
.title-div{
    display: flex;
    align-items: center;
    gap: 10px;
}
.fa-github{
    height: 35px;
}
@media screen and (min-width: 1200px){
    .card{
        max-width: 600px;
    }
}
@media screen and (max-width: 550px){
  span{
    font-size: 3.6vw !important;
  }
}
@media screen and (min-width: 600px){
  span{
    font-size: 3.2vw !important;
  }
}
@media screen and (min-width: 800px){

  span{
    font-size: 2.6vw !important;
  }
}
@media screen and (min-width: 900px){
  span{
    font-size: 2.1vw !important;
  }
}
@media screen and (min-width: 1200px){
  span{
    font-size: 1.6vw !important;
  }
}
/* .projects-div-widget{
    display: flex;
    justify-content: center;
    gap:10px;
}
.upper-level-div{
    display: flex;
    flex-direction: column;
    margin:15px;
    background-color: var(--light-red);
    opacity: .9;
    width:90vw;
    max-width:90vw;
    width: 75vw;
    min-width:25vw;
}
.mid-level-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 10px;
}
.low-level-div{
    display: flex;
    gap:15px;
    align-content: center;
    align-items: center;
}
.description{
    width:100%;
        }
.tech-stack{
    width:100%;
    text-align: left;
}
.image{
    padding-bottom: 5px;
}
.project-div .projects-div-widget:nth-child(2) > .upper-level-div > .mid-level-div > .low-level-div > a{
    text-decoration: none !important;

}
.fa-github{
    height: 35px;
}  */
/* 


/* img[src='/img/vue-transparent-removebg-preview.5282018c.png']{
    align-self: center;
}
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
    position: relative;
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
    /* box-shadow: 5px 5px 5px 0px rgb(244,67,54, .5);
}
.low-level-div{
    display: flex;
    align-items:center;
    gap: 20px
} */
</style>