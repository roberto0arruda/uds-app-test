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
        <produto
          v-for="item in produtos"
          :key="item.id"
          :produto="item"
          @anotar-pedido="anotarPedido(item.id)"
        />
      </div>
      <!-- /.row -->
    </div>
    <!-- /.col-lg-9 -->

    <realizar-pedido :realizando-pedido="modalPedido" />

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Produto from '@/components/Produto'
import RealizarPedido from '@/components/RealizarPedido'
export default {
  data () {
    return {
      modalPedido: false,
    }
  },
  components: {
    Produto,
    RealizarPedido
  },
  created () {
    this.getProdutos().catch(response => this.$vToastify.error('Falha ao carreagar produtos'))
  },
  methods: {
    ...mapActions(['getProdutos']),
    anotarPedido (id) {
      this.modalPedido = true
    }
  },
  computed: {
    ...mapState({
      produtos: state => state.produtos.data
    })
  }
}
</script>
