new Vue({
  el: '#app',
  data: {
    attachRed: false,
    color: ''
  },
  methods: {
    result: function() {
      console.log('Method');
      return this.counter > 5 ? 'Greater than 5' : 'Equal or smaller than 5';
    }
  },
  computed: {
    divClasses: function() {
      return { red: this.attachRed, blue: !this.attachRed };
    }
  }
});
