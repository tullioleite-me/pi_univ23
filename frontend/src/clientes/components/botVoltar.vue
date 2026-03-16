<script setup lang="ts">
import sairLogin from "../api/sairLogin"
</script>

<template>

	<div>
		<!-- <a href="{{ url_for('home') }}" class="button is-light mt-4"> -->
		<button class="button is-light mt-4" type="button" @click="sairLogin()">
			<span class="icon">
				<i class="fas fa-arrow-left"></i>
			</span>
			<span>Voltar para a Página Inicial</span>
		</button>
		<!-- </a> -->
	</div>
</template>