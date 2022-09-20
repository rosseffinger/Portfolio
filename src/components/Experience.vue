<template>
  <div class="card">
    <div class="upper-level-div">
        <h1 class="title">{{ experience.title }}</h1>
        <p class="description"> {{ experience.description }}</p>
        <p class="tech-stack"> 
            <span>Tech stack: </span> {{experience.techStack}}</p>
        <p class="company"> <span>Company: </span>{{ experience.company }}</p>
    </div>
    <a :href="experience.pictureLink" target="_blank"><img :src="experience.src" alt="" /></a>
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
.card > a > img{
    overflow: hidden;
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: contain;
    max-height: 300px;
    object-position: center;
    padding:1rem;
}
.card > a > img:hover{
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

</style>