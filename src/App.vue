<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="@/assets/imgs/logo-vueacai.png"
            width="100"
          />
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn :to="{ name: 'pedidos' }" text>
        <v-icon>mdi-shopping</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="primary" app>
      <v-btn
        href="https://github.com/roberto0arruda/uds-app-test/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
        <span class="mr-2">Latest Release</span>
        <span class="white--text">Developer by: Roberto Arruda</span>
      </v-btn>

      <v-spacer></v-spacer>

      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <preloader-component />
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
