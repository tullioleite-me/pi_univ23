import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import API_URL from "@/api/api_url"

type LoginForm = {
  usern: string
  passw: string
}

type OrcamentoForm = {
  nome: string
  email: string
  solicit: string
}

export function useLandingPage() {
  const isMenuOpen = ref(false)
  const isBackToTopVisible = ref(false)
  const isLoginModalOpen = ref(false)
  const isOrcamentoModalOpen = ref(false)
  const isVideoModalOpen = ref(false)
  const isSubmittingLogin = ref(false)
  const isSubmittingOrcamento = ref(false)
  const videoElement = ref<HTMLVideoElement | null>(null)

  const loginForm = ref<LoginForm>({
    usern: "",
    passw: "",
  })

  const orcamentoForm = ref<OrcamentoForm>({
    nome: "",
    email: "",
    solicit: "",
  })

  const loginError = ref("")
  const orcamentoError = ref("")

  const hasLoginError = computed(() => loginError.value.length > 0)
  const hasOrcamentoError = computed(() => orcamentoError.value.length > 0)

  function resetLoginForm() {
    loginForm.value = {
      usern: "",
      passw: "",
    }
    loginError.value = ""
  }

  function resetOrcamentoForm() {
    orcamentoForm.value = {
      nome: "",
      email: "",
      solicit: "",
    }
    orcamentoError.value = ""
  }

  function openLoginModal() {
    resetLoginForm()
    isLoginModalOpen.value = true
    closeMenu()
  }

  function closeLoginModal() {
    isLoginModalOpen.value = false
    resetLoginForm()
  }

  function openOrcamentoModal() {
    orcamentoError.value = ""
    isOrcamentoModalOpen.value = true
    closeMenu()
  }

  function closeOrcamentoModal() {
    isOrcamentoModalOpen.value = false
    resetOrcamentoForm()
  }

  function openVideoModal() {
    isVideoModalOpen.value = true
    window.requestAnimationFrame(() => {
      videoElement.value?.play().catch(() => {
        // Alguns navegadores podem bloquear autoplay sem interacao adicional.
      })
    })
  }

  function closeVideoModal() {
    if (videoElement.value) {
      videoElement.value.pause()
      videoElement.value.currentTime = 0
    }

    isVideoModalOpen.value = false
  }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  function closeMenu() {
    isMenuOpen.value = false
  }

  function updateBackToTopButton() {
    isBackToTopVisible.value = window.scrollY > 320
  }

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  function goToSection(sectionId: string) {
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    closeMenu()
  }

  async function submitLogin() {
    const usern = loginForm.value.usern.trim()
    const passw = loginForm.value.passw.trim()

    if (!usern || !passw) {
      loginError.value = "Por favor, preencha todos os campos."
      return
    }

    isSubmittingLogin.value = true
    loginError.value = ""

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usern, passw }),
      })

      const data = await response.json()

      if (!response.ok) {
        loginError.value = "Usuário ou senha incorretos."
        return
      }

      closeLoginModal()
      window.location.assign(data.rota)
    } catch (error) {
      console.error("Erro ao realizar login:", error)
      loginError.value = "Não foi possível realizar o login agora."
    } finally {
      isSubmittingLogin.value = false
    }
  }

  async function submitOrcamento() {
    const nome = orcamentoForm.value.nome.trim()
    const email = orcamentoForm.value.email.trim()
    const solicit = orcamentoForm.value.solicit.trim()

    if (!nome || !email || !solicit) {
      orcamentoError.value = "Por favor, preencha todos os campos."
      return
    }

    isSubmittingOrcamento.value = true
    orcamentoError.value = ""

    try {
      const response = await fetch(`${API_URL}/orca`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, solicit }),
      })

      if (!response.ok) {
        orcamentoError.value = "Não foi possível enviar sua solicitação."
        return
      }

      closeOrcamentoModal()
    } catch (error) {
      console.error("Erro ao enviar orçamento:", error)
      orcamentoError.value = "Não foi possível enviar sua solicitação."
    } finally {
      isSubmittingOrcamento.value = false
    }
  }

  function handleResize() {
    if (window.innerWidth > 560) {
      closeMenu()
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeVideoModal()
      closeMenu()
    }
  }

  onMounted(() => {
    updateBackToTopButton()
    window.addEventListener("scroll", updateBackToTopButton)
    window.addEventListener("resize", handleResize)
    document.addEventListener("keydown", handleKeydown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", updateBackToTopButton)
    window.removeEventListener("resize", handleResize)
    document.removeEventListener("keydown", handleKeydown)
  })

  return {
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
    closeMenu,
    closeOrcamentoModal,
    closeVideoModal,
    goToSection,
    submitLogin,
    submitOrcamento,
    toggleMenu,
  }
}
