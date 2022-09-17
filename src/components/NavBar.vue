<template>
  <v-app-bar id='app-bar' app color="#111111" dark flat class="app-bar px-8">
    <v-btn icon>
        <v-icon color="#A7121D">fas fa-dragon</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('about')">About</v-btn>
    <v-btn text @click="scroll('projects')">Projects/Experience</v-btn>
    <v-btn text @click="linkToPage">Resume</v-btn>
    <v-btn text @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        scroll(refName){
            const element = document.getElementById(refName)
            element.scrollIntoView({behavior: "smooth"})

        },
        linkToPage(){
            let page = 'Resume.pdf'
            window.open(page)
        }
    }
}
</script>

<style scoped>
.app-bar {
    position: fixed !important;
}
.v-btn{
    font-size:1.1vw;
}
.v-toolbar__content{
    position: relative;
}
    @media screen and (max-width: 1150px){
        .theme--dark.v-btn{
            font-size: 1.8vw !important;
        }
    }

</style>