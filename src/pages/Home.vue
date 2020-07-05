<template>
  <div class="row">
    <div class="col-lg-3">
      <h1 class="my-4 title-tenant">Açai no Ponto</h1>
      <div class="list-group">
        <a
          href="#"
          class="list-group-item active"
        >Açais Personalizados</a>
      </div>
    </div>
    <!-- /.col-lg-3 -->

    <div class="col-lg-9">
      <div class="row my-4">

        <div class="col-lg-5 col-md-6 mb-4">
          <div class="card h-100">
            <router-link :to="{ name: 'catalogo' }">
              <img
                class="card-img-top"
                src="@/assets/imgs/acai-frozen.jpeg"
                alt
              />
            </router-link>
            <div class="card-body">
              <h4 class="card-title">Açai na Tijela</h4>
              <table class="table">
                <thead>
                  <tr>
                    <th>Pequeno</th>
                    <th>Médio</th>
                    <th>Grande</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>R$ 10,00</td>
                    <td>R$ 13,00</td>
                    <td>R$ 15,00</td>
                  </tr>
                </tbody>
              </table>
              <p class="card-text">O melhor e mais delicioso açai do Amazonas</p>
            </div>
            <div class="card-footer card-footer-custom">
              <router-link :to="{ name: 'catalogo' }">
                Monte o açai ideal
                <i class="fas fa-cart-plus"></i>
              </router-link>
            </div>
          </div>
        </div>

      </div>
      <!-- /.row -->
    </div>
    <!-- /.col-lg-9 -->
  </div>
  <!-- /.row -->
</template>
