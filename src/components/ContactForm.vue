<template>
    <div class="contact" id="contact">
        <div class="card">
            <p class="information">
                Do you think I would be a good fit for you team? Email me here and I will get back to you!
            </p>
        <form ref="form" @submit.prevent="sendEmail">
        <div class="form-group first-group" > 
            <label for="fullName">Full Name: </label>
            <input type="text" v-model="fullName" id="fullName" name="fullName" 
            placeholder="Enter your name" required>
        </div>
        <div class="form-group email-group">
            <label for="email_id" >Email:</label>
            <input type="email"
                v-model="email_id"
                id="email_id" name="email_id" placeholder="Your email address" required>
        </div>
        <div class="form-group body-group">
            <label for="message" >Message:</label>
            <textarea cols="30" rows="8" 
            v-model="message"
            id="message" name="message" placeholder="Body of email"></textarea>
        </div>
        <button type="submit" class="submit-button" >Submit</button>
            </form>
        <svg id="checkMarkSVG" class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle id="checkCircle" class="" cx="26" cy="26" r="25" fill="none"/>
                <path id="checkPath" class="" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
        </div>
  </div>
</template>
<script>
import emailjs from 'emailjs-com'
import $ from 'jquery'
export default {
    name:"ContactForm",
    data() {
        return{
            fullName: "",
            email_id: "",
            message: ""
        }
    },
    methods: {
          checkMark(){
            let checkMarkSVG = document.getElementById('checkMarkSVG')
            let checkCircle = document.getElementById('checkCircle')
            let checkPath = document.getElementById('checkPath')
            checkMarkSVG.classList.add('checkmark');
            checkMarkSVG.style.visibility='visible';
            checkMarkSVG.style.position='relative';
            checkMarkSVG.style.transition = '.5s';
            checkMarkSVG.style.marginTop = 'auto';
            checkCircle.classList.add('checkmark__circle');
            checkPath.classList.add('checkmark__check');
            setTimeout(function(){
              checkMarkSVG.classList.remove('checkmark')
              checkMarkSVG.style.visibility='hidden'
              checkMarkSVG.style.position='absolute';
              checkMarkSVG.style.transition = '.5s';
              checkCircle.classList.remove('checkmark__circle');
              checkPath.classList.remove('checkmark__check');  
            }, 5000) 
            },
        sendEmail(){
            try{
                emailjs.sendForm("service_yij2a5o", "template_d6melwl", this.$refs.form ,"YWqi1DuNaV_TaYGTO"
                )
            }
            catch(error){
                console.log(error);
        }
        this.email_id = ""
        this.fullName= ""
        this.message = ""
        this.checkMark()
        }
    }
}
</script>

<style scoped>
form{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--light-grey);
  padding: 1rem 1rem 0rem 1rem;
  margin: 1rem;
  border-radius: .5rem;
}
.form-group input, .form-group textarea {
  width: 100%;
  color: var(--white);
  border: 1px solid var(--light-red);
  border-radius: .5rem;
  padding: .25rem;
}
.form-group{
    width: 100%;
}
textarea{
  resize: vertical;
}
button{
    width: 100%;
    border: 1px solid var(--white);
    border-radius: .5rem;
    margin-bottom: .5rem;
    padding: .25rem;
    background-image: linear-gradient(to top, var(--light-red) 50%, transparent 50%);
    background-size: 100% 200%;
    background-position: 0% 0%;
}
button:hover{
    /* background-color: #e23642; */
    transition: .5s;
    color: var(--white);
    background-position: 0% 100%;
}
.card{
    display: flex;
    flex-direction: column;
    border-radius: .50rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: var(--light-grey);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
    overflow: hidden;
    max-width: 500px;
    transition: all 1s ease-in-out;
}
.card > p{
    padding: 1rem 1rem 0rem 1rem;
    margin: 1rem 1rem 0rem 1rem;
}
#checkMarkSVG{
  position: absolute;
  visibility: hidden;
}
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: var(--red);
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px var(--light-red);
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px var(--light-red);
  }
}
@media screen and (min-width: 1200px){
    .card{
        max-width: 600px;
    }
}
</style>