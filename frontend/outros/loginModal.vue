<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue";
import useBuefy from "@/composables/useBuefy"
// import{defineProps} from "vue";

const API_URL = 'http://localhost:5000/api';

const user = ref("")
const password = ref("")
const loading = ref(false)
const isModalActive = ref(true)

// const { appContext } = getCurrentInstance()!
// const buefy = appContext.config.globalProperties.$buefy

const buefy = useBuefy()!;

async function login() {
  loading.value = true

  const usern = user.value
  const passw = password.value

  if (!usern || !passw) {
    loading.value = false
    buefy.toast.open({
      message: "login or password empty",
      type: "is-danger"
    })
    return
  }

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ usern, passw })
    })

    const data = await response.json()

    if (response.ok) {
      buefy.toast.open({
        message: "Login successful!",
        type: "is-success"
      })

      isModalActive.value = false
      window.location.assign(data.rota)

    } else {
      buefy.toast.open({
        message: data.message || "Login failed",
        type: "is-danger"
      })
    }

  } catch (error) {
    buefy.toast.open({
      message: "Network error",
      type: "is-danger"
    })

    console.error(error)

  } finally {
    loading.value = false
  }
}


//  async function Login(user:string, password:string) {
// 	const instance = getCurrentInstance()
//   	instance?.proxy?.$forceUpdate()

// 	const usern = props.user
// 	const passw = props.password
// 	console.log("usern is :"+usern)
// 	// const login_incompleto = document.getElementById('loginIncompleto');
// 	// const login_erro = document.getElementById('loginErro');

// 	if (!usern || !passw) {
// 		// alert('Por favor, preencha todos os campos.');
// 		// login_incompleto.classList.remove("is-hidden");
// 		// event.preventDefault();
// 		return;
// 	}
// 	else {
// 		// login_incompleto.classList.add("is-hidden");

// 		try {
// 			const response = await fetch(`${API_URL}/login`, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify({ usern: usern, passw: passw })
// 			});


// 			const data = await response.json();

// 			if (response.ok) {
// 				// login_erro.classList.add("is-hidden");
// 				// fecharModal('modalLogin');
// 				window.location.assign(data.rota);

// 				// window.location.reload();
// 				// alert(data.mensagemok);
// 			}
// 			// else if (response.redirected) {
// 			// 	login_erro.classList.add("is-hidden");
// 			// 	fecharModal('modalLogin');
// 			// 	// window.location = response.url;
// 			// 	window.location.href = response.url;
// 			// 	// window.location.assign(response.url);

// 			// 	// window.location.reload();
// 			// 	// alert(data.mensagemok);
// 			// }
// 			else {
// 				console.error('Erro ao tentar login:', response.status);
// 				// login_erro.classList.remove("is-hidden");
// 				// alert(data.erro);
// 			}
// 		} catch (error) {
// 			console.error('Erro ao realizar login:', error);
// 			// alert(data.mensagemoff)
// 		}
// 	}
// }

// export default {
// 	// props: {
//     //     user: {},
//     //     password: {},
//     // },
//   data() {
//     return {
//       isModalActive: true,
//       user: '',
//       password: '',
//       loading: false
//     };
//   },
//   methods: {
//     async login() {
// 	this.loading = true;
// 	console.log("user is :"+this.user)
// 	const usern = this.user
// 	const passw = this.password
// 	console.log("usern is :"+usern)
// 	// const login_incompleto = document.getElementById('loginIncompleto');
// 	// const login_erro = document.getElementById('loginErro');

// 	if (!usern || !passw) {
// 		this.loading = false;
// 		this.$buefy.toast.open({ message: "login or password empty", type: 'is-danger' });
// 		// alert('Por favor, preencha todos os campos.');
// 		// login_incompleto.classList.remove("is-hidden");
// 		// event.preventDefault();
// 		return;
// 	}
// 	else {
// 		// login_incompleto.classList.add("is-hidden");

// 		try {
// 			const response = await fetch(`${API_URL}/login`, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify({ usern: usern, passw: passw })
// 			});


// 			const data = await response.json();

// 			if (response.ok) {
// 				// login_erro.classList.add("is-hidden");
// 				// fecharModal('modalLogin');
// 				this.$buefy.toast.open({ message: 'Login successful!', type: 'is-success' });
//           		// this.$emit('login-success', data);
//          		this.isModalActive = false;
// 				window.location.assign(data.rota);

// 				// window.location.reload();
// 				// alert(data.mensagemok);
// 			}
// 			// else if (response.redirected) {
// 			// 	login_erro.classList.add("is-hidden");
// 			// 	fecharModal('modalLogin');
// 			// 	// window.location = response.url;
// 			// 	window.location.href = response.url;
// 			// 	// window.location.assign(response.url);

// 			// 	// window.location.reload();
// 			// 	// alert(data.mensagemok);
// 			// }
// 			else {
// 				 this.$buefy.toast.open({ message: data.message || 'Login failed', type: 'is-danger' });
// 				console.error('Erro ao tentar login:', response.status);
// 				// login_erro.classList.remove("is-hidden");
// 				// alert(data.erro);
// 			}
// 		} catch (error) {
// 			this.$buefy.toast.open({ message: 'Network error', type: 'is-danger' });
// 			console.error('Erro ao realizar login:', error);
// 			// alert(data.mensagemoff)
// 		}finally {
//         	this.loading = false;
//       }
// 	}

// 	}
// }
// }

</script>

<template>
  <section>
    <!-- <form action=""> -->
    <form @submit.prevent="login">
      <!-- <b-modal v-model="isModalActive" has-modal-card>
		 <template #default> -->
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <b-field label="Usuário">
            <b-input type="user" v-model="user" placeholder="Seu nome de usuário" required>
            </b-input>
          </b-field>

          <b-field label="Password">
            <b-input type="password" v-model="password" password-reveal placeholder="Seu password" required>
            </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Close" @click="$emit('close')" />
          <b-button label="Login" type="is-primary" native-type="submit" :loading="loading" />
        </footer>
      </div>
      <!-- </template>
</b-modal> -->
    </form>
  </section>

</template>