<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from "vue";
import { BBreadcrumb, BBreadcrumbItem } from "buefy";
import { BNavbar, BNavbarDropdown, BNavbarItem } from "buefy";

</script>

<template>
  <main>
	<nav class="navbar is-dark" role="navigation" aria-label="dropdown navigation">
            <div class="navbar-brand">
                <a class="navbar-item not-affect" >
                    <!-- <img :src="logo" alt="Book Reads" width="112" height="28"> -->
                     <RouterLink to="/">Início</RouterLink>
                    <!-- <span><i class="mdi mdi-24px"></i> <RouterLink to="/">Início</RouterLink></span> -->
                </a>
                <!-- <div class="navbar-burger burger"  >
                    <span></span>
                    <span></span>
                    <span></span>
                </div> -->
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                      <RouterLink to="/sobre">Sobre</RouterLink>
                        <!-- <span><i class="mdi mdi-24px"></i> <RouterLink to="/sobre">Sobre</RouterLink></span> -->
                    </a>
                    <!-- <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link"><span><i class="mdi mdi-24px mdi-view-list"></i> Books</span></a>
                        <div class="navbar-dropdown is-hidden-touch">
                            <a class="navbar-item" href=""><span><i class="mdi mdi-24px mdi-star"></i> Favorites</span></a>
                        </div>
                    </div> -->
                </div>
                <div class="navbar-end">
                    <a  class="navbar-item">
                        <button class="button is-success is-right" onclick="abrirModal('modalLogin')">Login</button>
                    </a>
                    <!-- <router-link class="navbar-item" to="/register">Signup!</router-link> -->
                    <!-- <div class="navbar-item ">
                        <div class="field is-grouped">
                            <p class="control">
                                <router-link class="button is-outlined" to="/add-book">
                                    <span>Add New Book</span>
                                </router-link>
                            </p>
                        </div>
                    </div> -->
                </div>
            </div>
        </nav>
  </main>
</template>