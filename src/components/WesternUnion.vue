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
                label="Valor total da transferência"
                outlined
                validate-on-blur
                :rules="[rules.valorMinimo]"
              />
            </v-col>
          </v-expand-transition>
            <v-col v-if="valorTotal>0">
              {{ valorInicial }}
            </v-col>
        </v-row>
        <v-slide-y-transition>
          <v-row v-if="valorTotal>0">
            <v-col>
              <v-expansion-panels
                v-model="panel"
                :readonly="readonly"
                multiple
              >
                <v-expansion-panel>
                  <v-expansion-panel-header> Valor: <strong>{{ valorInicial }}</strong> </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title>Two-line item</v-list-item-title>
                        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
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
export default {
  name: 'WesternUnion',
  data: () => ({
    valorTotal: 0,
    IOF: 0.38,
    taxaWU: 68.64,
    rules: {
      valorMinimo: value => value > this.taxaWU || 'O valor precisa ser maior que a taxa de transferência'
    }
  }),

  computed: {
    valorInicial () {
      const valor = this.porcentagemReversa(this.valorTotal - this.taxaWU, this.IOF)
      return valor
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
