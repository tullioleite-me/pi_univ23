<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import { BTable } from "buefy";
import axios from "axios"
// import usarClientes from "../composables/pegarClientes"
import { OTable, OTableColumn } from "@oruga-ui/oruga-next";
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
		width: "40",
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
	// console.log("computando: ", clientes.value)
	return clientes.value
});

async function pegarClientes() {
	try {
		const response = await axios.get("/api/clientes")
		clientes.value = response.data
		// console.log("pegando: ", clientes.value)
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
		<!-- <o-table class="table has-background-grey-darker" :data="clientesExemplo">
			<o-table-column field="nome" label="Nome" width="170" sortable />
			<o-table-column field="email" label="Email" width="200" position="centered" sortable />
			<o-table-column field="solicit" label="Solicitação" position="centered" sortable />

		</o-table> -->

		<o-table class="table has-background-grey-darker" :data="clientesValidos">
			<o-table-column field="nome" label="Nome" width="170" sortable />

			<!-- <o-table-column field="email" label="Email" width="200" sortable header-class="has-text-centered" /> -->
			<o-table-column field="email" label="Email" width="200" sortable header-class="has-text-centered"
				cell-class="has-text-centered" />


			<!-- <o-table-column id="solicit" field="solicit" label="Solicitação" sortable header-class="has-text-centered"
				cell-class="has-text-centered" /> -->
			<!-- <o-table-column field="solicit" label="Solicitação" sortable :class="'has-text-centered'" v-slot="{ row }">
				<div class="has-text-centered">
					{{ row.solicit }}</div>
			</o-table-column> -->

			<o-table-column field="solicit" sortable>
				<template #header>
					<div class="has-text-centered">Solicitação</div>
				</template>

				<template #default="{ row }">
					<div class="has-text-centered">
						{{ row.solicit }}
					</div>
				</template>
			</o-table-column>
		</o-table>

		<!--<o-table :data="clientesExemplo">
			<o-table-column v-for="col in columns" :key="col.field" :field="col.field" :label="col.label"
				:width="col.width" sortable>
				<template #default="{ row }">
					{{ row[col.field] }}
				</template>
			</o-table-column>
		</o-table>

		<o-table :data="clientesExemplo">
			<o-table-column v-for="col in columns" :key="col.field" :field="col.field" :label="col.label"
				:width="col.width" sortable :header-class="'has-text-centered'" :cell-class="'has-text-centered'">
				<template #default="{ row }">
					<span :class="'has-text-centered'">
						{{ row[col.field] }}
					</span>
				</template>
			</o-table-column>
		</o-table> -->

	</div>
</template>

<style scoped>
/* :deep(.o-table td:nth-child(3)) {
	text-align: center;
}

:deep(.o-table th:nth-child(3)) {
	text-align: center;
} */
</style>