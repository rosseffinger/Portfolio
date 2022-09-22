<template>
<nav class="navbar">
    <a href="."><div class="title">Ross Effinger</div></a>
    <button class="toggle-button" @click="toggleMenu">
    <span class="hamburger"></span>
    </button>
    <div class="navbar-links">
        <ul>
            <li>
                <a @click="scroll('home')">Home</a>
            </li>            
            <li>
                <a @click="scroll('about')">About</a>
            </li>               
            <li>
                <a @click="scroll('projects')">Projects</a>
            </li>            
            <li>
                <a @click="linkToPage">Resume</a>
            </li>              
             <li>
                <a @click="scroll('contact')">Contact</a>
            </li>                    
        </ul>
    </div>

</nav>

<!-- <nav class="navbar">
    <div class="title">Ross Effinger</div>
    <button class="toggle-button" @click="toggleMenu">
        <span class="hamburger"></span>
    </button>
    <div class="navbar-links">
        <ul>
            <li>
                <a @click="scroll('home')">Home</a>
            </li>            
            <li>
                <a @click="scroll('about')">About</a>
            </li>               
            <li>
                <a @click="scroll('projects')">Projects</a>
            </li>            
            <li>
                <a @click="linkToPage">Resume</a>
            </li>              
             <li>
                <a @click="scroll('contact')">Contact</a>
            </li>                    
        </ul>
    </div>

</nav> -->
</template>

<script>
import $ from 'jquery'
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
        },
        toggleMenu(){
            let toggleButton = document.getElementsByClassName('toggle-button')[0]
            let navbarLinks = document.getElementsByClassName('navbar-links')[0]
            let navBar = document.getElementsByClassName('navbar')[0]
            document.body.classList.toggle('nav-open')
        }
    }
}
</script>

<style scoped>
.app-bar {
    position: fixed !important;
}
.enter-from{
  opacity: 0;
}
.enter-to{
  opacity: 1;
}
.enter-active{
  transition: opacity 2s ease;
}
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white);
    width: 100%;
    margin-right: 1rem;
    background: var(--light-black);
    margin: 0;
    padding-right: 10px;
    z-index: 100;

}
.title{
    font-size: 1.8vw;
    margin: .5rem;
    margin-left: 15px;
}
.navbar-links ul{
    margin: 0;
    padding: 0;
    display: flex;

}
.navbar-links li{
    list-style: none;
}
.navbar a {
    text-decoration: none;
}
.navbar-links li a{
    text-decoration: none;
    color:white;
    padding: 1rem;
    display: block;
}
.navbar-links li:hover{
    background-color: #555;
    transition: .5s;
}
.toggle-button{
    position: absolute;
    top: 2em;
    right: 0;
    background: var(--white);
    padding: 1em .5em;
    border: 0;
    border-radius: .5rem;
    z-index: 100;
    display: none;
}
.hamburger{
    display: block;
    position: relative;
}
.hamburger,
.hamburger::before,
.hamburger::after {
  width: 2em;
  height: 3px;
  background: var(--light-red);
  transition: transform 350ms ease-in-out, opacity 200ms linear;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  left: 0;
}
.hamburger::before { 
    bottom: 6px; 
    }
.hamburger::after { 
    top: 6px;
    }
/* .nav-open .navbar {
  transform: translateX(0);
} */
.nav-open .hamburger {
  transform: rotate(45deg);
}

.nav-open .hamburger::before {
  opacity: 0;
}

.nav-open .hamburger::after {
  transform: rotate(90deg) translate(-6px);
}
a:hover{
    cursor: pointer;
}
@media screen and (max-width: 764px){
    .toggle-button{
        display: flex;
        position: absolute;
        top:0;
        right: 0;
        margin: 1rem;
        }
    .nav-open .navbar-links{
        transform: translateX(0%);
        transition: all .5s ease-in-out;
    }
    .navbar-links{
        transform: translateX(100%);
        width: 100%;
        position: absolute;
        height: max-content;
        background: var(--light-black);
        transition: all .5s ease-in-out;
    }
    .navbar{
        flex-direction: column;
        align-items: flex-start;
        transition: all .5s ease;
        margin: 0;
        padding: 0;
        height: 8vh;
    } 
    .navbar-links ul{
        flex-direction: column;
        width: 100%;
    }
    .navbar-links li{
        text-align: center;
    }
    .title{
        font-size: 3.6vw;
        transform: translate(10px, 10px);
    }
}
@media screen and (max-width: 550px){
    .title{
        font-size: 4.5vw;
    }
}
@media screen and (max-width: 1150px){
    .theme--dark.v-btn{
        font-size: 1.8vw !important;
    }
}
@media screen and (max-width: 900px){
    .theme--dark.v-btn{
        font-size: 1vw !important;
    }
}
</style>