import API_URL from "@/api/api_url"

export default async function sairLogin() {

	try {
		const response = await fetch(`${API_URL}/deslogin`, {
			// const response = await fetch('/api/deslogin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			// body: JSON.stringify({ msg: "gogo" })
		});
		const data = await response.json();
		if (response.ok) {
			// console.log("saindo")
			window.location = data.rota;
		}
	} catch (error) {
		console.error('Erro ao sair da area logada:', error);
		// alert(data.mensagemoff)
	}
	return true;
}