<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div class="section-container flex items-center justify-between h-16">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-alive-orange to-amber-400 flex items-center justify-center shadow-lg shadow-alive-orange/20 group-hover:shadow-alive-orange/40 transition-shadow">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span class="font-bold text-xl text-gray-900">{{ $t('app.name') }}</span>
        </NuxtLink>
        
        <div class="flex items-center gap-4">
          <LanguageSwitcher />
          <NuxtLink :to="localePath('/')" class="btn-secondary text-sm py-2 px-4">{{ $t('nav.backToHome') }}</NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Privacy Content -->
    <main class="pt-32 pb-20">
      <div class="section-container">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ $t('privacy.title') }}</h1>
          <p class="text-gray-500 mb-12">{{ $t('privacy.lastUpdated') }}</p>
          
          <div class="prose prose-lg prose-gray max-w-none">
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('privacy.priority.title') }}</h2>
              <p class="text-gray-600 mb-4">
                {{ $t('privacy.priority.description') }}
              </p>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('privacy.dataCollected.title') }}</h2>
              <div class="glass-card p-6 mb-6">
                <h3 class="font-semibold text-gray-900 mb-2">{{ $t('privacy.dataCollected.storedLocally.title') }}</h3>
                <ul class="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>{{ $t('privacy.dataCollected.storedLocally.checkins') }}</strong></li>
                  <li><strong>{{ $t('privacy.dataCollected.storedLocally.contacts') }}</strong></li>
                  <li><strong>{{ $t('privacy.dataCollected.storedLocally.journal') }}</strong></li>
                  <li><strong>{{ $t('privacy.dataCollected.storedLocally.settings') }}</strong></li>
                </ul>
              </div>
              
              <div class="glass-card p-6 border-2 border-alive-teal/30">
                <h3 class="font-semibold text-gray-900 mb-2">{{ $t('privacy.dataCollected.notCollected.title') }}</h3>
                <ul class="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <i18n-t keypath="privacy.dataCollected.notCollected.location" tag="span">
                      <template #notBold><strong>{{ notWord }}</strong></template>
                    </i18n-t>
                  </li>
                  <li>
                    <i18n-t keypath="privacy.dataCollected.notCollected.transmit" tag="span">
                      <template #notBold><strong>{{ notWord }}</strong></template>
                    </i18n-t>
                  </li>
                  <li>
                    <i18n-t keypath="privacy.dataCollected.notCollected.contacts" tag="span">
                      <template #notBold><strong>{{ notWord }}</strong></template>
                    </i18n-t>
                  </li>
                  <li>
                    <i18n-t keypath="privacy.dataCollected.notCollected.analytics" tag="span">
                      <template #notBold><strong>{{ notWord }}</strong></template>
                    </i18n-t>
                  </li>
                  <li>
                    <i18n-t keypath="privacy.dataCollected.notCollected.sell" tag="span">
                      <template #notBold><strong>{{ notWord }}</strong></template>
                    </i18n-t>
                  </li>
                </ul>
              </div>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('privacy.dataStorage.title') }}</h2>
              <p class="text-gray-600 mb-4">
                {{ $t('privacy.dataStorage.intro') }}
              </p>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>{{ $t('privacy.dataStorage.local') }}</li>
                <li>{{ $t('privacy.dataStorage.delete') }}</li>
                <li>{{ $t('privacy.dataStorage.noAccess') }}</li>
                <li>{{ $t('privacy.dataStorage.icloud') }}</li>
              </ul>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('privacy.emergencyAlerts.title') }}</h2>
              <p class="text-gray-600 mb-4">
                {{ $t('privacy.emergencyAlerts.description') }}
              </p>
              <p class="text-gray-600">
                {{ $t('privacy.emergencyAlerts.rates') }}
              </p>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('privacy.permissions.title') }}</h2>
              <p class="text-gray-600 mb-4">{{ $t('privacy.permissions.intro') }}</p>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>{{ $t('privacy.permissions.notifications') }}</strong></li>
                <li><strong>{{ $t('privacy.permissions.contacts') }}</strong></li>
                <li><strong>{{ $t('privacy.permissions.camera') }}</strong></li>
              </ul>
              <p class="text-gray-600 mt-4">
                {{ $t('privacy.permissions.revoke') }}
              </p>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('privacy.children.title') }}</h2>
              <p class="text-gray-600">
                {{ $t('privacy.children.description') }}
              </p>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('privacy.changes.title') }}</h2>
              <p class="text-gray-600">
                {{ $t('privacy.changes.description') }}
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('privacy.contactUs.title') }}</h2>
              <p class="text-gray-600 mb-4">
                {{ $t('privacy.contactUs.description') }}
              </p>
              <a href="mailto:iamalive@amoylabs.com" class="btn-primary inline-flex">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                iamalive@amoylabs.com
              </a>
            </section>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-8 bg-gray-900 border-t border-gray-800">
      <div class="section-container text-center">
        <p class="text-sm text-gray-500">
          {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

const tr = (key) => t(key)

// "not" in current language - English: "not", Chinese: "不"
const notWord = computed(() => locale.value === 'zh' ? '不' : 'not')

useSeoMeta({
  title: () => t('seo.privacy.title'),
  description: () => t('seo.privacy.description'),
})
</script>
