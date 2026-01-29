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

    <!-- Support Content -->
    <main class="pt-32 pb-20">
      <div class="section-container">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ $t('support.title') }}</h1>
          <p class="text-xl text-gray-600 mb-12">
            {{ $t('support.intro') }}
          </p>
          
          <!-- Quick Links -->
          <div class="grid md:grid-cols-2 gap-6 mb-16">
            <a href="mailto:imhere@amoylabs.com" class="glass-card p-6 hover:shadow-2xl transition-all group">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-alive-orange to-amber-400 flex items-center justify-center mb-4 shadow-lg shadow-alive-orange/20 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t('support.emailSupport.title') }}</h3>
              <p class="text-gray-600 mb-2">{{ $t('support.emailSupport.description') }}</p>
              <span class="text-alive-orange font-medium">imhere@amoylabs.com →</span>
            </a>
            
            <a href="https://twitter.com/imhereapp" target="_blank" rel="noopener noreferrer" class="glass-card p-6 hover:shadow-2xl transition-all group">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-alive-blue to-indigo-400 flex items-center justify-center mb-4 shadow-lg shadow-alive-blue/20 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t('support.followUs.title') }}</h3>
              <p class="text-gray-600 mb-2">{{ $t('support.followUs.description') }}</p>
              <span class="text-alive-blue font-medium">@imhereapp →</span>
            </a>
          </div>

          <!-- FAQ Section -->
          <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-8">{{ $t('support.faq.title') }}</h2>
            
            <div class="space-y-6">
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('support.faq.setup.question') }}</h3>
                <p class="text-gray-600">
                  {{ $t('support.faq.setup.answer') }}
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('support.faq.missCheckin.question') }}</h3>
                <p class="text-gray-600">
                  {{ $t('support.faq.missCheckin.answer') }}
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('support.faq.cloudStorage.question') }}</h3>
                <p class="text-gray-600">
                  {{ $t('support.faq.cloudStorage.answer') }}
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('support.faq.changeTime.question') }}</h3>
                <p class="text-gray-600">
                  {{ $t('support.faq.changeTime.answer') }}
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('support.faq.manageContacts.question') }}</h3>
                <p class="text-gray-600">
                  {{ $t('support.faq.manageContacts.answer') }}
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('support.faq.offline.question') }}</h3>
                <p class="text-gray-600">
                  {{ $t('support.faq.offline.answer') }}
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('support.faq.smsCharges.question') }}</h3>
                <p class="text-gray-600">
                  {{ $t('support.faq.smsCharges.answer') }}
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ $t('support.faq.deleteData.question') }}</h3>
                <p class="text-gray-600">
                  {{ $t('support.faq.deleteData.answer') }}
                </p>
              </div>
            </div>
          </section>

          <!-- Contact CTA -->
          <div class="mt-16 text-center glass-card p-8 bg-gradient-to-br from-alive-orange/5 to-alive-teal/5">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('support.stillNeedHelp.title') }}</h2>
            <p class="text-gray-600 mb-6">
              {{ $t('support.stillNeedHelp.description') }}
            </p>
            <a href="mailto:imhere@amoylabs.com" class="btn-primary">
              {{ $t('support.stillNeedHelp.contactButton') }}
            </a>
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
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('seo.support.title'),
  description: () => t('seo.support.description'),
})
</script>
