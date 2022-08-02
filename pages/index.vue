<template>
<div class="w-full divide-y">
    <client-only>
      <Hero />
    </client-only>
  </div>
</template>

<script>
import Hero from '~/components/HomePage/Hero.vue'
export default {
    components: {
    Hero
  }
}

</script>
