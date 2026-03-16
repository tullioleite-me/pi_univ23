// const API_URL = "http://localhost:5000/api"
import API_URL from "@/api/api_url"

export async function loginRequest(usern: string, passw: string) {
	const response = await fetch(`${API_URL}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ usern, passw })
	})

	const data = await response.json()

	if (!response.ok) {
		throw new Error(data.message || "Login falhou")
	}

	return data
}