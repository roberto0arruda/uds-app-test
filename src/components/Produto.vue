<template>
  <div
    class="col-lg-4 col-md-6 mb-4"
    @click="selectProduto(produto); $emit('anotar-pedido')"
  >
    <div class="card h-100">
      <a href="#">
        <img
          class="card-img-top"
          src="@/assets/imgs/acai.png"
          alt="acai"
        />
      </a>
      <div class="card-body">
        <h4 class="card-title">
          <p>{{ produto.nome }}</p>
        </h4>
        <h5>
          {{ produto.descricao }}
          <el-tag>{{ `R$ ${produto.valor},00` }}</el-tag>
        </h5>
      </div>
      <div class="card-footer card-footer-custom">
        <a href="#">
          Personalizar Açai
          <i class="fas fa-cart-plus"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    produto: { require: true }
  },
  methods: {
    ...mapMutations({
      selectProduto: 'SET_SELECT_PRODUTO'
    })

  },

}
</script>