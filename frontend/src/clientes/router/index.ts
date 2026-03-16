import { createRouter, createWebHistory } from 'vue-router'
import clientes from '../views/clientes.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// 		{
		//     path: "/",
		//     redirect: "/clientes"
		//   },
		// {
		// 	path: "/",
		// 	component: { template: "<div></div>" }
		// },
		{
			path: '/clientes',
			name: 'clientes',
			component: clientes,
			// alias: '/clientes',
		},
	],
})

export default router
