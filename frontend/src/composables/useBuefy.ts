import { getCurrentInstance } from "vue"

export default function useBuefy() {
	const instance = getCurrentInstance()
	return instance?.appContext.config.globalProperties.$buefy
}