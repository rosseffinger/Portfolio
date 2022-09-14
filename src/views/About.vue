<template>
  <div class="about" id="about">
    <div class="top-level-div">
      <div class="mid-level-div">
        <h1 class="title">About-Me</h1>
          <p class="about-me-p">I'm Ross, I am a web developer who has a strong passion for development.
        I found my joy for development back in high school with the introduction to computer science class, fast 
        forward 5 years and I have a degree in computer science and work as a full time java backend developer.
          </p>
          <br />
          <p class="about-me-p">I've studied various skills and languages here are my favorites and my most proficient:
          </p>
          <br />
          <div class="list">
          <ul>
            <li>
              Javscript
            </li>
            <li>
              Vue.js
            </li>
            <li>
              HTML, CSS
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
      <div class="picture-div">
        <img class="picture" src="../pictures/Ross_Effinger.jpg" />
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
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  color: var(--white);
  justify-content: center;
}
.top-level-div{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.mid-level-div{
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  height: 500px;
  max-width: 500px;
}
.title{
  color: var(--light-red);
}
.about-me-p{
  line-height: 1.5;
}
.picture{
  object-fit: contain;
  max-height: 500px;
  max-width: 500px;
}
.list{
  display: flex;
  color: var(--light-red);
  justify-content: space-between;
}
.list > ul{
  list-style-type: none;
  margin: 0px 15px 0px 0px;
  padding: 0px 15px 0px 0px;
}
li::before{
  content: '>';
}

</style>