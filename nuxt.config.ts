// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'I am alive! - Safety Net for Solo Dwellers',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'I am alive! is an iOS safety app for solo dwellers. Daily check-ins keep your loved ones informed. If you miss a check-in, your emergency contacts are automatically alerted.' },
                { name: 'keywords', content: 'safety app, solo dwellers, check-in, emergency contacts, iOS app' },
                { property: 'og:title', content: 'I am alive! - Safety Net for Solo Dwellers' },
                { property: 'og:description', content: 'Daily check-ins. Automatic alerts. Peace of mind.' },
                { property: 'og:type', content: 'website' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' }
            ]
        }
    }
})
