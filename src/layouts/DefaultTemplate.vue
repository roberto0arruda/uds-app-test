<template>
  <div>
    <preloader-component />

    <header-component />

    <!-- Page Content -->
    <div class="container container-body">
      <router-view></router-view>
    </div>
    <!-- /Page Content -->

    <footer-component />
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import HeaderComponent from "./_partial/Header"
import FooterComponent from "./_partial/Footer"

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }

}
</script>

<style scoped>
@import url("../assets/css/acais.css");
@import url("../assets/css/reset.css");
</style>
