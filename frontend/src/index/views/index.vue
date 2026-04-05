<script setup lang="ts">
import { useLandingPage } from "@/composables/useLandingPage"
import logoImage from "@/assets/img/apple-touch-icon.png"
import person1Image from "@/assets/img/person_1.webp"
import person2Image from "@/assets/img/person_2.webp"
import person3Image from "@/assets/img/person_3.webp"
import person4Image from "@/assets/img/person_4.webp"
import person5Image from "@/assets/img/person_5.webp"
import tourVideo from "@/assets/img/virtual_clothing_store_tour_video.mp4"

type ServiceCard = {
  title: string
  items: string[]
  icon: string
}

type Testimonial = {
  author: string
  role: string
  text: string
  image: string
}

const services: ServiceCard[] = [
  {
    title: "Presença Digital Profissional",
    items: [
      "Criação de Sites Profissionais",
      "Landing Pages de Alta Conversão",
      "SEO (Otimização para Google)",
      "Google Meu Negócio",
    ],
    icon: "video",
  },
  {
    title: "Marketing e Crescimento Online",
    items: [
      "Gestão de Redes Sociais",
      "Estratégias de Marketing Digital",
      "Campanhas Publicitárias Online",
    ],
    icon: "growth",
  },
  {
    title: "Automação e Tecnologia",
    items: [
      "Criação de Chatbots",
      "Integrações e automações digitais",
    ],
    icon: "tech",
  },
  {
    title: "Experiências Digitais Imersivas",
    items: [
      "Criação de Tour Virtual 360°",
    ],
    icon: "immersive",
  },
]

const testimonials: Testimonial[] = [
  {
    author: "Rose Alves",
    role: "Cabeleireira",
    text: "Serviço rápido e eficiente!",
    image: person1Image,
  },
  {
    author: "Aldo Marcus",
    role: "Marceneiro",
    text: "Meu caso era complicado, mas eles resolveram.",
    image: person2Image,
  },
  {
    author: "Carla Mendes",
    role: "Clínica Estética (fictício)",
    text: "Depois do novo site e das campanhas digitais, começamos a receber muito mais contatos diariamente.",
    image: person3Image,
  },
  {
    author: "Ricardo Nunes",
    role: "Corretor Imobiliário (fictício)",
    text: "O tour virtual fez toda diferença nas apresentações dos imóveis. Passou muito mais profissionalismo.",
    image: person4Image,
  },
  {
    author: "Fernanda Lopes",
    role: "Loja de Decoração (fictício)",
    text: "A presença digital da minha empresa mudou completamente. Hoje meus clientes chegam já confiando no trabalho.",
    image: person5Image,
  },
]

const {
  hasLoginError,
  hasOrcamentoError,
  isBackToTopVisible,
  isLoginModalOpen,
  isMenuOpen,
  isOrcamentoModalOpen,
  isSubmittingLogin,
  isSubmittingOrcamento,
  isVideoModalOpen,
  loginError,
  loginForm,
  openLoginModal,
  openOrcamentoModal,
  openVideoModal,
  orcamentoError,
  orcamentoForm,
  videoElement,
  backToTop,
  closeLoginModal,
  closeOrcamentoModal,
  closeVideoModal,
  goToSection,
  submitLogin,
  submitOrcamento,
  toggleMenu,
} = useLandingPage()
</script>

