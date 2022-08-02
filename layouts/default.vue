<template>
  <div class="relative font-averta">
    <div class="top-0 z-40 sticky ">
      <GeneralHeader />
     <div  class="relative top-20 right-0 p-2 space-y-2">
        <transition-group
          enter-active-class="transform transition duration-500 ease-out"
          enter-class="translate-y-2 translate-x-full opacity-0"
          enter-to-class="translate-y-0 translate-x-0 opacity-100"
          leave-active-class="transition duration-500 ease-in"
          leave-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 translate-x-full"
          class="space-y-2"
        >
          <!--<Alert v-for="alert in alerts" :key="alert.id" :alert="alert" />-->
        </transition-group>
      </div>
    </div>
   <!--<transition name="slide-fade">
      <Nuxt />
    </transition>-->
   <Hero />
    <!--<acceptCookie />-->
    <Footer />
  </div>
</template>

<script>
//import { mapState } from 'vuex'

import GeneralHeader from '@/components/Headbar/GeneralHeader.vue'
import Footer from '@/components/Footer/Footer.vue'
import Hero from '~/components/HomePage/Hero.vue'
//import Alert from '@/components/Alert.vue'
import acceptCookie from '@/components/acceptCookie.vue'


export default {
  components: {
    GeneralHeader,
    Footer,
    //Alert,
    acceptCookie,
    Hero
  },
  // middleware: ['session-control'],
  transition: {
    name: 'home',
    mode: 'out-in'
  },
  data () {
    return {
      lang: 'az'
    }
  },
  mounted () {
    if (this.$route.path.split('/')[1] === 'en') {
      this.lang = this.$route.path.split('/')[1]
    } else if (this.$route.path.split('/')[1] === 'ru') {
      this.lang = this.$route.path.split('/')[1]
    } else {
      this.lang = 'az'
    }
  },

//  computed: {
//    ...mapState(['alerts'])
//  }

}
</script>

<style>
  .home-enter-active, .home-leave-active { transition: opacity 2s; }
  .home-enter, .home-leave-active { opacity: 0; }

  .slide-fade-enter {
    transform: translateY(15px);
    opacity: 0;
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 1.5s ease;
  }
  .slide-fade-leave-to {
    transform: translateY(-15px);
    opacity: 0;
  }

</style>
