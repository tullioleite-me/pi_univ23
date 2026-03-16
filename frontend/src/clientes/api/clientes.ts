import API_URL from "@/api/api_url"
import type { Cliente } from "../types"

// export default async function pegarClientes(): Promise<Cliente[]> {
// 	let data;
// 	fetch(`${API_URL}/clientes`)
// 		.then(response => {
// 			if (!response.ok) {
// 				throw new Error(`HTTP error! status: ${response.status}`);
// 			}
// 			data = response.json();
// 			// console.log(data);
// 		})
// 		.catch(error => {
// 			console.error('Problema ao recuperar comentários:', error);
// 		});

// 	return data;

// }

export default async function clientes(): Promise<Cliente[]> {
	const response = await fetch(`${API_URL}/clientes`)

	const data = await response.json()

	if (!response.ok) {
		throw new Error("Problema ao recuperar comentários: " + data.message || "Problema ao recuperar comentários.")
	}

	return data

}


// [
//   {
//     "email": "teste@roseira",
//     "id": 2,
//     "nome": "Teste",
//     "solicit": "a"
//   },
//   {
//     "email": "comenta@foi.com",
//     "id": 3,
//     "nome": "abriu",
//     "solicit": "aqui tive algo"
//   },
//   {
//     "email": "novo@oi",
//     "id": 4,
//     "nome": "haml",
//     "solicit": "projeto para ..."
//   },
//   {
//     "email": "zezi@email.com",
//     "id": 5,
//     "nome": "tio z\u00e9",
//     "solicit": "Queria saber mais"
//   }
// ]
