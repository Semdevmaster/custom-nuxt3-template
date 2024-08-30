export default defineNuxtConfig({
    compatibilityDate: '2024-08-30',
    future: {
        compatibilityVersion: 4,
    },
    experimental: {
        viewTransition: true,
        writeEarlyHints: true,
    },
    devtools: { enabled: true },
    app: {
        rootId: 'app',
        teleportId: 'teleports',
        pageTransition: false,
        layoutTransition: false,
        viewTransition: true,
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            charset: 'utf-8',
            title: 'Default title',
            titleTemplate: '%s | Sitename',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'last' }],
        viewer: false,
    },
})
