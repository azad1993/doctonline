

<template>
  <div class="flex flex-row items-center">
    <nuxt-link class="p-2 w-16  text-2xl z-40 rounded-lg" to="/" >
      <span>Doct</span><span class="text-green font-medium">Online</span>
    </nuxt-link>
    <div class="hidden md:block sm:ml-6">
      <ul class="cursor-pointer flex flex-row space-x-1 md:space-x-2 lg:space-x-3">
        <!--<nuxt-link class="px-2 py-1 rounded-lg hover:bg-purple-100 transition ease-out duration-500" to="/" >
          {{ ('my_tasks') }}
        </nuxt-link>
        <!-- <li class="px-2 py-1 rounded-lg hover:bg-purple-100 transition ease-out duration-500">
          {{ ('search_for_help') }}
        </li> -->
        <!--<nuxt-link
          class="px-2 py-1 rounded-lg hover:bg-purple-100 transition ease-out duration-500" to="/"
          
        >
          {{ ('help') }}
        </nuxt-link>-->

        <!-- <li class="px-2 py-1 rounded-lg hover:bg-purple-100 transition ease-out duration-500">
          <switchOnOff />
        </li> -->
      </ul>
    </div>
    <div class="ml-72">
     <span class="p-2 font-medium z-40 rounded-lg ml-96 text-xs " >
      Dəstək xətti: <p class="font-normal inline-block">+994 (50) 831 31</p>
      </span>
    </div>
    
  </div>
</template>
//<script>
//import switchOnOff from '~/components/account/switchOnOff.vue'

//export default {
//  components: {
//    switchOnOff
//  }
//}
//</script>
