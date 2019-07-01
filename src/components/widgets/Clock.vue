<template>
  <span class="lcars-font">{{time}}</span>
</template>

<script lang="js">
  export default {
    name: 'lcars-clock',
    data() {
      return {
        time: "--:--:--",
        timerId: ""
      }
    },
    mounted: function() {
      this.tick();
      this.timerId = setInterval(this.tick.bind(this), 1000);
    },
    beforeDestroy: function() {
      clearInterval(this.timerId);
    },
    methods: {
      tick: function() {
        let cd = new Date();

        let sec = ("00" + cd.getSeconds()).slice(-2);
        let min = ("00" + cd.getMinutes()).slice(-2);
        let hor = ("00" + cd.getHours()).slice(-2);

        this.time = hor + ":" + min + ":" + sec;
      }
    }
  }
</script>
