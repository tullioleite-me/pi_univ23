<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import { BTable } from "buefy";
import axios from "axios"
// import usarClientes from "../composables/pegarClientes"
import box_comentario from "./box_coment.vue"
import type { Cliente } from "../types"
import { useToast } from "@/composables/useToast"


const { error } = useToast()

// const pegarClientes = usarClientes()

const clientes = ref<Cliente[]>([])
const fetchCliSuccess = ref(false)
// const data = ref()
const columns = ref([
	{
		field: "nome",
		label: "Nome",
		// width: "40",
		// numeric: true,
	},
	{
		field: "email",
		label: "Email",
	},
	{
		field: "solicit",
		label: "Solicitação",
	},
])

// Reactive array for dynamic comments from API
// const comentarios = ref<{ autor: string; texto: string }[]>([])
// const fetchCmtSuccess = ref(false)

const clientesValidos = computed(() => {
	// Only proceed if fetch was successful
	if (!fetchCliSuccess.value) return [];
	// data.value = clientes.value.map(({ id, ...rest }) => rest);
	console.log("computando: ", clientes.value)
	return clientes
});

async function pegarClientes() {
	try {
		const response = await axios.get("/api/clientes")
		clientes.value = response.data
		console.log("pegando: ", clientes.value)
		fetchCliSuccess.value = true  // mark success
	} catch (error: any) {
		console.error("Erro ao buscar clientes:", error)
		error("Erro ao buscar clientes", error.message)
		fetchCliSuccess.value = false
	}
}

// Fetch comments from API
// async function pegarComentarios() {
// 	try {
// 		const response = await axios.get("/api/comentarios")
// 		comentarios.value = response.data
// 		fetchCmtSuccess.value = true  // mark success
// 	} catch (error) {
// 		console.error("Erro ao buscar comentários:", error)
// 		fetchCmtSuccess.value = false
// 	}
// }

onMounted(() => {
	pegarClientes()
	// pegarComentarios()
})

const clientesExemplo = [
	{
		"email": "teste@roseira",
		"id": 2,
		"nome": "Teste",
		"solicit": "a"
	},
	{
		"email": "comenta@foi.com",
		"id": 3,
		"nome": "abriu",
		"solicit": "aqui tive algo"
	},
	{
		"email": "novo@oi",
		"id": 4,
		"nome": "haml",
		"solicit": "projeto para ..."
	},
	{
		"email": "zezi@email.com",
		"id": 5,
		"nome": "tio z\u00e9",
		"solicit": "Queria saber mais"
	}
]

</script>

<template v-if="fetchCliSuccess && clientesValidos.length > 0">
	<div class="box has-background-grey-darker">
		<h2 class="title is-3 has-text-info">Lista de Clientes</h2>

		<!-- Render dynamic comments ONLY if fetch succeeded -->
		<!-- <template v-if="fetchCliSuccess && clientesValidos.length > 0"> -->
		<!-- <b-table> -->
		<!-- <b-table-column v-for="(c, i) in columns" :key="'column-' + i" :field="c.field"
				:label="c.label">{{  }}</b-table-column> -->

		<b-table :class="'has-background-grey-darker is-striped is-hoverable'" :data="clientesExemplo"
			:columns="columns" :row-class="(row, index) => 'has-background-grey-darker'"></b-table>
		<!-- </template> -->
		<!-- </b-table> -->
		<!-- Optional fallback message -->
		<!-- <p v-if="comentarios.length === 0" class="has-text-white-ter">
			Nenhum comentário encontrado.
		</p> -->
	</div>
</template>

<style scoped>
.b-table {
	background-color: #363636;
	/* Bulma's has-background-grey-darker equivalent */
}

.b-table .table {
	background-color: #363636;
}

.b-table tr {
	background-color: #363636 !important;
	/* Force dark rows */
	color: #dbdbdb;
	/* has-text-white-ter */
}

.b-table thead {
	background-color: #363636 !important;
	/* Force dark rows */
	color: #dbdbdb;
	/* has-text-white-ter */
}

.b-table tr:nth-child(even) {
	background-color: #4a4a4a !important;
	/* Striped effect */
}
</style>