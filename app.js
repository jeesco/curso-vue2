new Vue({
  el: '#app',

  data ()  {
    return {
      name: 'Bitcoin!',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: -10,

      color: 'f4f4f4',
      
      price: 8400,

      pricesWithDays: [
        { day: 'lunes', value: 8400 },
        { day: 'martes', value: 7900 },
        { day: 'miercoles', value: 8200 },
        { day: 'jueves', value: 9000 },
        { day: 'viernes', value: 9400 },
        { day: 'sabado', value: 10000 },
        { day: 'domingo', value: 10200 },
      ],

      showPrices: false,
    }
  },

  computed: {
    title () {
      return `${this.name} - ${this.symbol}`
    }
  },

  watch: {
    showPrices (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },

  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices

      this.color = this.color.split('').reverse().join('')
    }
  }
})