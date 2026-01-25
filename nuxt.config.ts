// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
    i18n: {
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            { code: 'zh', name: '简体中文', file: 'zh.json' }
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: '../locales',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root'
        },
        compilation: {
            strictMessage: false
        },
        bundle: {
            optimizeTranslationDirective: false
        },
        vueI18n: './i18n.config.ts'
    },
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
            ],
            script: [
                { src: 'https://www.googletagmanager.com/gtag/js?id=G-M5VNH1F9Z7', async: true },
                {
                    innerHTML: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-M5VNH1F9Z7');
                    `
                }
            ]
        }
    }
})
