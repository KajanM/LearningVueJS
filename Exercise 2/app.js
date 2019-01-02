new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alert: function() {
      alert('Alert!');
    },
    onKeyDown: function(event) {
      this.value = event.target.value;
    }
  }
});
