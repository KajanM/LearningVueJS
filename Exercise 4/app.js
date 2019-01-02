new Vue({
  el: '#exercise',
  data: {
    toggle: false,
    blueviolet: 'blueviolet',
    cool: 'cool',
    color: '',
    className: '',
    showClass: ''
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(() => {
        vm.toggle = !vm.toggle;
      }, 1000);
    }
  },
  computed: {
    divClass: function () {
      return this.toggle ? 'highlight' : 'shrink';
    }
  }
});
