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

    <!-- Privacy Content -->
    <main class="pt-32 pb-20">
      <div class="section-container">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p class="text-gray-500 mb-12">Last updated: January 2026</p>
          
          <div class="prose prose-lg prose-gray max-w-none">
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Your Privacy is Our Priority</h2>
              <p class="text-gray-600 mb-4">
                "I am alive!" is designed with privacy at its core. We believe your personal safety information is yours alone, and we've built our app to respect that principle.
              </p>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">What Data We Collect</h2>
              <div class="glass-card p-6 mb-6">
                <h3 class="font-semibold text-gray-900 mb-2">✅ Data Stored Locally on Your Device</h3>
                <ul class="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Check-in Records:</strong> Timestamps of your daily check-ins</li>
                  <li><strong>Emergency Contacts:</strong> Names and phone numbers of your designated contacts</li>
                  <li><strong>Journal Entries:</strong> Personal notes and media you choose to record</li>
                  <li><strong>App Settings:</strong> Your preferences (check-in time, alert thresholds, etc.)</li>
                </ul>
              </div>
              
              <div class="glass-card p-6 border-2 border-alive-teal/30">
                <h3 class="font-semibold text-gray-900 mb-2">🚫 Data We Do NOT Collect</h3>
                <ul class="list-disc list-inside text-gray-600 space-y-2">
                  <li>We do <strong>not</strong> collect your location data</li>
                  <li>We do <strong>not</strong> transmit your data to external servers</li>
                  <li>We do <strong>not</strong> access your contacts beyond what you explicitly add</li>
                  <li>We do <strong>not</strong> use analytics or tracking services</li>
                  <li>We do <strong>not</strong> sell or share your data with third parties</li>
                </ul>
              </div>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Data Storage</h2>
              <p class="text-gray-600 mb-4">
                All your data is stored exclusively on your device using Apple's SwiftData framework. This means:
              </p>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>Your data stays on your iPhone</li>
                <li>If you delete the app, all data is permanently removed</li>
                <li>We have no access to your personal information</li>
                <li>iCloud sync (if enabled on your device) may backup app data according to your device settings</li>
              </ul>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Emergency Alerts</h2>
              <p class="text-gray-600 mb-4">
                When you miss a check-in, the app may send SMS messages or initiate phone calls to your designated emergency contacts. This action is performed directly from your device and does not involve our servers.
              </p>
              <p class="text-gray-600">
                Standard carrier messaging and calling rates may apply.
              </p>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Permissions</h2>
              <p class="text-gray-600 mb-4">The app requests the following permissions:</p>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Notifications:</strong> To remind you of daily check-ins</li>
                <li><strong>Contacts (optional):</strong> To easily select emergency contacts</li>
                <li><strong>Camera/Photos (optional):</strong> For journal entries with media</li>
              </ul>
              <p class="text-gray-600 mt-4">
                You can revoke these permissions at any time through your device settings.
              </p>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p class="text-gray-600">
                This app is not intended for use by children under 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p class="text-gray-600">
                We may update this privacy policy from time to time. Any changes will be reflected in the "Last updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p class="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <a href="mailto:iamalive-privacy@amoylabs.com" class="btn-primary inline-flex">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                iamalive-privacy@amoylabs.com
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
          &copy; {{ new Date().getFullYear() }} Amoy Labs. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Privacy Policy - I am alive!',
  description: 'Learn how I am alive! protects your privacy. All data stays on your device - we never collect or share your personal information.',
})
</script>
