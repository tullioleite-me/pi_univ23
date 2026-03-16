import { getCurrentInstance } from "vue"

export function useToast() {
	const instance = getCurrentInstance()!
	const buefy = instance?.appContext.config.globalProperties.$buefy

	function success(message: string) {
		buefy.toast.open({ message, type: "is-success" })
	}

	function error(message: string) {
		buefy.toast.open({ message, type: "is-danger" })
	}

	return { success, error }
}