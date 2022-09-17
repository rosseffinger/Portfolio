<template>
    <div class="home" id="home">
            <div class="top-level-div">
            <div class="information-div">
                <h3 class="title">Hello, I'm Ross Effinger</h3>
                <h1 class="occupation">I am a backend developer transitioning into front-end development</h1>
                <div class="links">
                    <a href="https://www.linkedin.com/in/ross-effinger/" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://github.com/rosseffinger" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                    <button class="bland-button" @click="linkToPage"><i class="fa-solid fa-file"></i></button>
                    
                    <button @click="scroll('projects')" class="bland-button">
                        <font-awesome-icon icon="fas fa-long-arrow-alt-down" />
                    </button>
                    
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {

    name: 'Home',
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
:root{
  --red: #F44336;
  --light-red: #ce1d2a;
  --red-text: #b71c1c;
  --grey: #9e9e9e;
  --white: #FFFFFF;
  --black: #111111;
  --light-black: #181818;
}
.home{
    margin: 15px;
    padding:20px;

}
.top-level-div {
    align-self: center;
    display:flex;
    flex-direction: row;
    color: white;
    justify-content: center;
    align-items: center;
    height: inherit;
    margin-top: 15px;
}
.title{
    color: var(--light-red);
    font-size: 5rem;
}
.occupation{
    color: var(--white);
    font-size: 2rem;
    padding-left: 5px;
}
.information-div{
    display:flex;
    flex-direction: column;
    padding-bottom: 64px;
}
.information-text{
    margin-bottom: 15px;
}
.img-class{
    object-fit: contain;
    padding-right: 5rem;
    margin-right: 5rem;
    max-height: 500px
}
button{
    border: 1px solid red;
    height: 36px;
    width: max-content;
    align-self: left;
    padding: 0px 5px;
    margin-top: 5px;
    background-color: var(--light-red);
    text-transform: uppercase;
    font-weight: 500;
}
.about-button:hover{
    background-color: #e64d57;
    transition: .3s;
}
.low-level-div{
    display:flex;
    flex-direction: row;
    justify-content: center;
}
.box{
    margin: 5px;
    width: 250px;
    height: 280px;
    color: var(--white);
    background-color: var(--light-black);
}
.links{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 2rem;
    margin: 15px 2rem; 
}
a{
    color: var(--light-red);
}
.svg-inline--fa {
    height: 30px;
    width: 30px;
}
.fa-solid{
    height:30px;
    width:30px;
    background: none;
}
.bland-button{
    background:none;
    border: none;
    color: var(--light-red);
    padding: 0px 0px;
    margin: 0px 0px;
}
@media screen and (max-width: 575px){
    .top-level-div{
        align-items: flex-start !important;
    }
    .title{
       font-size: 4rem; 
    }
    .occupation{
        margin-bottom:15px;
        padding-bottom: 15px;
        font-size: 1.75rem;
        margin-top: 15px;
    }
    .links{
        padding: 10px 0rem;
        margin: 0 1rem; 
    }
}
</style>