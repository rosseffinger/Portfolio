<template>
  <div id="App" class="app">
    <NavBar></NavBar>
    <Home></Home>
    <About></About>
    <ProjectsAndExperience></ProjectsAndExperience>
    <Contact></Contact>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import ProjectsAndExperience from './views/ProjectsAndExperience.vue'
import Contact from './views/Contact.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components:{
    Home,
    About,
    ProjectsAndExperience,
    Contact,
    NavBar,


  },

  data: () => ({
    //
  }),
};
</script>
<style>
:root{
  --red: #F44336;
  --light-red: #ce1d2a;
  --red-text: #b71c1c;
  --grey: #9e9e9e;
  --white: #FFFFFF;
  --black: #111111;
  --light-black: #181818;
  --light-grey: #1e1e1e
}
body{
  min-width: 100vw;   
  margin: 0;
  padding:0;
  line-height: 1.4;
  overflow-x: hidden;
}
h1{
  line-height: 1.2 !important;
}
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

}
.about{
  background-color: inherit;
  height: 100vh;
  width: 100vw;

}
.projects{
  background-color: inherit;
  height: 100vh;
  width: 100vw;

}
.contact{
  background-color: var(--black);
  height: 100vh;
  width: 100vw;
}
</style>
