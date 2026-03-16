<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";

const isModalActive = ref(false);

const user = ref("");
const password = ref("");

const { login, loading } = useAuth();

// Submit handler
function submit() {
	login(user.value, password.value);
}
</script>

<template>
	<section>
		<!-- Button to open modal -->
		<div class="buttons">
			<b-button type="is-light" @click="isModalActive = true">Login</b-button>
		</div>

		<!-- Modal component -->
		<b-modal v-model="isModalActive" has-modal-card trap-focus custom-class="custom-class custom-class-2">
			<form @submit.prevent="submit">
				<div class="modal-card" style="width:auto">

					<header class="modal-card-head">
						<p class="modal-card-title">Login</p>
						<button type="button" class="delete" @click="isModalActive = false"></button>
					</header>

					<section class="modal-card-body">
						<b-field label="Usuário">
							<b-input type="text" v-model="user" placeholder="Seu nome de usuário" required />
						</b-field>

						<b-field label="Password">
							<b-input type="password" v-model="password" password-reveal placeholder="Seu password"
								required />
						</b-field>

						<b-checkbox>Remember me</b-checkbox>
					</section>

					<footer class="modal-card-foot">
						<b-button @click="isModalActive = false">Fechar</b-button>
						<b-button class="move-right" type="is-primary" native-type="submit"
							:loading="loading">Login</b-button>
					</footer>

				</div>
			</form>
		</b-modal>
	</section>
</template>

<style scoped>
.move-right {
	margin-left: auto;
}
</style>