<template>
  <header>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-vueacai">
      <div class="container">
        <router-link :to="{name: 'home'}" tag="a" class="navbar-brand">
          <img src="@/assets/imgs/logo-vueacai.png" alt="VueAcai" class="logo" />
        </router-link>
        <div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fas fa-file"></i> (2)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
