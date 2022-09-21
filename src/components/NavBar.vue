<template>
<nav class="navbar">
    <div class="title">Ross Effinger</div>
    <a href="#" class="toggle-button" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
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
            $(navbarLinks).toggleClass('active');
        }
    }
}
</script>

<style scoped>
.app-bar {
    position: fixed !important;
}
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white);
    width: 100%;
    margin-right: 1rem;
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
    top: .75rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}
.toggle-button .bar{
    height: 3px;
    width: 100%;
    background-color: var(--white);
    border-radius: .50rem;
}
a:hover{
    cursor: pointer;
}
@media screen and (max-width: 750px){
    .toggle-button{
        display: flex;

    }
    .navbar-links{
        display: none;
        width: 100%;
    }
    .navbar{
        flex-direction: column;
        align-items: flex-start;

    }
    .navbar-links ul{
        flex-direction: column;
        width: 100%;
    }
    .navbar-links li{
        text-align: center;
    }
    .navbar-links.active{
        display: flex;
    }
}
.v-toolbar__content{
    position: relative;
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