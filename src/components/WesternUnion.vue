<template>
  <v-card>
    <v-card-title>
      Western Union Simulator
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-expand-transition>
            <v-col>
              <v-text-field
                v-model="valorTotal"
                type="Number"
                hint="Digite o valor final que deseja utilizar na transferencia, incluindo impostos e taxas"
                label="Valor total da transferência"
                prefix="R$ "
              />

            </v-col>
          </v-expand-transition>
            <v-col v-if="valorTotal>0">

              <v-text-field
                      :value="valorInicial"
                      type="Number"
                      label="Valor inicial a preencher"
                      outlined
                      readonly
                      prefix="R$ "
              />
            </v-col>
        </v-row>
        <v-row v-if="valorTotal<=taxaWU">
          <v-col color="red" >
            {{ menssagemValorMinimo }} R$ {{ taxaWU | mxFiltroFormatarMoney }}
          </v-col>
        </v-row>
        <v-slide-y-transition>
          <v-row v-if="valorTotal>0">
            <v-col>
              <v-expansion-panels
                multiple
              >
                <v-expansion-panel>
                  <v-expansion-panel-header> Resumo: </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item two-line>
                      <v-list-item-content align="right" >
                        <v-list-item-title>Valor inicial</v-list-item-title>
                        <v-list-item-subtitle><strong>R$ {{ valorInicial | mxFiltroFormatarMoney}}</strong></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content align="right" >
                        <v-list-item-title>Taxa</v-list-item-title>
                        <v-list-item-subtitle><strong>R$ {{ taxaWU | mxFiltroFormatarMoney}}</strong></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content align="right" >
                        <v-list-item-title>IOF</v-list-item-title>
                        <v-list-item-subtitle><strong>R$ {{ iofAplicado | mxFiltroFormatarMoney}}</strong></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item two-line>
                      <v-list-item-content align="right" >
                        <v-list-item-title>Total da transferência</v-list-item-title>
                        <v-list-item-subtitle><strong>R$ {{ valorTotal | mxFiltroFormatarMoney}}</strong></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-slide-y-transition>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import MxFilters from '../mixins/filters'
export default {
  name: 'WesternUnion',
  mixins: [
    MxFilters
  ],

  data: () => ({
    valorTotal: 2399.79,
    IOF: 0.38,
    valorPiso: 330,
    valorTeto: 2500,
    taxaPiso: 9.9,
    taxa: 3,
    taxaTeto: 75,
    menssagemValorMinimo: 'O valor total precisa ser maior que a taxa mínima de transferência',
    money: {
      decimal: ',',
      thousands: '.',
      prefix: ' ',
      suffix: '',
      precision: 2,
      masked: true
    },
    real: {
      decimal: ',',
      thousands: '.',
      prefix: ' R$',
      suffix: '',
      precision: 2,
      masked: true
    }
  }),

  computed: {
    valorInicial () {
      const valor = this.valorTotal / (1 + (this.taxa / 100) + (this.IOF / 100))

      if (valor > this.valorTeto) {
        return (this.valorTotal - this.taxaTeto) / (1 + (this.IOF / 100))
      }

      if (valor < this.valorPiso) {
        return (this.valorTotal - this.taxaPiso) / (1 + (this.IOF / 100))
      }

      return valor.toFixed(2)
    },
    iofAplicado () {
      const valor = (this.valorInicial * this.IOF) / 100
      return valor
    },
    taxaWU () {
      if (this.valorInicial > this.valorTeto) {
        return 75
      }
      if (this.valorInicial > this.valorPiso) {
        return (this.valorInicial * 0.03)
      }
      return 9.9
    }
  },

  methods: {
    porcentagemReversa (valorTotal, porcentagem) {
      return ((valorTotal) * 100) / (porcentagem + 100)
    }

  }
}
</script>

<style scoped>

</style>
