<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <div v-if="!show" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="z-index-50 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <!-- Heroicon name: outline/check -->
              <svg
                class="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
                Cookies
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, repudiandae accusantium dicta omnis itaque quaerat, distinctio nostrum nisi, sequi reiciendis ratione numquam quisquam labore dolor rerum voluptatem voluptates? Similique, et!
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" @click="acceptCookieFnc()">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cookie from 'js-cookie'

export default {
  data () {
    return {
      show: true,
      say: 0
    }
  },

  mounted () {
    if (Cookie.get('a_cookie')) {
      this.show = Cookie.get('a_cookie')
    } else {
      this.show = null
    }
  },
  methods: {
    acceptCookieFnc () {
      Cookie.set('a_cookie', 'true')
      this.show = true
    }
  }
}
</script>
