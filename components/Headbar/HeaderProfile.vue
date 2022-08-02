
<template>
  <div class="hidden md:block">
    <div class="flex flex-row items-center space-x-1 md:space-x-2 lg:space-x-9">
      <!-- <div class="relative">
        <div>
          <div class="absolute inset-y-0 pl-2 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-izzi" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            v-model="servicenameinput"
            class="block pl-8 py-2 hover:w-full w-5 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none hover:ring-1 hover:ring-indigo-500"
            :class="{'w-72 focus:w-72': showresult, 'w-5': !showresult}"
            :placeholder="('search')"
            type="search"
            @input="input"
            @focus="showResults"
            @focusout="hideResults"
          >
        </div>
        <div v-if="showresult" class="absolute rounded-xl w-full top-10 z-30">
          <div class="flex flex-col border border-izzi rounded-xl bg-white">
            <div v-for="service in subServices" :key="service.id">
              <nuxt-link
                :to="localePath(`/taskers/services/${service.id}`)"
              >
                <button class="flex rounded-xl border-b w-full p-1 lg:p-2 text-gray-900 hover:bg-gray-100 ease-out">
                  {{ service[`title_${langForFlag.value}`] }}
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div> -->

      <nuxt-link v-if="currentUserInfo"  class="border border-izzi bg-izzi flex items-center text-white hover:bg-izzi-dark px-5 py-2 capitalize rounded-md text-base">
        <svg class="h-5 w-5 mr-1" viewBox="0 0 15 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00374 7.49497L3.90556 6.24167C6.27711 2.94578 7.46289 1.29784 8.21265 1.46134C8.96241 1.62483 8.48316 3.42684 7.52468 7.03086C7.46074 7.27128 7.61286 7.47151 7.85945 7.47151H10.2036C10.2439 7.47148 10.2851 7.47148 10.3273 7.47148H10.8958C12.2812 7.47148 12.9739 7.47148 13.1519 7.91464C13.3299 8.3578 12.8853 8.97564 11.9962 10.2113L11.0944 11.4646C8.72281 14.7605 7.53704 16.4084 6.78728 16.2449C6.03751 16.0815 6.51676 14.2794 7.47525 10.6754C7.53919 10.435 7.38705 10.2347 7.14042 10.2347H4.85304C4.79487 10.2348 4.73475 10.2348 4.67259 10.2348H4.10409C2.7187 10.2348 2.026 10.2348 1.84802 9.79165C1.67005 9.34849 2.11461 8.73065 3.00374 7.49497Z" />
          <path d="M3.90556 6.24167L3.50298 6.0294L3.90556 6.24167ZM3.00374 7.49497L2.60116 7.28271L2.60116 7.28271L3.00374 7.49497ZM8.21265 1.46134L8.00142 1.9385L8.00142 1.9385L8.21265 1.46134ZM10.2036 7.47151L10.0941 7.95938L10.0945 7.95938L10.2036 7.47151ZM13.1519 7.91464L12.6681 8.16893L12.6681 8.16893L13.1519 7.91464ZM11.9962 10.2113L11.5936 9.99905L11.5936 9.99905L11.9962 10.2113ZM11.0944 11.4646L11.4969 11.6769L11.0944 11.4646ZM6.78728 16.2449L6.99851 15.7678L6.78728 16.2449ZM4.85304 10.2347L4.96248 9.74685L4.96176 9.74685L4.85304 10.2347ZM1.84802 9.79165L1.36427 10.0459L1.36427 10.0459L1.84802 9.79165ZM3.50298 6.0294L2.60116 7.28271L3.40632 7.70724L4.30814 6.45393L3.50298 6.0294ZM8.42388 0.984174C8.03004 0.898292 7.63561 1.07371 7.30817 1.30994C6.98656 1.54196 6.65151 1.88578 6.29868 2.29869C5.5895 3.12864 4.68074 4.3926 3.50298 6.0294L4.30814 6.45393C5.50193 4.79485 6.37184 3.5869 7.03588 2.80978C7.36965 2.41916 7.61984 2.17565 7.80555 2.04167C7.8951 1.97707 7.95059 1.95202 7.97804 1.94298C7.99067 1.93882 7.99663 1.93826 7.9978 1.93817C7.99868 1.93811 7.99935 1.93805 8.00142 1.9385L8.42388 0.984174ZM8.01982 7.05066C8.49563 5.26158 8.86427 3.87811 9.01525 2.92456C9.09025 2.45089 9.12028 2.03506 9.06128 1.71339C9.00022 1.38046 8.82514 1.07167 8.42388 0.984174L8.00142 1.9385C8.00349 1.93896 8.0025 1.93894 8.00081 1.93789C7.99925 1.93693 8.00097 1.93748 8.00517 1.9428C8.01474 1.95493 8.03589 1.99059 8.0512 2.07409C8.08327 2.2489 8.07416 2.53948 8.00326 2.98725C7.86244 3.87659 7.51221 5.19613 7.02953 7.01107L8.01982 7.05066ZM7.75001 7.95938H10.0941L10.313 6.98363H7.9689L7.75001 7.95938ZM10.4368 6.9836C10.3946 6.9836 10.3532 6.9836 10.3127 6.98363L10.0945 7.95938C10.1346 7.95935 10.1757 7.95935 10.2179 7.95935L10.4368 6.9836ZM11.0053 6.9836H10.4368L10.2179 7.95935H10.7864L11.0053 6.9836ZM13.6357 7.66034C13.4724 7.25386 13.0784 7.10742 12.6586 7.04433C12.2458 6.9823 11.6812 6.9836 11.0053 6.9836L10.7864 7.95935C11.4959 7.95935 11.9703 7.96066 12.2947 8.00942C12.6121 8.05712 12.6534 8.13226 12.6681 8.16893L13.6357 7.66034ZM12.3988 10.4236C12.8331 9.82001 13.1949 9.31902 13.4178 8.91316C13.6432 8.50261 13.7977 8.06378 13.6357 7.66034L12.6681 8.16893C12.6841 8.20865 12.7053 8.30033 12.5306 8.61841C12.3534 8.94118 12.0484 9.36694 11.5936 9.99905L12.3988 10.4236ZM11.4969 11.6769L12.3988 10.4236L11.5936 9.99905L10.6918 11.2524L11.4969 11.6769ZM6.57604 16.7221C6.96988 16.808 7.36431 16.6326 7.69176 16.3963C8.01336 16.1643 8.34842 15.8205 8.70125 15.4076C9.41043 14.5776 10.3192 13.3137 11.4969 11.6769L10.6918 11.2524C9.49799 12.9114 8.62808 14.1194 7.96405 14.8965C7.63027 15.2871 7.38008 15.5306 7.19437 15.6646C7.10483 15.7292 7.04933 15.7543 7.02188 15.7633C7.00925 15.7675 7.0033 15.768 7.00212 15.7681C7.00125 15.7682 7.00057 15.7682 6.99851 15.7678L6.57604 16.7221ZM6.9801 10.6556C6.50429 12.4447 6.13565 13.8282 5.98467 14.7817C5.90967 15.2554 5.87964 15.6712 5.93864 15.9929C5.9997 16.3258 6.17479 16.6346 6.57604 16.7221L6.99851 15.7678C6.99643 15.7673 6.99742 15.7673 6.99912 15.7684C7.00068 15.7694 6.99895 15.7688 6.99475 15.7635C6.98519 15.7514 6.96403 15.7157 6.94872 15.6322C6.91666 15.4574 6.92577 15.1668 6.99667 14.719C7.13748 13.8297 7.48771 12.5102 7.97039 10.6952L6.9801 10.6556ZM7.24987 9.74685H4.96248L4.7436 10.7226H7.03098L7.24987 9.74685ZM4.56314 10.7227C4.62524 10.7227 4.68572 10.7227 4.74432 10.7226L4.96176 9.74685C4.90402 9.74693 4.84427 9.74693 4.78203 9.74693L4.56314 10.7227ZM3.99465 10.7227H4.56314L4.78203 9.74693H4.21353L3.99465 10.7227ZM1.36427 10.0459C1.52752 10.4524 1.92155 10.5989 2.34134 10.662C2.75407 10.724 3.31876 10.7227 3.99465 10.7227L4.21353 9.74693C3.50403 9.74693 3.02967 9.74563 2.70521 9.69686C2.38781 9.64916 2.3465 9.57403 2.33178 9.53735L1.36427 10.0459ZM2.60116 7.28271C2.16686 7.88628 1.80498 8.38727 1.58213 8.79313C1.35672 9.20368 1.20224 9.6425 1.36427 10.0459L2.33178 9.53735C2.31583 9.49763 2.29465 9.40596 2.4693 9.08788C2.64652 8.76511 2.95149 8.33934 3.40632 7.70724L2.60116 7.28271ZM7.97039 10.6952C8.108 10.1778 7.78059 9.74685 7.24987 9.74685L7.03098 10.7226C6.9935 10.7226 6.97038 10.6922 6.9801 10.6556L7.97039 10.6952ZM7.02953 7.01107C6.89193 7.52846 7.21932 7.95938 7.75001 7.95938L7.9689 6.98363C8.00641 6.98363 8.02955 7.01409 8.01982 7.05066L7.02953 7.01107Z" />
        </svg>
        <span class="mt-0.5">{{ ('urgent_task') }}</span>
      </nuxt-link>

      <!-- {{ currentUserInfo }} -->
      <div v-if="!currentUserInfo" class="flex items-center">
        <nuxt-link  class="block p-1 mr-4 text-base font-medium text-izzi border-b-2 border-gray-300">
          {{ ('sign_in') }}
        </nuxt-link>
        <nuxt-link  class="block px-5 py-2 rounded-md text-base font-medium text-white bg-izzi">
          {{ ('sign_up') }}
        </nuxt-link>
      </div>

      <div v-else class="relative">
        <div class="flex items-center space-x-2">
          <label for="currentUserInfo" class="inline-block relative cursor-pointer">
            <img
              v-if="currentUserInfo.picture"
              class="h-10 w-10 rounded-full object-cover"
              :src="currentUserInfo.picture"
              alt="profile photo"
              title="profile photo"
              loading="lazy"
            >
            <img
              v-else
              class="h-10 w-10 rounded-full"
              src="~/static/profile-photo.jpg"
              alt="profile photo"
              title="profile photo"
              loading="lazy"
            >
            <span v-if="currentUserInfo.isAvailable" class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400" />
            <span v-else class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400" />

          </label>
          <button id="currentUserInfo" class="px-1 flex capitalize border-b-2 border-transparent focus:outline-none hover:border-gray-900 transition duration-300 ease-out" @click="profileToggle">
            <p>{{ currentUserInfo.name }}</p>
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1 mt-1 h-5 w-5 transition ease-in-out duration-200"
              :class="{'rotate-180': profiledrop}"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg> -->
          </button>
        </div>
        <transition
          enter-active-class="transition ease-out duration-400"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div v-if="profiledrop" v-on-clickaway="profileToggle" class="origin-top-right absolute z-20 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div>
              <nuxt-link  class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                {{ ('your_profile') }}
              </nuxt-link>
            </div>

            <div>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="signOut()">{{ ('sign_out') }}</a>
            </div>
          </div>
        </transition>
      </div>
      <div class="flex space-x-2 items-center">
        <div class="hover:bg-purple-100 transition ease-out duration-500 flex p-1 rounded-md relative">
          <button class="flex items-center focus:outline-none" @click="langToggle">
            <img class="h-5 w-5 rounded-full object-cover" :src="langForFlag.flag" loading="lazy">
          </button>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div v-if="langdrop" v-on-clickaway="langToggle" class="origin-top-right absolute z-10 right-0 top-10 mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div v-for="lang in languages" :key="lang.value" @click="switchLang(lang)">
                <nuxt-link v-if="langForFlag.flag !== lang.flag" :to="switchLocalePath(`${lang.value}`)" class="p-2 flex space-x-3 items-center text-gray-700 hover:bg-gray-100">
                  <img class="h-5 w-8 rounded object-cover" :src="lang.flag" alt="language flag icon" title="language flag icon" loading="lazy">
                  <span>{{ lang.label }}</span>
                </nuxt-link>
              </div>
            </div>
          </transition>
        </div>
        <nuxt-link  class="p-1 relative flex flex-col items-center group rounded-md hover:bg-purple-100 transition ease-out duration-500">
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" rx="9" fill="#222222" />
            <path d="M5.68146 9.00667C5.66439 10.3205 5.92342 11.107 6.39485 11.5784C6.8679 12.0515 7.66542 12.3184 8.99968 12.3184C10.3336 12.3184 11.1214 12.0517 11.5899 11.5797C12.0592 11.107 12.3179 10.3182 12.3179 9.00018C12.3179 7.68216 12.0592 6.89333 11.5899 6.42063C11.1214 5.9487 10.3336 5.682 8.99968 5.682C7.66617 5.682 6.88797 5.94854 6.42397 6.41933C5.95681 6.89333 5.69863 7.68444 5.68146 9.00667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.90955 2.7959C7.49533 2.7959 7.15955 3.13168 7.15955 3.5459C7.15955 3.96011 7.49533 4.2959 7.90955 4.2959H8.25045V5.18226C8.25045 5.59648 8.58624 5.93226 9.00045 5.93226C9.41467 5.93226 9.75045 5.59648 9.75045 5.18226V4.2959H10.0914C10.5056 4.2959 10.8414 3.96011 10.8414 3.5459C10.8414 3.13168 10.5056 2.7959 10.0914 2.7959H9.00045H7.90955ZM15.205 7.90955C15.205 7.49533 14.8692 7.15955 14.455 7.15955C14.0408 7.15955 13.705 7.49533 13.705 7.90955V8.25045H12.8187C12.4044 8.25045 12.0687 8.58624 12.0687 9.00045C12.0687 9.41467 12.4044 9.75045 12.8187 9.75045H13.705V10.0914C13.705 10.5056 14.0408 10.8414 14.455 10.8414C14.8692 10.8414 15.205 10.5056 15.205 10.0914V9.00046V7.90955ZM11.809 3.56104C12.1019 3.26815 12.5768 3.26815 12.8697 3.56104L13.6411 4.33243L14.4125 5.10382C14.7054 5.39671 14.7054 5.87158 14.4125 6.16448C14.1196 6.45737 13.6447 6.45737 13.3518 6.16448L13.1107 5.92342L12.484 6.55017C12.1911 6.84307 11.7162 6.84307 11.4233 6.55017C11.1304 6.25728 11.1304 5.78241 11.4233 5.48951L12.0501 4.86276L11.809 4.6217C11.5161 4.32881 11.5161 3.85393 11.809 3.56104ZM14.4125 12.8697C14.7054 12.5768 14.7054 12.1019 14.4125 11.809C14.1196 11.5161 13.6447 11.5161 13.3518 11.809L13.1108 12.0501L12.484 11.4233C12.1911 11.1304 11.7162 11.1304 11.4233 11.4233C11.1304 11.7162 11.1304 12.1911 11.4233 12.484L12.0501 13.1107L11.809 13.3518C11.5161 13.6447 11.5161 14.1196 11.809 14.4125C12.1019 14.7054 12.5768 14.7054 12.8697 14.4125L13.6411 13.6411L14.4125 12.8697ZM3.56104 6.16449C3.26815 5.87159 3.26815 5.39672 3.56104 5.10383L4.33243 4.33244L5.10382 3.56105C5.39671 3.26815 5.87158 3.26815 6.16448 3.56105C6.45737 3.85394 6.45737 4.32881 6.16448 4.62171L5.92342 4.86277L6.55017 5.48952C6.84307 5.78241 6.84307 6.25729 6.55017 6.55018C6.25728 6.84307 5.78241 6.84307 5.48951 6.55018L4.86276 5.92343L4.6217 6.16449C4.32881 6.45738 3.85393 6.45738 3.56104 6.16449ZM5.10383 14.4125C5.39672 14.7054 5.87159 14.7054 6.16449 14.4125C6.45738 14.1196 6.45738 13.6447 6.16449 13.3518L5.92343 13.1108L6.55018 12.484C6.84307 12.1911 6.84307 11.7162 6.55018 11.4233C6.25729 11.1304 5.78241 11.1304 5.48952 11.4233L4.86277 12.0501L4.62171 11.809C4.32881 11.5161 3.85394 11.5161 3.56105 11.809C3.26815 12.1019 3.26815 12.5768 3.56105 12.8697L4.33244 13.6411L5.10383 14.4125ZM3.5459 7.15955C3.13168 7.15955 2.7959 7.49533 2.7959 7.90955L2.7959 9.00046L2.7959 10.0914C2.7959 10.5056 3.13168 10.8414 3.5459 10.8414C3.96011 10.8414 4.2959 10.5056 4.2959 10.0914V9.75045H5.18226C5.59648 9.75045 5.93226 9.41467 5.93226 9.00045C5.93226 8.58624 5.59648 8.25045 5.18226 8.25045H4.2959V7.90955C4.2959 7.49533 3.96011 7.15955 3.5459 7.15955ZM7.90955 15.205C7.49533 15.205 7.15955 14.8692 7.15955 14.455C7.15955 14.0408 7.49533 13.705 7.90955 13.705H8.25045V12.8187C8.25045 12.4044 8.58624 12.0687 9.00045 12.0687C9.41467 12.0687 9.75045 12.4044 9.75045 12.8187V13.705H10.0914C10.5056 13.705 10.8414 14.0408 10.8414 14.455C10.8414 14.8692 10.5056 15.205 10.0914 15.205H9.00045H7.90955Z" fill="white" />
          </svg>
          <div class="absolute -bottom-9 flex-col items-center -mt-6 hidden group-hover:flex whitespace-nowrap">
            <span class="relative z-10 p-2 text-xs rounded leading-none text-white whitespace-no-wrap bg-black shadow-lg">{{ ('bug_report') }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
// import getSubservicesForHeadbar from '~/apollo/queries/izziAPI/customer/getSubservicesForHeadbar'
import Cookie from 'js-cookie'


export default {
  middleware: ['session-control'],
  data () {
    return {

      langForFlag: '',
      isloggedin: true,
      profiledrop: false,
      langdrop: false,
      selectedLangFlag: { label: 'Azərbaycanca', value: 'az', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png' },
      id: '',
      languages: [
        { label: 'Azərbaycanca', value: 'az', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png' },
        { label: 'English', value: 'en', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/2560px-Flag_of_the_United_Kingdom_%282-3%29.svg.png' }
        // { label: 'Pусский', value: 'ru', flag: 'https://flagpedia.net/data/flags/w1600/ru.png' }
      ],
      showresult: false,
      servicenameinput: '',
      inputtoapollo: ''
    }
  },

  computed: {
    // currentUser () {
    //   return this.$store.getters.isAuthenticatedMain
    // },
    // currentUserInfo () {
    //   return JSON.parse(this.$store.getters.getCurrentUserMain)
    // },
  
    currentUserInfo () {
      if (this.$store.getters.getCurrentUserMain) {
        // perform some logic on preference
        // logic results true or false
        // console.log('this.$store.getters.getCurrentUserMain', this.$store)
        return JSON.parse(this.$store.getters.getCurrentUserMain)
      }

      return false
    }

  },
  watch: {
    $route (to, from) {
      // page deyisende profil dropdown-un bagliyir
      this.profiledrop = false
    }
  },

  mounted () {
    if (this.$route.path.split('/')[1] === 'en') {
      this.lang = this.$route.path.split('/')[1]
      this.langForFlag = { label: 'English', value: 'en', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/2560px-Flag_of_the_United_Kingdom_%282-3%29.svg.png' }
    } else if (this.$route.path.split('/')[1] === 'ru') {
      this.lang = this.$route.path.split('/')[1]
      this.langForFlag = { label: 'Russian', value: 'ru', flag: 'https://flagpedia.net/data/flags/w1600/ru.png' }
    } else {
      this.lang = 'az'
      this.langForFlag = { label: 'Azerbaijani', value: 'az', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png' }
    }
   if (this.currentUserMain && Cookie.get('keystonejs-session') == null) {
      this.signOut()
    }
  },

  methods: {
    langToggle () {
      this.langdrop = !this.langdrop
    },
    profileToggle () {
      this.profiledrop = !this.profiledrop
    },
    signOut () {
      this.$store.dispatch('logout')
      // this.$router.push({ path: '/' })
      // alert('auye')
      this.$router.push(this.localePath({ path: '/' }))
      // this.$router.push(this.localePath({ name: 'Home', params: '/' }))
      // this.$router.push({ name: 'Home' })
    },
    switchLang (selectedLang) {
      this.langdrop = false
      this.langForFlag = selectedLang
      localStorage.setItem('izziLang', JSON.stringify(selectedLang))
    },
    showResults () {
      this.showresult = true
    },
    hideResults () {
      setTimeout(() => {
        this.showresult = false
        this.inputtoapollo = ''
      }, 500)
    }

  }

}
</script>
