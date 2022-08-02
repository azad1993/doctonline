<template>
  <div>
    <div class="flex flex-col sm:flex-row justify-between">
      <div class="text-gray-500 flex space-x-4 sm:space-x-8 items-center">
        <a target="_blank" href="https://www.facebook.com/prodoctonline/"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="hover:text-green"
            fill="white"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            /></svg
        ></a>

        <a target="_blank" href="https://www.instagram.com/doctonline/"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="hover:text-green"
            fill="white"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            /></svg
        ></a>
        <a target="_blank" href="/"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            class="hover:text-green"
            width="16"
            height="16"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
              fill="white"
            /></svg
        ></a>
      </div>
      <div
        class="pt-2 sm:pt-0 flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-3 font-semibold text-sm text-gray-500"
      >
        <p class="text-white">
          &copy 2020 Doctonline - Bütün hüquqlar qorunur
        </p>

        <!--<nuxt-link to="/privacy" class="hover:underline hover:text-gray-900">
          <!-- {{ ("privacy_policy") }} -->
        <!--</nuxt-link>
        <nuxt-link to="terms" class="hover:underline hover:text-gray-900">
          {{ ("terms_and_conditions") }}
        </nuxt-link>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wp: process.env.WHATSAPP_NUMBER,
    };
  },
};
</script>
