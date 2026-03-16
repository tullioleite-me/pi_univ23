import { ref } from "vue"
import { loginRequest } from "../api/auth"
import { useToast } from "@/composables/useToast"

export function useAuth() {

	const loading = ref(false)
	const { success, error } = useToast()

	async function login(user: string, password: string) {

		if (!user || !password) {
			error("login ou password vazios")
			return
		}

		loading.value = true

		try {
			const data = await loginRequest(user, password)

			success("Login bem sucedido!")

			window.location.assign(data.rota)

		} catch (err: any) {

			error(err.message)

		} finally {

			loading.value = false

		}
	}

	return {
		loading,
		login
	}
}