<template>
  <div class="projects" id="projects">
    <div class="project-div">
      <ProjectWidget v-scrollanimate
      v-for="project in projects" :key="project.id" :project="project" /> 
    </div>
    <div class="project-div">
      <ExperienceWidget v-scrollanimate
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
          pictureLink: 'https://www.songsync.org/',
          src: require('../pictures/SongSync.png')
        },        
        {
          id: 2,
          title: 'This website', 
          description: 'I built this website using Vue.js, and plan on constantly updating it with my new projects as well as fresh styling.',
          techStack: 'HTML, CSS, Vue.js',
          github: 'https://github.com/rosseffinger/Portfolio',
          pictureLink: 'https://github.com/rosseffinger/Portfolio',
          src: require('../pictures/vue-transparent-removebg-preview.png')
        }
      ],
      experiences:[
        {
          id: 1,
          title: 'Associate Software Developer',
          description: 'Developing microservices and RESTful APIs via Java Spring Boot',
          company: 'Infosys',
          techStack: 'Java',
          pictureLink: 'https://www.infosys.com/',
          src: require('../pictures/in-removebg-preview.png')
        },
        {
          id: 2,
          title: 'Web Development Intern',
          description: 'Full stack development; created widgets and updated styles for site. Assisted with conversion of Telerik UI to bootstrap',
          company: 'Haynes International',
          techStack: 'Sitefinity(CMS), C#, jQuery, HTML, CSS',
          pictureLink: 'https://haynesintl.com/',
          src: require('../pictures/NASDAQ_HAYN-removebg-preview.png')
        }
      ]
      }
  }
}
</script>

<style scoped>
.before-enter{
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all .9s;
}
.before-enter:nth-child(2){
  opacity: 0;
  filter: blur(5px);
  transform: translateX(100%);
  transition-delay: .5s;
  transition: all .9s;
}
.enter:nth-child(2){
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
} 
.enter{
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
} 
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
</style>