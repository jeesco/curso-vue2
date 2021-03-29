new Vue({
  el: '#app',

  data ()  {
    return {
      name: 'Bitcoin!',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: -10,
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],

      pricesWithDays: [
        { day: 'lunes', value: 8400 },
        { day: 'martes', value: 7900 },
        { day: 'miercoles', value: 8200 },
        { day: 'jueves', value: 9000 },
        { day: 'viernes', value: 9400 },
        { day: 'sabado', value: 10000 },
        { day: 'domingo', value: 10200 },
      ]
    }
  }
})