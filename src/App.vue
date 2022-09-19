<template>
  <div id="App" class="app">
    <NavBar></NavBar>
    <Home></Home>
    <About></About>
    <ProjectsAndExperience></ProjectsAndExperience>
    <Contact></Contact>
  </div>
</template>

<script type="text/javascript">
  (function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('YOUR_PUBLIC_KEY');
  })();
    </script>
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
  margin: 0;
  padding:0;
  line-height: 1.4;
  overflow-x: hidden !important;
  font-size: 3vw;
  max-width: 100%;

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
@media screen and (max-width: 550px){
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
