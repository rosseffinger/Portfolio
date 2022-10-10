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
        <a :href="project.pictureLink" target="_blank"><img :src="project.src" :alt="project.alt" class="image vue-image"></a>
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
    flex-wrap: wrap;
    background-color: var(--light-red);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
    overflow: hidden;
    max-width: 500px;
}
.information{
    padding:1rem;
}
.card > a > img{
    overflow: hidden;
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    max-height: 300px;
    object-position: center;
    padding:1rem;
}
.card > a > img:hover, .card > a:focus{
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
.project-div .card:nth-child(2) > .information > .title-div > a{
    text-decoration: none !important;
}

@media screen and (min-width: 900px){
    .card{
        max-width: 500px;
    }
}
@media screen and (min-width: 1200px){
    .card{
        max-width: 600px;
    }
}
@media screen and (min-width: 1500px){
    .card{
        max-width: 750px;
    }
}
</style>