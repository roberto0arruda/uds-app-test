<template>
  <el-table
    :data="pedidos"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <pre>{{ props.row }}</pre>
      </template>
    </el-table-column>
    <el-table-column
      label="Data do pedido"
      prop="created_at"
    >
    </el-table-column>
    <el-table-column
      label="Produto"
      prop="produto.nome"
    >
    </el-table-column>
    <el-table-column
      label="Sabor"
      prop="sabor.nome"
    >
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      pedidos: state => state.pedidos.data
    })
  },
}
</script>