<template>
  <div class="about" id="about" v-scrollanimate>
    <div class="top-level-div">
      <div class="mid-level-div">
        <h1 class="title">About Me</h1>
          <p class="about-me-p">My name is Ross Effinger, and I enjoy developing software for the internet.
        I found my joy for development back in high school with my introduction to computer science class. Fast 
        forward 5 years and I have a degree in computer science and work as a full time java spring boot developer. <br />
          </p>
          <br/>
          <a href="Resume.pdf" class="resume-link" target="_blank">Resume</a>
          <br/>
          <br />
          <p class="about-me-p">I have studied various languages, here are my favorites in which I am most proficient:
          </p>
          <br />
          <div class="list">
          <ul>
            <li>
              HTML, CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              Vue.js
            </li>
          </ul>
          <ul>
            <li>
              Java
            </li>
            <li>
              C#
            </li>
          </ul>
          </div>

      </div>
      <div class="picture-div" v-scrollanimate>
        <img src='../pictures/Ross-Effinger-head.jpg' />
      </div>
    </div>
  </div>

</template>

<script>
export default {

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
.about{
  display: grid;
  grid-template-rows: repeat(1, minmax(300px, 1fr));
  height: 100vh;
}
.resume-link{
  color: var(--light-red);
}
br{
  content: " ";
  margin-top: 20px;
  display: block;
}
.top-level-div{
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center; 
  gap: 2rem;
  align-content: center;
}
.mid-level-div{
  max-width: 500px;
  max-height: min-content;
  margin: 10px;
  padding:10px;
}
.picture-div{
  margin: 1rem;

}
.list{
  display: flex;
  flex-direction: row;
  color: var(--light-red);
  justify-content: space-between;
  max-width: 400px;
}
ul li{
  list-style-position: inside;
}
.list > ul > li::marker{
  content: ">"; 
}
.top-level-div > .picture-div > img{
    overflow: hidden;
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    max-height: 300px;
    object-position: center;
    max-width: 400px;
}
.title{
  color: var(--light-red);

}
@media screen and (min-width: 1200px){
  .mid-level-div{
    max-width: 600px;
  }

}

/* .about{
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  color: var(--white);
  justify-content: center;
  height:100vh;
  flex-wrap: wrap;
}
.top-level-div{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-wrap: wrap;
  margin: 0px 15px;

}
.mid-level-div{
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  width: 75vw;
}
.title{
  color: var(--light-red);
}
.about-me-p{
  line-height: 1.5;
}
.picture-div{
  width: 400px;
  height: 400px;
  margin-top:15px;
  margin-right:15px;
  z-index: 1;
  background: url('../pictures/Ross-Effinger-head.jpg');
  background-repeat: no-repeat;
  object-fit: contain;
  background-size:cover;
  background-position: center;
}
.picture{
  object-fit:cover;
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin-top: 10px;
}
.list{
  display: flex;
  color: var(--light-red);
  justify-content: space-between;
  max-width:400px;
}
.list > ul{
  list-style-type: none;
  margin: 0px 15px 0px 0px;
  padding: 0px 15px 0px 0px;
}
li::before{
  content: '>';
}
@media screen and (max-width: 575px){
  .picture-div{
    width: 75vw;
    height:250px;

  }
}
@media screen and (min-width:1150px){
  .mid-level-div{
    width: 50vw;
  }
}.about{
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  color: var(--white);
  justify-content: center;
  height:100vh;
  flex-wrap: wrap;
}
.top-level-div{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-wrap: wrap;
  margin: 0px 15px;

}
.mid-level-div{
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  width: 75vw;
}
.title{
  color: var(--light-red);
}
.about-me-p{
  line-height: 1.5;
}
.picture-div{
  width: 400px;
  height: 400px;
  margin-top:15px;
  margin-right:15px;
  z-index: 1;
  background: url('../pictures/Ross-Effinger-head.jpg');
  background-repeat: no-repeat;
  object-fit: contain;
  background-size:cover;
  background-position: center;
}
.picture{
  object-fit:cover;
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin-top: 10px;
}
.list{
  display: flex;
  color: var(--light-red);
  justify-content: space-between;
  max-width:400px;
}
.list > ul{
  list-style-type: none;
  margin: 0px 15px 0px 0px;
  padding: 0px 15px 0px 0px;
}
li::before{
  content: '>';
}
@media screen and (max-width: 575px){
  .picture-div{
    width: 75vw;
    height:250px;

  }
}
@media screen and (min-width:1150px){
  .mid-level-div{
    width: 50vw;
  }
} */
</style>