<template>
  <header>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-vueacai">
      <div class="container">
        <router-link
          :to="{name: 'home'}"
          tag="a"
          class="navbar-brand"
        >
          <img
            src="@/assets/imgs/logo-vueacai.png"
            alt="VueAcai"
            class="logo"
          />
        </router-link>
        <div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link
                :to="{name: 'pedidos'}"
                class="nav-link"
              >
                <i class="fas fa-file-alt"></i> ({{ qtdPedidos }})
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      qtdPedidos: 'qtdPedidos'
    })
  },
  created () {
    this.getPedidos().catch(response => this.$vToastify.error('Falha ao carreagar pedidos'))
  },
  methods: {
    ...mapActions(['getPedidos'])
  },
}
</script>
