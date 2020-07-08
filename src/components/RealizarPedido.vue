<template>
  <el-dialog
    :title="`${statePedido.produto.nome}`"
    :visible.sync="realizandoPedido"
    :width="sizeWidth"
    :before-close="handleClose"
    center
  >
    <el-form
      label-width="150px"
      :inline="false"
      :model="pedido"
      status-icon
      ref="pedidoForm"
      label-position="right"
      :rules="{
        sabor_id: [
          {
            required: true,
            message: 'O sabor é obrigatorio',
            trigger: ['blur', 'change'],
          },
        ]
      }"
    >
      <el-steps :active="activeStep">
        <el-step
          title="Escolher açai"
          icon="el-icon-edit"
        ></el-step>
        <el-step
          title="Adicionais"
          icon="el-icon-circle-plus-outline"
        ></el-step>
        <el-step
          title="Detalhes"
          icon="el-icon-upload"
        ></el-step>
      </el-steps>

      <el-form-item
        label="Sabor"
        prop="sabor_id"
        v-show="activeStep === 0"
      >
        <el-select
          v-model="pedido.sabor_id"
          placeholder="Qual o sabor?"
          clearable
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
      <el-form-item
        label="Personalizaçao"
        prop="adicionais"
        v-show="activeStep === 1"
      >
        <el-select
          multiple
          filterable
          v-model="pedido.adicionais"
          placeholder="Adicional"
        >
          <el-option
            v-for="item in adicionais"
            :key="item.id"
            :label="item.nome"
            :value="item.id"
          >
            <span style="float: left">{{ item.nome }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">
              <el-badge :value="`R$ ${item.valor}, 00`" />
            </span>
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <table
      class="table table-striped"
      v-if="activeStep === 2"
    >
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Sabor</th>
          <th class="text-center">Tamanho</th>
          <th class="text-center">Preço</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">{{ statePedido.produto.nome }}</td>
          <td>{{ statePedido.sabor.nome }}</td>
          <td class="text-center">{{ statePedido.produto.tamanho }}{{ statePedido.produto.unidade }}</td>
          <td class="text-center">{{ `R$ ${statePedido.produto.valor},00` }}</td>
        </tr>
        <tr
          v-for="(adicional, index) in statePedido.adicionais"
          :key="index"
        >
          <td scope="row"><i class="el-icon-price-tag">Adicional</i></td>
          <td>{{ adicional.nome }}</td>
          <td class="text-center">-</td>
          <td class="text-center">{{ `R$ ${adicional.valor},00` }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Tempo</th>
          <td>{{ `${pedido.tempo_preparo} min` }}</td>
          <th>VTotal</th>
          <td class="text-center">{{ `R$ ${pedido.valor_total},00` }}</td>
        </tr>
      </tfoot>
    </table>

    <span
      slot="footer"
      class="dialog-footer"
      v-if="activeStep < 2"
    >
      <el-button
        style="margin-top: 12px;"
        v-if="activeStep === 1"
        @click="activeStep = 0"
      >Anterior</el-button>
      <el-button
        style="margin-top: 12px;"
        @click="calcularPedido"
        v-if="activeStep == 1"
      >OK</el-button>
      <el-button
        style="margin-top: 12px;"
        v-else
        @click="next"
      >Proximo</el-button>
    </span>
    <span
      slot="footer"
      class="dialog-footer"
      v-else
    >
      <el-button @click="handleClose">Cancel</el-button>
      <el-button
        type="primary"
        @click="handleFinish"
        icon="el-icon-upload"
      >Confirmar</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      activeStep: 0,
      sizeWidth: '40%',
      pedido: {
        produto_id: '',
        sabor_id: '',
        adicionais: []
      }
    }
  },
  props: {
    realizandoPedido: {
      required: true
    },
  },
  computed: {
    ...mapState({
      sabores: state => state.sabores.data,
      adicionais: state => state.adicionais.data,
      statePedido: state => state.pedidos.pedido
    })
  },
  mounted () {
    this.getSabores().catch(response => {
      this.$vToastify.error('Falha ao carreagar sabores')
      this.$router.replace('/')
    })

    this.getAdicionais().catch(response => {
      this.$vToastify.error('Falha ao carreagar adicionais')
      this.$router.replace('/')
    })

  },
  methods: {
    ...mapActions(['getSabores', 'getAdicionais', 'postPedidos']),
    ...mapMutations({
      selectSabor: 'SET_SELECT_SABOR',
      selectAdicionais: 'SET_SELECT_ADICIONAIS'
    }),
    calcularPedido () {
      this.pedido.produto_id = this.statePedido.produto.id
      this.pedido.valor_total = this.statePedido.produto.valor
      this.pedido.tempo_preparo = this.statePedido.produto.tempo_preparo

      this.selectSabor(this.sabores.find(i => i.id === this.pedido.sabor_id))

      if (this.pedido.adicionais.length > 0) {

        let adicionais = this.adicionais.filter(i => {
          if (this.pedido.adicionais.includes(i.id)) {

            this.pedido.valor_total += parseInt(i.valor || 0)
            this.pedido.tempo_preparo += parseInt(i.tempo_preparo || 0)
            return i
          }
        })

        this.selectAdicionais(adicionais)
      } else {
        this.selectAdicionais({})
      }

      this.activeStep = 2

      this.pedido.tempo_preparo += parseInt(this.statePedido.sabor.tempo_preparo || 0)
    },

    handleFinish () {
      this.postPedidos(this.pedido)
        .then(() => {
          this.$vToastify.success('Pedido realizado com sucesso!!')
          this.handleClose()
        })
        .catch(() => {
          this.$vToastify.error('Falha ao gravar o pedido')
        })
    },
    next () {
      this.$refs['pedidoForm'].validate((valid) => {
        if (valid) {
          if (this.activeStep++ > 2) this.activeStep = 0

          this.activeStep === 2 ? this.sizeWidth = '50%' : this.sizeWidth = '40%'
        } else {
          this.$vToastify.info({
            title: 'Ops!!',
            body: 'Selecione o sabor do seu açai'
          })
        }
      })
    },

    handleClose (done) {
      this.$refs['pedidoForm'].resetFields()
      this.activeStep = 0
      this.$parent.modalPedido = false
      this.pedido = {
        produto_id: '',
        sabor_id: '',
        adicionais: []
      }
    }
  },
}
</script>