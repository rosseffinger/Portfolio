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
@media screen and (min-width: 764px){
.before-enter{
  opacity: 0;
  filter: blur(5px);
  transform: translateY(15%);
  transition: all .9s;
}
.enter{
  transform: translateY(0%);
  opacity: 1;
  filter: blur(0);
}
}
</style>