var app = new Vue({
  el: '#app',
  data: {
    message: '👋 Welcome to Craps Łite'
  }
})

Vue.component('dice', {
  data: function() {
    return {
      d1: 0,
      d2: 0,
      rollVal: 0
    }
  },
  methods: {
    roll: function() {
      this.d1 = Math.floor(1 + Math.random() * 6)
      this.d2 = Math.floor(1 + Math.random() * 6)
      this.rollVal = this.d1 + this.d2sda
    }
  },
  template:
    '<div><h1>{{d1 + d2}}</h1><h3>{{ d1 }}</h3><h3>{{ d2 }}</h3><button v-on:click="roll">Roll Dice</button></div>'
})

new Vue({ el: '#dice-component' })
