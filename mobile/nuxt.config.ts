import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        ['@pinia/nuxt']
    ],
    css: [
        // SCSS file in the project
        '@/assets/css/main.scss'
    ]
})
