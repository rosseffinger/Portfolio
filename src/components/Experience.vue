<template>
  <div class="card">
    <div class="upper-level-div">
        <h1 class="title">{{ experience.title }}</h1>
        <p class="description"> {{ experience.description }}</p>
        <p class="tech-stack"> 
            <span>Tech stack: </span> {{experience.techStack}}</p>
        <p class="company"> <span>Company: </span>{{ experience.company }}</p>
    </div>
    <img :src="experience.src" alt="" />
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
span{
    color: var(--red);
    font-weight: bolder;
    font-size: 3.6vw;
}
.card{
    display: flex;
    flex-direction: column;
    border-radius: .50rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: var(--light-grey);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
    overflow: hidden;
    max-width: 400px;
}
.upper-level-div{
    padding:1rem;
}
.card > img{
    overflow: hidden;
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: contain;
    max-height: 300px;
    object-position: center;
    padding:1rem;
}
.card > img:hover{
    transform: scale(1.025);
    transition: 200ms transform ease-in-out;
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