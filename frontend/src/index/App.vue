<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import navbar from "./components/navbar.vue"

</script>

<template>

  <!-- <head> -->
  <!-- <meta charset="UTF-8"> -->
  <!-- <script src="/static/index.js"></script> -->
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <!-- <title>ED Marketing</title> -->
  <!-- <link rel="stylesheet" type="text/css" href="/bulma.min.css"> -->
  <!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"> -->
  <!-- <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"> -->
  <!-- <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"> -->
  <!-- <link rel="manifest" href="/site.webmanifest"> -->
  <!-- </head> -->

  <header>

    <div class="wrapper">
      <!-- <nav>
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/sobre">Sobre</RouterLink>
      </nav> -->
      <navbar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