<template>
  <main id="topo" class="site-body landing-page">
    <section class="landing-header section">
      <div class="container">
        <div class="header-shell">
          <a class="brand-mark" href="#topo" @click.prevent="goToSection('topo')">
            ED 360° Soluções Digitais
          </a>

          <button
            class="menu-toggle"
            :class="{ 'is-active': isMenuOpen }"
            type="button"
            aria-label="Abrir menu"
            :aria-expanded="isMenuOpen"
            aria-controls="headerNav"
            @click="toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            id="headerNav"
            class="header-nav"
            :class="{ 'is-open': isMenuOpen }"
            aria-label="Navegação principal"
          >
            <a href="#servicos" @click.prevent="goToSection('servicos')">Nossos Serviços</a>
            <a href="#sobre" @click.prevent="goToSection('sobre')">Sobre Nós</a>
            <a href="#depoimentos" @click.prevent="goToSection('depoimentos')">Depoimentos</a>
            <button class="button is-dark header-login" type="button" @click="openLoginModal">
              Login
            </button>
          </nav>
        </div>
      </div>
    </section>

    <section class="hero-panel section">
      <div class="container">
        <div class="columns is-vcentered is-variable is-8">
          <div class="column is-5-desktop">
            <span class="eyebrow">Conheça</span>
            <h1 class="hero-title">ED 360° Soluções Digitais</h1>
            <h3 class="hero-subtitle">Transformamos sua presença digital em resultados reais.</h3>
            <p class="hero-subtitle">
              No cenário digital atual, não basta apenas estar online, é preciso se destacar.
              A ED 360° Soluções Digitais te ajuda a fortalecer sua presença digital através de
              <span>estratégias inteligentes, design profissional e soluções tecnológicas</span>
              que atraem, engajam e convertem clientes.
            </p>
            <div class="hero-actions">
              <button class="button is-dark action-primary" type="button" @click="openOrcamentoModal">
                Solicite um Orçamento
              </button>
              <a class="button is-light action-secondary" href="#sobre" @click.prevent="goToSection('sobre')">
                Sobre Nós
              </a>
            </div>
          </div>

          <div class="column is-7-desktop">
            <div class="hero-visual">
              <div class="hero-scene"></div>
              <div class="floating-card">
                <img :src="logoImage" alt="ED 360° Soluções Digitais" />
                <div>
                  <strong>ED 360° Soluções Digitais</strong>
                  <p>estratégias inteligentes, design profissional e soluções tecnológicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="servicos" class="section content-section">
      <div class="container">
        <div class="section-heading">
          <h2 class="section-title">Nossos Serviços</h2>
          <p class="section-copy">
            Oferecemos soluções completas para empresas que desejam crescer e se destacar
            no ambiente digital.
          </p>
        </div>

        <div class="columns is-multiline service-grid">
          <div
            v-for="service in services"
            :key="service.title"
            class="column is-6-tablet is-3-desktop"
          >
            <article class="service-card">
              <div class="service-icon" :data-icon="service.icon">
                <svg v-if="service.icon === 'video'" viewBox="0 0 256 256" aria-hidden="true">
                  <path
                    d="M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Zm-68,56a8,8,0,0,0-3.41-6.55l-40-28A8,8,0,0,0,108,92v56a8,8,0,0,0,12.59,6.55l40-28A8,8,0,0,0,164,120Z"
                  ></path>
                </svg>
                <svg v-else-if="service.icon === 'growth'" viewBox="0 0 256 256" aria-hidden="true">
                  <path
                    d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,192H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v76.69l34.34-34.35a8,8,0,0,1,11.32,0L128,132.69,172.69,88H144a8,8,0,0,1,0-16h48a8,8,0,0,1,8,8v48a8,8,0,0,1-16,0V99.31l-50.34,50.35a8,8,0,0,1-11.32,0L104,131.31l-40,40V176H200a8,8,0,0,1,0,16Z"
                  ></path>
                </svg>
                <svg v-else-if="service.icon === 'tech'" viewBox="0 0 256 256" aria-hidden="true">
                  <path
                    d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48ZM172,96a12,12,0,1,1-12,12A12,12,0,0,1,172,96ZM96,184H80a16,16,0,0,1,0-32H96ZM84,120a12,12,0,1,1,12-12A12,12,0,0,1,84,120Zm60,64H112V152h32Zm32,0H160V152h16a16,16,0,0,1,0,32Z"
                  ></path>
                </svg>
                <svg v-else-if="service.icon === 'immersive'" viewBox="0 0 256 256" aria-hidden="true">
                  <path
                    d="M241.75,51.32a15.87,15.87,0,0,0-13.86-2.77l-3.48.94C205.61,54.56,170.61,64,128,64S50.39,54.56,31.59,49.49l-3.48-.94A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16,16.22,16.22,0,0,0,4.18-.55l3.18-.86C50.13,201.49,85.17,192,128,192s77.87,9.49,96.69,14.59l3.18.86A16,16,0,0,0,248,192V64A15.9,15.9,0,0,0,241.75,51.32ZM204,96a12,12,0,1,1-12,12A12,12,0,0,1,204,96Zm-76,80c-45,0-82.72,10.23-100.87,15.14L24,192v-39.3l46.34-46.35a8,8,0,0,1,11.32,0L152.28,177C144.49,176.35,136.37,176,128,176Zm100.87,15.14a448.7,448.7,0,0,0-51-11.2l-35.26-35.26L157,130.34a8,8,0,0,1,11.31,0l60.89,60.88Z"
                  ></path>
                </svg>
              </div>
              <h3>{{ service.title }}</h3>
              <ul>
                <li v-for="item in service.items" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="sobre" class="section about-section">
      <div class="container">
        <div class="columns is-vcentered is-variable is-7">
          <div class="column is-5-desktop">
            <div class="about-visual">
              <div class="about-photo"></div>
              <div class="about-quote">
                Impulsionamos o crescimento do seu negócio com estratégia digital focada em
                visibilidade e resultados.
              </div>
            </div>
          </div>

          <div class="column is-7-desktop">
            <div class="section-heading">
              <span class="eyebrow eyebrow-light">Sobre Nós</span>
              <h2 class="section-title">
                Somos uma equipe especializada em marketing digital, desenvolvimento web e
                experiências digitais interativas.
              </h2>
              <p class="section-about">
                Nosso objetivo é ajudar empresas a crescer de forma consistente no ambiente online,
                oferecendo soluções personalizadas e orientadas a resultados. Unimos estratégia,
                tecnologia e criatividade para construir marcas mais fortes, aumentar a
                visibilidade e gerar novas oportunidades de negócio.
              </p>
              <p class="section-about">
                Cuidamos de toda a jornada digital do seu negócio: da criação do site à gestão de
                conteúdo e posicionamento online, permitindo que você foque no crescimento da sua
                empresa enquanto nós cuidamos da sua presença digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section immersive-section">
      <div class="container">
        <div class="columns is-vcentered is-variable is-7">
          <div class="column is-5-desktop">
            <button class="immersive-media" type="button" @click="openVideoModal">
              <div class="media-stage">
                <div class="play-button"></div>
              </div>
            </button>
          </div>

          <div class="column is-7-desktop">
            <div class="immersive-copy">
              <span class="eyebrow eyebrow-dark">Tour Virtual 360°</span>
              <h2>Apresente sua empresa de forma inovadora e imersiva</h2>
              <p>
                O Tour Virtual 360° é uma experiência digital interativa que permite que clientes
                explorem seu espaço como se estivessem fisicamente presentes nele.
              </p>
              <p>
                Utilizando imagens panorâmicas de alta qualidade, o usuário pode navegar pelo
                ambiente, visualizar detalhes e conhecer sua empresa de maneira dinâmica e envolvente.
              </p>
              <div class="immersive-tags">
                <span>Turismo e hotelaria</span>
                <span>Imobiliário</span>
                <span>Comércio e serviços</span>
                <span>Educação e eventos</span>
              </div>
              <p>
                Além de aumentar o interesse do público, o Tour Virtual fortalece a credibilidade
                da empresa e melhora a experiência do cliente antes mesmo do primeiro contato presencial.
              </p>
              <p>
                Nosso objetivo é levar o seu negócio para o ambiente digital com realismo,
                profissionalismo e impacto visual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="depoimentos" class="section testimonial-section">
      <div class="container">
        <div class="section-heading section-heading-centered">
          <h2 class="section-title">Depoimentos</h2>
          <p class="section-copy">
            Resultados reais, contados por quem já transformou sua presença digital conosco.
          </p>
        </div>

        <div class="columns is-multiline testimonial-grid">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.author"
            class="column is-6-tablet"
            :class="testimonial.author === 'Rose Alves' || testimonial.author === 'Aldo Marcus' || testimonial.author === 'Carla Mendes' ? 'is-4-desktop' : 'is-6-desktop'"
          >
            <article class="testimonial-card">
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-author">
                <img class="avatar-chip" :src="testimonial.image" :alt="testimonial.author" />
                <div>
                  <strong>{{ testimonial.author }}</strong>
                  <p>{{ testimonial.role }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-panel">
          <h2>Pronto para crescer?</h2>
          <p class="section-copy">
            Vamos conversar sobre como fortalecer sua presença digital e gerar mais oportunidades
            para o seu negócio.
          </p>
          <button class="button is-light cta-button" type="button" @click="openOrcamentoModal">
            Solicite um Orçamento
          </button>
          <p class="section-copy">Entre em contato e receba uma proposta personalizada.</p>
        </div>
      </div>
    </section>

    <button
      class="back-to-top"
      :class="{ 'is-visible': isBackToTopVisible }"
      type="button"
      aria-label="Voltar ao topo"
      @click="backToTop"
    >
      <span aria-hidden="true">^</span>
    </button>

    <footer class="site-footer">
      <div class="container">
        <div class="footer-shell">
          <div>
            <p class="footer-brand">ED 360° Soluções Digitais</p>
          </div>
          <div class="footer-links">
            <a href="#servicos" @click.prevent="goToSection('servicos')">Nossos Serviços</a>
            <a href="#sobre" @click.prevent="goToSection('sobre')">Sobre Nós</a>
            <a href="#depoimentos" @click.prevent="goToSection('depoimentos')">Depoimentos</a>
          </div>
        </div>
      </div>
    </footer>

    <div class="modal" :class="{ 'is-active': isLoginModalOpen }">
      <div class="modal-background" @click="closeLoginModal"></div>
      <div class="modal-content">
        <div class="box modal-box">
          <h2 class="title is-4">Acesso ao Painel</h2>

          <form @submit.prevent="submitLogin">
            <div class="field">
              <label class="label" for="usern">Usuário</label>
              <div class="control">
                <input
                  id="usern"
                  v-model="loginForm.usern"
                  class="input"
                  type="text"
                  name="username"
                  placeholder="Seu usuário"
                  autocomplete="username"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label" for="passw">Senha</label>
              <div class="control">
                <input
                  id="passw"
                  v-model="loginForm.passw"
                  class="input"
                  type="password"
                  name="password"
                  placeholder="Sua senha"
                  autocomplete="current-password"
                  required
                />
              </div>
            </div>

            <div class="field is-grouped modal-actions">
              <div class="control">
                <button class="button is-dark" type="submit" :disabled="isSubmittingLogin">
                  Entrar
                </button>
              </div>
              <div class="control">
                <button class="button is-light" type="button" @click="closeLoginModal">
                  Cancelar
                </button>
              </div>
            </div>

            <p v-if="hasLoginError" class="modal-error">{{ loginError }}</p>
          </form>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeLoginModal"></button>
    </div>

    <div class="modal" :class="{ 'is-active': isOrcamentoModalOpen }">
      <div class="modal-background" @click="closeOrcamentoModal"></div>
      <div class="modal-content">
        <div class="box modal-box">
          <h2 class="title is-4">Solicitação de Orçamento</h2>

          <form @submit.prevent="submitOrcamento">
            <div class="field">
              <label class="label" for="nome">Seu Nome</label>
              <div class="control">
                <input
                  id="nome"
                  v-model="orcamentoForm.nome"
                  class="input"
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  autocomplete="name"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label" for="email">Seu Email</label>
              <div class="control">
                <input
                  id="email"
                  v-model="orcamentoForm.email"
                  class="input"
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  autocomplete="email"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label" for="solicit">Detalhes do Projeto</label>
              <div class="control">
                <textarea
                  id="solicit"
                  v-model="orcamentoForm.solicit"
                  class="textarea"
                  name="solicit"
                  autocomplete="off"
                  placeholder="Descreva como podemos te ajudar"
                  required
                ></textarea>
              </div>
            </div>

            <div class="field is-grouped modal-actions">
              <div class="control">
                <button class="button is-dark" type="submit" :disabled="isSubmittingOrcamento">
                  Enviar
                </button>
              </div>
              <div class="control">
                <button class="button is-light" type="button" @click="closeOrcamentoModal">
                  Cancelar
                </button>
              </div>
            </div>

            <p v-if="hasOrcamentoError" class="modal-error">{{ orcamentoError }}</p>
          </form>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeOrcamentoModal"></button>
    </div>

    <div class="modal video-modal" :class="{ 'is-active': isVideoModalOpen }">
      <div class="modal-background" @click="closeVideoModal"></div>
      <div class="modal-content video-modal-content">
        <button class="video-modal-close" type="button" aria-label="Fechar video" @click="closeVideoModal">
          x
        </button>
        <div class="video-frame-shell">
          <video ref="videoElement" class="video-player" controls playsinline preload="metadata">
            <source :src="tourVideo" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>
      </div>
    </div>
  </main>
</template>
