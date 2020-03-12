export default {
  filters: {
    mxFiltroFormatarMoney (value) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    mxFiltroFormatarPorcentagem (value) {
      const val = (value / 1).toFixed(3).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.').concat('%')
    }
  }
}
