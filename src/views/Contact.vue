<template>
  <div class="contact" id="contact">
    <ContactForm></ContactForm>
<!--     <form ref="form" class="email-form">
      <div class="form-group first-group" @submit.prevent="sendEmail"> 
        <label for="fullName">Full Name: </label>
        <input type="text" id="fullName" name="fullName" placeholder="Enter your name" required>
      </div>
      <div class="form-group email-group">
        <label for="email_id" >Email</label>
        <input type="email" id="email_id" name="email" placeholder="Your email address" required>
      </div>
      <div class="form-group body-group">
        <label for="message" >Message</label>
        <textarea cols="30" rows="8" id="message" name="message" placeholder="Body of email"></textarea>
      </div>
      <button type="submit" class="submit-button" >Submit</button>
    </form>
    <div id="status" class="success">Success Message</div> -->

  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
export default {
  components:{
    ContactForm,
  },
  methods: {
    changeStatus(){
    },
  }
}
</script>

<style scoped>
.contact {
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>