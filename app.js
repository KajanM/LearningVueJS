new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter: 0
  },
  watch: {
    counter: function (value) {
      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000)
    }
  },
  computed: {
    output: function () {
      console.log('Computed');
      return this.counter > 5 ? 'Greater than 5' : 'Equal or smaller than 5';
    }
  },
  methods: {
    result: function () {
      console.log('Method');
      return this.counter > 5 ? 'Greater than 5' : 'Equal or smaller than 5';
    }
  }
})