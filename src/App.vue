<template>
  <div id="App" class="app" generateMetaData>
    <NavBar></NavBar>
    <ProgressBar></ProgressBar>
    <LoadingScreen></LoadingScreen>
    <Home></Home>
    <About></About>
    <ProjectsAndExperience></ProjectsAndExperience>
    <Contact></Contact>
    <BackToTop></BackToTop>
  </div>
</template>


<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import ProjectsAndExperience from './views/ProjectsAndExperience.vue'
import Contact from './views/Contact.vue'
import NavBar from './components/NavBar.vue'
import HeadInject from './components/HeadInject.vue'
import ProgressBar from './components/ProgressBar.vue'
import BackToTop from './components/BackToTop.vue'
import LoadingScreen from './views/LoadingScreen.vue'
export default {
  name: 'App',
  components:{
    Home,
    About,
    ProjectsAndExperience,
    Contact,
    NavBar,
    HeadInject,
    ProgressBar,
    BackToTop,
    LoadingScreen,
  
  },

  data: () => ({
    //
  }),
  methods: {
    oberseve(){
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if(entry.isIntersecting){
            entry.target.classList.add('show');
          }else{
            entry.target.classList.remove('show');
          }
        })
      })
      const hiddenElements = document.querySelectorAll('.hidden')
      hiddenElements.forEach((el) => observer.observe(el));
    }
  },
};
</script>
<style>
:root{
  --red: #F44336;
  --light-red: #ce1d2a;
  --dark-red: #86131b;
  --red-text: #b71c1c;
  --grey: #9e9e9e;
  --white: #FFFFFF;
  --black: #111111;
  --light-black: #181818;
  --light-grey: #1e1e1e

}

.before-enter{
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all .9s;
}
.enter{
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
} 
@media(prefers-reduced-motion){
  .before-enter{
    transition: none;
  }
}
body{
  margin: 0;
  padding:0;
  line-height: 1.4;
  font-size: 3vw;
  max-width: 100%;
  position: relative;
}
h1{
  line-height: 1.2 !important;}
a{
  color: var(--white);
  text-decoration: underline;
}
.app{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  font-family: Roboto;
  background-color: var(--black);
}
.app-bar{
  position: sticky !important;
  width: 100vw; 
}
.home{
  background-color: var(--black);
  height: 100vh;
  width: 100vw;
  margin: 15px;
  padding:15px;

}
.about{
  background-color: inherit;
  width: 100vw;
}
.projects{
  background-color: inherit;
  width: 100vw;
  min-height: 100vh;

}
.contact{
  background-color: var(--black);
  width: 100vw;
  min-height: 100vh;
}
@media screen and (min-width: 764px){
  html, body{
/*     overflow-y: hidden;
    overflow-x: hidden; */
    contain: paint;
  }
}
@media screen and (max-width: 764px){
  html, body{
    contain: paint;
  }
}
@media screen and (max-width: 600px){
  body{
    font-size: 3.5vw;
  }
  span{
    font-size: 3.6vw !important;
  }
}
@media screen and (min-width: 600px){
  body{
    font-size: 3vw;
  }
  span{
    font-size: 3.2vw !important;
  }
}
@media screen and (min-width: 800px){
  body{
    font-size: 2.5vw;
  }
  span{
    font-size: 2.6vw !important;
  }
}
@media screen and (min-width: 900px){
  body{
    font-size: 2vw;
  }
  span{
    font-size: 2.1vw !important;
  }
}
@media screen and (min-width: 1200px){
  body{
    font-size: 1.5vw;
  }
  span{
    font-size: 1.6vw !important;
  }
}
</style>
