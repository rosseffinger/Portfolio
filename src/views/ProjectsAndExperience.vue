<template>
  <div class="projects" id="projects">
    <div class="project-div">
      <ProjectWidget
      v-for="project in projects" :key="project.id" :project="project" /> 
    </div>
    <div class="project-div">
      <ExperienceWidget
      v-for="experience in experiences" :key="experience.id" :experience="experience" /> 
    </div>

  </div>
  
</template>

<script>
  import ProjectWidget from '../components/ProjectWidget.vue'
  import ExperienceWidget from '../components/Experience.vue'

export default {
  components:{
    ProjectWidget,
    ExperienceWidget,
  },
   data() {
    return {
      projects:[
        {
          id: 1,
          link:'https://www.songsync.org/',
          title: 'SongSync',
          techStack: 'HTML, CSS, JS, Node.js',
          description: 'Song Sync is a web application that allows real time synchronization of lyrics across devices.',
          github: 'https://github.com/SongSync-Lyrics/SongSyncCore',
          src: require('../pictures/SongSync.png')
        },        
        {
          id: 2,
          title: 'This website', 
          description: 'I built this website using Vue.js',
          techStack: 'HTML, CSS, Vue.js',
          github: 'https://github.com/rosseffinger/Portfolio',
          src: require('../pictures/vue-transparent-removebg-preview.png')
        }
      ],
      experiences:[
        {
          id: 1,
          title: 'Associate Software Developer',
          description: 'Developing microservices and RESTful APIs via Java Spring Boot',
          company: 'Infosys',
          techStack: 'Java'
        },
        {
          id: 2,
          title: 'Web Development Intern',
          description: 'Full stack development, created widgets and updated styles for site.',
          company: 'Haynes International',
          techStack: 'Sitefinity(CMS), C#, jQuery, HTML, CSS'
        }
      ]
      }
  }
}
</script>

<style>
.projects{
  margin-top:50px;
  display: grid;
  grid-template-rows: repeat(2, minmax(300px, 1fr));
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
}
.project-div{
  display: flex;
  flex-shrink: 1;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100vw;
  padding: 0px 15px;
  overflow:hidden;

}

/* .projects{
  display: flex;
  flex-direction: row;
  color: var(--white);
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}
.project-div{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 15px;
}
.project-div:first-of-type{
  margin-top: 50px;
} */
</style>