// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/ui', '@nuxt/image', '@vueuse/nuxt', '@nuxtjs/supabase'],
	devtools: { enabled: true },
	supabase: {
		// url: '', // see .env
		// key: '', // see .env
		redirect: false,
		redirectOptions: {
			login: '/login',
			callback: '/confirm',
			exclude: [],
			cookieRedirect: false,
		},
	},
	colorMode: {
		preference: 'light',
	},
});
