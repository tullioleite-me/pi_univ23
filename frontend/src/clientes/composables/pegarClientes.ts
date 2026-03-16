import { ref } from "vue"
import clientes from "../api/clientes"
import { useToast } from "@/composables/useToast"
import type { Cliente } from "../types"

export default function usarClientes() {

	const { success, error } = useToast()

	async function pegarClientes(): Promise<Cliente[] | undefined> {
		let data;
		try {
			data = await clientes()
		} catch (err: any) {
			error(err.message)
		}

		return data;
	}

	return pegarClientes;
}