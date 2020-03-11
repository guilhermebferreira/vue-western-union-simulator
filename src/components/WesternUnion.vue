<template>
<v-card>
    <v-card-title>
        Western Union Simulator
    </v-card-title>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field
                            v-model="valorTotal"
                            label="Valor Total"
                            outlined

                    ></v-text-field>
                </v-col>
                <v-col>
                    {{valorInicial}}
                </v-col>
            </v-row>
        </v-container>
    </v-card-text>
</v-card>
</template>

<script>
    export default {
        name: "WesternUnion",
        data: () => ({
            valorTotal: 0,
            IOF: 0.38,
            taxaWU: 68.64,
        }),

        computed: {
            valorInicial() {
                const valor = this.porcentagemReversa(this.valorTotal - this.taxaWU, this.IOF);
                return valor;
            },
        },

        methods: {
            porcentagemReversa(valorTotal, porcentagem){
                return ((valorTotal) * 100 ) / (porcentagem + 100);
            }
        }
    }
</script>

<style scoped>

</style>
