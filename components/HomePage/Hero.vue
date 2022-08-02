<template>
  <div class="">
    <div class="flex flex-col items-start pl-36">
      <div class="md:py-8 sm:w-11/12 lg:w-10/12 grid lg:grid-cols-2 gap-10">
        <div class="hidden relative lg:block">
          <div class="inline-block">
            <img
              class="inset-0 w-40 h-40 inline-block -mt-28 object-cover object-center rounded-large shadow-inner"
              src="~/static/qaqash.svg"
            />
          </div>
          <div class="inline-block pl-6 pt-9">
            <p class="text-xl text-green">Stomatoloq</p>
            <h1 class="text-4xl pt-1">Azər Həsənov</h1>
            <p class="inline-block text-base mt-1">Bakı •</p>
            <p class="inline-block text-base">Elmed Medical Center •</p>
            <div class="pt-4">
              <button
                class="bg-green hover:bg-white w-36 h-10 py-2.5 text-white font-bold rounded-large block"
              >
                Randevu al
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="sticky bg-white shadow w-full ">
      <div class="w-full relative mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-12 pl-20">
          <div class="flex">
            <!--<div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
        </div>-->
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <a
                href="#Hakuna"
                class="border-transparent focus:border-green text-gray2 focus:text-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Ünvan
              </a>
              <a
                href="#Matata"
                class="border-transparent focus:border-green text-gray2 focus:text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Məlumat
              </a>
              <a
                href="#Nanana"
                class="border-transparent focus:border-green text-gray2 focus:text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                FAQ
              </a>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <!--<div>
            <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>-->

              <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-200"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
              <!--<div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>-->
            </div>
          </div>
          <!--<div class="-mr-2 flex items-center sm:hidden">-->
          <!-- Mobile menu button -->
          <!--<button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>-->
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <!--<svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>-->
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <!--<svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>-->
          <!--</button>
          </div>-->
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <!--<div class="sm:hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">-->
      <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
      <!--<a
            href="#"
            class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Ünvan</a
          >
          <a
            href="#"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Məlumat</a
          >
          <a
            href="#"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >FAQ</a
          >
          <a
            href="#"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Calendar</a
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">Tom Cook</div>
              <div class="text-sm font-medium text-gray-500">
                tom@example.com
              </div>
            </div>
            <button
              type="button"
              class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">View notifications</span>-->
      <!-- Heroicon name: outline/bell -->
      <!--<svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>-->
      <!--</div>
      </div>-->
    </nav>

    <div class="justify-items-start pl-36 pt-6">
        
      <a id="Hakuna" class="text-gray-900 block px-1 pt-1 text-2xl font-medium">
        Ünvan
        <p class="font-bold pt-3.5">Ege Hospital</p>
        <p class="font-light text-lg pt-4">Academician Hasan Aliyev St.38</p>
        <p class="font-light text-lg pt-2.5">+994 (55) 850 11 15</p>
     </a>
     
      <a
        id="Matata"
        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block items-center px-1 pt-1 border-b-2 text-2xl font-medium"
      >
        Məlumat
      </a>
      <p class="font-light pr-96 mr-36 text-base pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus hac ut sit tempor et fames. Malesuada mattis amet arcu elementum vitae. Egestas bibendum lorem tempor augue cursus laoreet placerat lacus. Interdum et scelerisque non accumsan venenatis mattis. Aliquam nulla egestas non, ac.</p>
      <a
        id="Matata"
        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block items-center px-1 pt-1 border-b-2 text-2xl font-medium"
      >
        Xidmətlər
      </a>
      <p class="font-light pr-96 mr-36 text-base pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus hac ut sit tempor et fames. Malesuada mattis amet arcu elementum vitae. Egestas bibendum lorem tempor augue cursus laoreet placerat lacus. Interdum et scelerisque non accumsan venenatis mattis. Aliquam nulla egestas non, ac.</p>
      <a
        id="Matata"
        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block items-center px-1 pt-1 border-b-2 text-2xl font-medium"
      >
        İş təcrübəsi
      </a>
      <p class="font-light pr-96 mr-36 text-base pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus hac ut sit tempor et fames. Malesuada mattis amet arcu elementum vitae. Egestas bibendum lorem tempor augue cursus laoreet placerat lacus. Interdum et scelerisque non accumsan venenatis mattis. Aliquam nulla egestas non, ac.</p>
      <a
        id="Matata"
        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block items-center px-1 pt-1 border-b-2 text-2xl font-medium"
      >
        Təhsil
      </a>
      <p class="font-light pr-96 mr-36 text-base pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus hac ut sit tempor et fames. Malesuada mattis amet arcu elementum vitae. Egestas bibendum lorem tempor augue cursus laoreet placerat lacus. Interdum et scelerisque non accumsan venenatis mattis. Aliquam nulla egestas non, ac.</p>
      <a
        id="Nanana"
        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block items-center px-1 pt-1 border-b-2 text-2xl font-medium"
      >
        FAQ
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dash: true,
      lang: "az",
    };
  },
  //  computed: {
  //    currentUserInfo () {
  //      if (this.$store.getters.getCurrentUserMain) {
  //        return JSON.parse(this.$store.getters.getCurrentUserMain)
  //      }
  //      return false
  //    }

  //  },
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

<style scoped>
.well-rounded {
  -webkit-appearance: none;
  -webkit-border-radius: 6px;
  border-radius: 6px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
