<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div class="section-container flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-alive-orange to-amber-400 flex items-center justify-center shadow-lg shadow-alive-orange/20 group-hover:shadow-alive-orange/40 transition-shadow">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span class="font-bold text-xl text-gray-900">I am alive!</span>
        </NuxtLink>
        
        <NuxtLink to="/" class="btn-secondary text-sm py-2 px-4">← Back to Home</NuxtLink>
      </div>
    </nav>

    <!-- Support Content -->
    <main class="pt-32 pb-20">
      <div class="section-container">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Support</h1>
          <p class="text-xl text-gray-600 mb-12">
            We're here to help. Find answers to common questions or reach out to us directly.
          </p>
          
          <!-- Quick Links -->
          <div class="grid md:grid-cols-2 gap-6 mb-16">
            <a href="mailto:iamalive-support@amoylabs.com" class="glass-card p-6 hover:shadow-2xl transition-all group">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-alive-orange to-amber-400 flex items-center justify-center mb-4 shadow-lg shadow-alive-orange/20 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p class="text-gray-600 mb-2">Get help via email. We typically respond within 24 hours.</p>
              <span class="text-alive-orange font-medium">iamalive-support@amoylabs.com →</span>
            </a>
            
            <a href="https://twitter.com/iamaliveapp" target="_blank" rel="noopener noreferrer" class="glass-card p-6 hover:shadow-2xl transition-all group">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-alive-blue to-indigo-400 flex items-center justify-center mb-4 shadow-lg shadow-alive-blue/20 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Follow Us</h3>
              <p class="text-gray-600 mb-2">Stay updated with the latest news and announcements.</p>
              <span class="text-alive-blue font-medium">@iamaliveapp →</span>
            </a>
          </div>

          <!-- FAQ Section -->
          <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            
            <div class="space-y-6">
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">How do I set up the app?</h3>
                <p class="text-gray-600">
                  When you first open the app, you'll be guided through a simple setup wizard. Add at least one emergency contact, set your preferred check-in time, and you're ready to go!
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">What happens if I miss a check-in?</h3>
                <p class="text-gray-600">
                  If you don't check in by your scheduled time, the app will first send you reminder notifications. After a configurable grace period (default: 1 hour), it will automatically send an SMS to your emergency contacts. If there's still no response, it can escalate to a phone call after another threshold.
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Is my data stored in the cloud?</h3>
                <p class="text-gray-600">
                  No. All your data is stored locally on your device using Apple's SwiftData framework. We do not have access to your personal information. Your privacy is paramount.
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Can I change my check-in time?</h3>
                <p class="text-gray-600">
                  Yes! Go to Settings in the app and you can adjust your daily check-in time, reminder frequency, and alert thresholds at any time.
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">How do I add or remove emergency contacts?</h3>
                <p class="text-gray-600">
                  Navigate to the Contacts section in the app. You can add new contacts manually or select from your phone's contact list. To remove a contact, swipe left on their name or tap edit.
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Does the app work without internet?</h3>
                <p class="text-gray-600">
                  The app works offline for check-ins and journaling. However, to send SMS alerts to your emergency contacts, your phone needs cellular service.
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Will I be charged for SMS alerts?</h3>
                <p class="text-gray-600">
                  The app uses your phone's native messaging capabilities. Standard carrier messaging rates may apply depending on your mobile plan.
                </p>
              </div>
              
              <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">How do I delete my data?</h3>
                <p class="text-gray-600">
                  Since all data is stored locally on your device, deleting the app will permanently remove all your data. You can also clear specific data from the Settings menu within the app.
                </p>
              </div>
            </div>
          </section>

          <!-- Contact CTA -->
          <div class="mt-16 text-center glass-card p-8 bg-gradient-to-br from-alive-orange/5 to-alive-teal/5">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
            <p class="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is happy to assist.
            </p>
            <a href="mailto:iamalive-support@amoylabs.com" class="btn-primary">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-8 bg-gray-900 border-t border-gray-800">
      <div class="section-container text-center">
        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Amoy Labs. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Support - I am alive!',
  description: 'Get help with I am alive! app. Find answers to frequently asked questions or contact our support team.',
})
</script>
