<template>
  <span class="lcars-font">{{stardate}}</span>
</template>

<script lang="js">
  const SECONDS_PER_DAY = 86400;
  const UNITS_PER_DAY = (1000 / 365);

  export default {
    name: 'lcars-stardate',
    data() {
      return {
        stardate: "-----.-",
        timerId: ""
      }
    },
    mounted: function() {
      this.tick();
      this.timerId = setInterval(this.tick.bind(this), 10000);
    },
    beforeDestroy: function() {
      clearInterval(this.timerId);
    },
    methods: {
      tick: function() {
        let cd = new Date();

        let Year = cd.getFullYear();

        let yearDif = Math.abs(Year - 1987);

        var SDYear = 40500 + (yearDif * 1000);
        let YearStart = new Date(Year,0,1,0,0,0);

        let NowTime = cd.getTime() / 1000;
        let YearStartTime = YearStart.getTime() / 1000;
        let Days = (NowTime - YearStartTime) / SECONDS_PER_DAY;

        var SDDays = (Days * UNITS_PER_DAY);
        let StarDate = Math.floor((SDYear + SDDays) * 10 + .5) / 10

        this.stardate = StarDate;
      }
    }
  }
</script>
