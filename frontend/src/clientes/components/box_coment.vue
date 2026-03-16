<script setup lang="ts">
defineProps<{ autor: string; texto: string }>()

</script>

<template>
	<div class="box has-background-dark">
		<p class="has-text-success">{{ autor }}</p>
		<p class="has-text-white-ter">{{ texto }}</p>
	</div>
</template>