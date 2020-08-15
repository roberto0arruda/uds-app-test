<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <produto
        v-for="item in produtos"
        :key="item.id"
        :produto="item"
        @anotar-pedido="anotarPedido(item.id)"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// @ is an alias to /src
import Produto from '@/components/Produto'

export default {
  name: 'Home',
  components: {
    Produto
  },
  created() {
    this.getProdutos().catch(() =>
      this.$vToastify.error('Falha ao carreagar produtos')
    )
  },
  methods: {
    ...mapActions(['getProdutos']),
    anotarPedido() {
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
