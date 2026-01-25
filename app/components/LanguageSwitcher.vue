<template>
  <div class="relative">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-alive-orange transition-colors rounded-lg hover:bg-gray-100"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
      <span>{{ currentLocale?.name }}</span>
      <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div 
        v-if="isOpen"
        class="absolute right-0 mt-2 w-40 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
      >
        <div class="py-2">
          <button
            v-for="locale in locales"
            :key="locale.code"
            @click="switchLocale(locale.code)"
            class="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
            :class="{ 'text-alive-orange font-medium': locale.code === currentLocale?.code, 'text-gray-700': locale.code !== currentLocale?.code }"
          >
            <span v-if="locale.code === currentLocale?.code" class="text-alive-orange">✓</span>
            <span v-else class="w-4"></span>
            {{ locale.name }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const isOpen = ref(false)

const currentLocale = computed(() => {
  return locales.value.find(l => l.code === locale.value)
})

const switchLocale = async (code) => {
  isOpen.value = false
  await setLocale(code)
  navigateTo(switchLocalePath(code))
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
