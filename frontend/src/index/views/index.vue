<script setup lang="ts">
import comentarios from "../components/comentarios.vue"
let email = ""
let password = ""
</script>

<template>
    <main class="has-background-dark">
        <section class="hero is-dark is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <img src="/apple-touch-icon.png" alt="imagem pequena" style="width: 100px; height: auto;"
                        class="mb-3">
                    <h1 class="title is-2"> ED 360° SOLUÇOES DIGITAIS </h1>
                    <p class="subtitle is-4 has-text-grey-light">Transforme sua presença digital e conquiste mais
                        clientes.
                    </p>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <p class="has-text-justified">
                                No mundo digital de hoje, ter um site profissional e uma forte presença no Instagram é
                                essencial para o sucesso.
                                Nós te ajudamos a criar a estratégia perfeita, desde o design do seu site até o conteúdo
                                que
                                engaja seu público,
                                para que você possa focar no que realmente importa: o crescimento do seu negócio.
                            </p>
                        </div>
                    </div>
                    <br>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <div class="container has-background-grey-darker has-text-white-ter">
                                <h2 class="title is-4 has-text-info mb-3">Nossos Serviços</h2>
                                <p class="has-text-justified">
                                    Projetamos e desenvolvemos serviços de alta qualidade para ajudar sua empresa a se
                                    destacar no mercado digital, conforme as necessidades de seu negocio.
                                </p>
                                <br>
                                <h3 class="title is-6 mb-2"> Serviços oferecidos:</h3>
                                <p>• Criação de Tour Virtual 360º</p>
                                <p>• Google Meu Negócio</p>
                                <p>• Criação de Sites Profissionais</p>
                                <p>• Criação de Chatbots</p>
                                <p>• Criação de Landing Pages</p>
                                <p>• Marketing Digital</p>
                                <p>• Gestão de Redes Sociais </p>
                                <p>• SEO (Otimização para Motores de Busca)</p>
                                <p>• Campanhas Publicitárias Online </p>

                            </div>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <comentarios />
                        </div>
                    </div>
                    <button class="button is-info m-3" onclick="abrirModal('modalOrcamento')">Solicite um
                        Orçamento!</button>

                </div>
            </div>

        </section>


    </main>
</template>