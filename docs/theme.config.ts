import { defineTheme } from '@nuxt-themes/config'

export default defineTheme({
  title: 'Nuxt Content',
  description: 'Write pages in markdown, use Vue components and enjoy the power of Nuxt with a blazing fast developer experience.',
  layout: 'docs',
  url: 'https://content.nuxtjs.org',
  debug: false,
  socials: {
    twitter: '@nuxt_js',
    github: 'nuxt/content'
  },
  github: {
    root: 'docs/content',
    edit: true,
    releases: true
  },
  cover: {
    src: '/cover.jpg',
    alt: 'Content made easy for Vue developers'
  },
  aside: {
    level: 1,
    filter: [
      '/v1',
      '/content-v1',
      '/fr',
      '/ja',
      '/ru'
    ]
  },
  header: {
    title: false,
    logo: true
  },
  footer: {
    credits: {
      icon: 'IconDocus',
      text: 'Powered by Docus',
      href: 'https://docus.com'
    },
    icons: [
      {
        label: 'NuxtJS',
        href: 'https://nuxtjs.org',
        component: 'IconNuxt'
      },
      {
        label: 'Vue Telescope',
        href: 'https://vuetelescope.com',
        component: 'IconVueTelescope'
      }
    ]
  }
})
