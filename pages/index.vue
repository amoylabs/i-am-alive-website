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
        
        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-gray-600 hover:text-alive-orange transition-colors font-medium">Features</a>
          <a href="#how-it-works" class="text-gray-600 hover:text-alive-orange transition-colors font-medium">How It Works</a>
          <NuxtLink to="/privacy" class="text-gray-600 hover:text-alive-orange transition-colors font-medium">Privacy</NuxtLink>
          <NuxtLink to="/support" class="text-gray-600 hover:text-alive-orange transition-colors font-medium">Support</NuxtLink>
        </div>
        
        <a href="#download" class="btn-secondary text-sm py-2 px-4">Download</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <!-- Background decorations -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-alive-orange/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-alive-teal/10 rounded-full blur-3xl"></div>
      
      <div class="section-container relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-alive-orange bg-alive-orange/10 rounded-full">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-alive-orange opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-alive-orange"></span>
              </span>
              Available on iOS
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              The Safety Net for
              <span class="gradient-text"> Solo Dwellers</span>
            </h1>
            
            <p class="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Daily check-ins keep your loved ones informed. 
              If you miss a check-in, your emergency contacts are <strong class="text-gray-800">automatically alerted</strong>.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#download" class="btn-primary">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
              <a href="#how-it-works" class="btn-secondary">
                Learn More
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Phone Mockup -->
          <div class="flex-1 relative">
            <div class="relative mx-auto w-72 lg:w-80">
              <!-- Phone Frame -->
              <div class="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-900/20 border-8 border-gray-900 bg-gray-900">
                <!-- Screen Content - Simulated App UI -->
                <div class="aspect-[9/19] bg-gradient-to-br from-orange-50 to-blue-50 p-6 flex flex-col items-center justify-center">
                  <!-- App Header -->
                  <div class="text-center mb-8">
                    <p class="text-gray-500 text-sm">Welcome to</p>
                    <h2 class="text-2xl font-bold text-gray-900">I am alive!</h2>
                    <p class="text-gray-600 text-sm mt-1">Your daily safety companion</p>
                  </div>
                  
                  <!-- Pulse Button -->
                  <div class="relative mb-8">
                    <div class="absolute inset-0 rounded-full bg-alive-orange/30 animate-pulse-ring"></div>
                    <div class="absolute inset-0 rounded-full bg-alive-orange/20 animate-pulse-ring" style="animation-delay: 0.5s;"></div>
                    <div class="relative w-36 h-36 rounded-full bg-gradient-to-br from-alive-orange to-red-500 flex items-center justify-center shadow-xl shadow-alive-orange/40">
                      <div class="text-center text-white">
                        <svg class="w-10 h-10 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span class="text-sm font-bold">I AM ALIVE!</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Status -->
                  <div class="bg-white rounded-xl px-4 py-2 shadow-sm">
                    <div class="flex items-center gap-2 text-sm">
                      <span class="text-green-500">✓</span>
                      <span class="text-gray-600">Safety Status:</span>
                      <span class="font-bold text-green-600">SECURE</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 glass-card p-3 animate-float" style="animation-delay: 0s;">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-alive-teal/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-alive-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span class="text-sm font-medium text-gray-700">Daily Streak: 7</span>
                </div>
              </div>
              
              <div class="absolute -bottom-4 -left-4 glass-card p-3 animate-float" style="animation-delay: 1s;">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-alive-orange/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-alive-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <span class="text-sm font-medium text-gray-700">3 Contacts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 lg:py-32 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Personal Safety Network
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple yet powerful features designed to keep you safe and give your loved ones peace of mind.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="glass-card p-8 hover:shadow-2xl transition-shadow group">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-alive-orange to-amber-400 flex items-center justify-center mb-6 shadow-lg shadow-alive-orange/20 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Daily Check-ins</h3>
            <p class="text-gray-600">
              A simple tap each day confirms you're okay. Set your preferred check-in time and receive gentle reminders.
            </p>
          </div>
          
          <!-- Feature 2 -->
          <div class="glass-card p-8 hover:shadow-2xl transition-shadow group">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-alive-teal to-emerald-400 flex items-center justify-center mb-6 shadow-lg shadow-alive-teal/20 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Automatic Alerts</h3>
            <p class="text-gray-600">
              If you miss a check-in, your emergency contacts receive automatic SMS or call alerts after configurable thresholds.
            </p>
          </div>
          
          <!-- Feature 3 -->
          <div class="glass-card p-8 hover:shadow-2xl transition-shadow group">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-alive-blue to-indigo-400 flex items-center justify-center mb-6 shadow-lg shadow-alive-blue/20 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Emergency Contacts</h3>
            <p class="text-gray-600">
              Add trusted friends or family members who will be notified if something seems wrong. They're your safety net.
            </p>
          </div>
          
          <!-- Feature 4 -->
          <div class="glass-card p-8 hover:shadow-2xl transition-shadow group">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Personal Journal</h3>
            <p class="text-gray-600">
              Record your thoughts, photos, and voice notes. A private space to document your daily life and wellbeing.
            </p>
          </div>
          
          <!-- Feature 5 -->
          <div class="glass-card p-8 hover:shadow-2xl transition-shadow group">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-400 flex items-center justify-center mb-6 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">100% Private</h3>
            <p class="text-gray-600">
              All your data stays on your device. No cloud storage, no tracking. Your safety information remains yours.
            </p>
          </div>
          
          <!-- Feature 6 -->
          <div class="glass-card p-8 hover:shadow-2xl transition-shadow group">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Streak Tracking</h3>
            <p class="text-gray-600">
              Build healthy habits with streak tracking. See your check-in history on a beautiful calendar view.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Set up your safety network in minutes. It's that simple.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
          <!-- Step 1 -->
          <div class="relative text-center">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-alive-orange to-red-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-alive-orange/30">
              <span class="text-2xl font-bold text-white">1</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Add Your Contacts</h3>
            <p class="text-gray-600">
              Add trusted friends or family members who will be your emergency contacts.
            </p>
            <!-- Connector (hidden on mobile) -->
            <div class="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-alive-orange to-transparent"></div>
          </div>
          
          <!-- Step 2 -->
          <div class="relative text-center">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-alive-teal to-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-alive-teal/30">
              <span class="text-2xl font-bold text-white">2</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Set Your Schedule</h3>
            <p class="text-gray-600">
              Choose your daily check-in time and how long before alerts are sent.
            </p>
            <!-- Connector (hidden on mobile) -->
            <div class="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-alive-teal to-transparent"></div>
          </div>
          
          <!-- Step 3 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-alive-blue to-indigo-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-alive-blue/30">
              <span class="text-2xl font-bold text-white">3</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Check In Daily</h3>
            <p class="text-gray-600">
              Just tap the button each day. If you miss it, your contacts will know to check on you.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="download" class="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-72 h-72 bg-alive-orange rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-alive-teal rounded-full blur-3xl"></div>
      </div>
      
      <div class="section-container relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Start Living Safer Today
        </h2>
        <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Download I am alive! and give yourself and your loved ones the peace of mind you deserve.
        </p>
        
        <a href="https://apps.apple.com/app/id6757435082" target="_blank" rel="noopener noreferrer" class="inline-block bg-white rounded-xl px-6 py-4 hover:scale-105 transition-transform shadow-2xl">
          <div class="flex items-center gap-3">
            <svg class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="text-left">
              <p class="text-xs text-gray-500">Download on the</p>
              <p class="text-xl font-semibold text-gray-900">App Store</p>
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-gray-900 border-t border-gray-800">
      <div class="section-container">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-alive-orange to-amber-400 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span class="font-bold text-white">I am alive!</span>
          </div>
          
          <nav class="flex flex-wrap justify-center gap-6 text-sm">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/support" class="text-gray-400 hover:text-white transition-colors">Support</NuxtLink>
            <a href="mailto:iamalive-support@amoylabs.com" class="text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>
          
          <p class="text-sm text-gray-500">
            &copy; {{ new Date().getFullYear() }} Amoy Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'I am alive! - Safety Net for Solo Dwellers',
  ogTitle: 'I am alive! - Safety Net for Solo Dwellers',
  description: 'I am alive! is an iOS safety app for solo dwellers. Daily check-ins keep your loved ones informed. If you miss a check-in, your emergency contacts are automatically alerted.',
  ogDescription: 'Daily check-ins. Automatic alerts. Peace of mind.',
})
</script>
