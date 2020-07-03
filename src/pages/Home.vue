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
            <a href="#">
              <img
                class="card-img-top"
                src="@/assets/imgs/acai.png"
                alt
              />
            </a>
            <div class="card-body">
              <h4 class="card-title">
                <p @click="dialogVisible = true">Açai na Tijela</p>
              </h4>
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
            <div
              class="card-footer card-footer-custom"
              @click="dialogVisible = true"
            >
              <a href="#">
                Monte o açai ideal
                <i class="fas fa-cart-plus"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
      <!-- /.row -->
    </div>
    <!-- /.col-lg-9 -->
    <el-dialog
      title="Escolher Açai"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <span>Realizar Pedido</span>
      <el-form label-width="120px">
        <el-form-item label="Tamanho">
          <el-select
            v-model="pedido.tamanho"
            placeholder="Qual tamanho?"
          >
            <el-option
              v-for="item in tamanhos"
              :key="item.id"
              :label="`${item.nome} (${item.medida})`"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Sabor">
          <el-select
            v-model="pedido.sabor"
            placeholder="Qual o sabor?"
          >
            <el-option
              v-for="item in sabores"
              :key="item.id"
              :label="item.nome"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >Confirm</el-button>
      </span>
    </el-dialog>
  </div>
  <!-- /.row -->
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      pedido: {
        tamanho: '',
        sabor: ''
      },
      tamanhos: [
        {
          id: 1,
          nome: 'pequeno',
          medida: '300ml'
        },
        {
          id: 2,
          nome: 'médio',
          medida: '500ml'
        },
        {
          id: 3,
          nome: 'grande',
          medida: '700ml'
        }
      ],
      sabores: [
        {
          id: 1,
          nome: 'morango'
        },
        {
          id: 2,
          nome: 'banana'
        },
        {
          id: 3,
          nome: 'kiwi'
        }
      ]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }

}
</script>