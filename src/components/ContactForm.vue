<template>
    <div class="contact" id="contact">
        <div class="card">
            <p class="information">
                Think I'd be a good fit for you team? Email me and here and I will get back to you!
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
        </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
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
  padding:.25rem;
}
input::placeholder, textarea::placeholder{
    
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
    background-color: var(--light-red);
}
button:hover{
    background-color: #e23642;
    transition: .5s;
}
button:focus{
    background-color: var(--dark-red);
    transition: .25s;
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
    max-width: 400px;
}
.card > p{
    padding: 1rem 1rem 0rem 1rem;
    margin: 1rem 1rem 0rem 1rem;
}
@media screen and (min-width: 1200px){
    .card{
        max-width: 600px;
    }
}
</style>