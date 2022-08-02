<template>
  <div class="bg-black">
    <div
      class="grid grid-cols-2 justify-between md:grid-cols-4 py-4 sm:py-8 lg:py-14 gap-4 text-xs sm:text-sm md:text-base"
    >
      <div class="p-2 h-full rounded-md flex flex-col space-y-20">
        <div class="">
          <nuxt-link class=" w-16 text-2xl z-40 rounded-lg" to="/">
            <span class="text-white">Doct</span><span class="text-green font-medium">Online</span>
          </nuxt-link>
        </div>
     <!--<img src="~/static/icons/app_store.svg">
        <img src="~/static/icons/google_store.png">-->

        <div class="sm:py-2 flex flex-row justify-center sm:justify-start space-x-2 sm:space-x-4 lg:space-x-6">
            <div>
              <img class="h-10 sm:h-12 w-full" src="https://assets.taskrabbit.com/v3/assets/web/en-US/appstore_badge-86c9954e1457d27db013c1f10a96ffaba845e5af7765c4ef9df4ac1549e47d67.svg" alt="app store badge" title="app store badge" loading="lazy">
            </div>
            <div>
              <img class="h-10 sm:h-12 w-full" src="https://assets.taskrabbit.com/v3/assets/web/en-US/google_play_badge-49e6ea4ba78ca19b1246873b3369891cb6e289515c11418f1fce4cb3a694c18a.svg" alt="google play badge" title="google play badge" loading="lazy">
            </div>
          </div>
      </div>
      <!--<div class="md:pl-8 lg:pl-16">
        <h1 class="font-semibold py-3 text-lg">
          {{ "company" }}
        </h1>
        <div class="flex flex-col space-y-2 text-gray-500">
          <nuxt-link class="hover:underline hover:text-gray-900" to="/">
            {{ "about_us" }}
          </nuxt-link>
          <nuxt-link class="hover:underline hover:text-gray-900" to="/">
            {{ "contact_us" }}
          </nuxt-link>
          <nuxt-link class="hover:underline hover:text-gray-900" to="/">
            {{ "careers" }}
          </nuxt-link>
        </div>
      </div>-->
      <div class="flex flex-col pl-60 w-96 text-white">
        <h1 class="py-3 text-lg font-medium">
          Linklər
        </h1>
        <div class="flex flex-col space-y-2 text-gray-500">
          <nuxt-link class="hover:underline hover:text-gray-900 font-normal" to="/">
            Daxil ol
          </nuxt-link>
          <nuxt-link class="hover:underline hover:text-gray-900 font-normal" to="/">
            Qeydiyyatdan keç
          </nuxt-link>
          <nuxt-link class="hover:underline hover:text-gray-900 font-normal" to="/">
            Dəstək (FAQ)
          </nuxt-link>
          <nuxt-link class="hover:underline hover:text-gray-900 font-normal" to="/">
            Həkim qeydiyyatı
          </nuxt-link>
          
        </div>
      </div>
      <div class="flex flex-col pl-60 w-96 text-white">
        <h1 class="py-3 font-medium text-lg">
          Əlaqə
        </h1>
        <div class="flex flex-col space-y-2 text-gray-500 ">
          <nuxt-link class="hover:underline hover:text-gray-900 font-normal" to="/">
            +994 (50) 831 31 16
          </nuxt-link>
          <nuxt-link class="hover:underline hover:text-gray-900 font-normal" to="/">
            Xan Şuşinski küç 21
          </nuxt-link>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "az",
    };
  },
  mounted() {
    if (this.$route.path.split("/")[1] === "en") {
      this.lang = this.$route.path.split("/")[1];
    } else if (this.$route.path.split("/")[1] === "ru") {
      this.lang = this.$route.path.split("/")[1];
    } else {
      this.lang = "az";
    }
  },
};
</script>
