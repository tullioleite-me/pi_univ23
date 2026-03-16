<script setup lang="ts">
import { ref } from "vue"
import { useAuth } from "@/composables/useAuth"

const user = ref("")
const password = ref("")

const { login, loading } = useAuth()

function submit() {
  login(user.value, password.value)
}
</script>

<template>

  <section>
    <form @submit.prevent="submit">

      <div class="modal-card" style="width:auto">

        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>

        <section class="modal-card-body">

          <b-field label="Usuário">
            <b-input type="text" v-model="user" placeholder="Seu nome de usuário" required />
          </b-field>

          <b-field label="Password">
            <b-input type="password" v-model="password" password-reveal placeholder="Seu password" required />
          </b-field>

          <b-checkbox>Remember me</b-checkbox>

        </section>

        <footer class="modal-card-foot">

          <b-button label="Close" @click="$emit('close')" />
          <b-button class="move-right" label="Login" type="is-primary" native-type="submit" :loading="loading" />

        </footer>

      </div>

    </form>
  </section>
</template>

<style>
.move-right {
  margin-left: auto;
}
</style>