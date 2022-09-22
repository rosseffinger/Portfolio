import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import ScrollAnimate from './directives/animationOnScroll'
import VueHead from 'vue-head'
import Progressbar from 'vuejs-progress-bar'
// eslint-disable-next-line import/no-extraneous-dependencies

library.add(faUserSecret, faTwitter, faLinkedin,faLinkedinIn, faGithub, faFileAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.directive('scrollanimate', ScrollAnimate);
Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(Progressbar)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
