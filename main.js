//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const { createApp } = Vue
createApp({
    data() {
      return {
        title: 'Sono un bel titolo',
        logo: "https://picsum.photos/200/300"
      }
    }
  }).mount('#app')