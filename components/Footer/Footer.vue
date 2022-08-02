<template>
  <div class="border-t bg-black">
    <div class="sm:w-11/12 xl:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
      <client-only>
        <FooterBanner />
      </client-only>
    </div>
    <div class="border-s bg-gray">
      <div class="sm:w-11/12 xl:w-10/12 mx-auto p-4 sm:p-6 lg:px-8">
        <FooterSocial />
      </div>
    </div>
  </div>
</template>

<script>
import FooterBanner from '~/components/Footer/FooterBanner.vue'
import FooterSocial from '~/components/Footer/FooterSocial.vue'
export default {
  components: {
    FooterBanner,
    FooterSocial
  }
}
</script>
