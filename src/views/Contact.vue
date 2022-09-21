<template>
  <div class="contact" id="contact">
    <ContactForm v-scrollanimate></ContactForm>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
export default {
  components:{
    ContactForm,
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
  padding: 0px 15px;
}

</style>