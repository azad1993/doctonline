

<template>
  <div>
    <client-only>
      <lottie-vue-player
        :src="error"
        :autoplay="true"
        :loop="true"
        :theme="options.theme"
        :player-size="options.playerSize"
        style="width: 100%; height:400px"
      />
    </client-only>
    <div class="flex justify-center py-4">
      <NuxtLink
        
        class="px-4 flex  py-2 text-sm font-medium leading-5 shadow text-white space-x-2 items-center duration-150 border border-transparent rounded-lg   bg-izzi active:bg-izzi hover:bg-izzi-dark" to="/"
      >
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1L1 6M1 6H17M1 6L6 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span> {{ ('back') }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
<script>

import * as errorAnimation from '~/assets/animations/Error.json'

export default {
  layout: 'error',
  // muveqqeti
  middleware: ['redirectHome'],
  data () {
    return {
      error: JSON.stringify(errorAnimation.default),
      options: {
        minimizable: false,
        playerSize: 'standard',
        backgroundColor: '#fff',
        backgroundStyle: 'color',
        theme: {
          controlsView: 'standard',
          active: 'light',
          light: {
            color: '#3D4852',
            backgroundColor: '#fff',
            opacity: '0.7'
          },
          dark: {
            color: '#fff',
            backgroundColor: '#202020',
            opacity: '0.7'
          }
        }
      }
    }
  }

  // mounted () {
  //   console.log('json : ', errorAnimation.default)
  //   // this.error = JSON.parse(errorAnimation)
  // }

}
</script>
