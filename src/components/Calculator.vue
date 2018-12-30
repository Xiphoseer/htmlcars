<template>
  <div class="lcars-body lcars-page lcars-chrome-voyager lcars-fixed">
    <div class="lcars-chrome-horizontal lcars-topbar">
      <h1>LCARS</h1>
      <router-link to="/" class="lcars-btn">Home</router-link>
      <a class="lcars-btn lcars-btn-pi">Reset</a>
      <a class="lcars-btn lcars-btn-rb">Help</a>
      <span class="lcars-bar-space"></span>
    </div>
    <div class="calculator-wrapper lcars-grid-content">
      <div id="calculator">
        <div class="lcars-bg-be text-bottom-right lcars-chrome-field result">
          {{formula}}
        </div>

        <button @click="input('7')" class="lcars-btn-center top-left-round" style="grid-area: 2 / 1 / 3 / 2">7</button>
        <button @click="input('8')" class="lcars-btn-center" style="grid-area: 2 / 2 / 3 / 3">8</button>
        <button @click="input('9')" class="lcars-btn-center" style="grid-area: 2 / 3 / 3 / 4">9</button>
        <button @click="input('+')" class="lcars-bg-ho lcars-btn-center" style="grid-area: 2 / 4 / 3 / 5">&plus;</button>

        <button @click="input('4')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 3 / 1 / 4 / 2">4</button>
        <button @click="input('5')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 3 / 2 / 4 / 3">5</button>
        <button @click="input('6')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 3 / 3 / 4 / 4">6</button>
        <button @click="input('\u2212')" class="lcars-bg-ho lcars-btn-center" style="grid-area: 3 / 4 / 4 / 5">&minus;</button>

        <button @click="input('1')" class="lcars-bg-lb lcars-btn-center bottom-left-round" style="grid-area: 4 / 1 / 5 / 2">1</button>
        <button @click="input('2')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 4 / 2 / 5 / 3">2</button>
        <button @click="input('3')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 4 / 3 / 5 / 4">3</button>
        <button @click="input('\u00D7')" class="lcars-bg-ho lcars-btn-center" style="grid-area: 4 / 4 / 5 / 5">&times;</button>

        <button @click="clear" class="lcars-bg-rb lcars-btn-center top-left-round bottom-left-round" style="grid-area: 5 / 1 / 6 / 2">C</button>
        <button @click="input('0')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 5 / 2 / 6 / 3">0</button>
        <button @click="eval" class="lcars-bg-or lcars-btn-center" style="grid-area: 5 / 3 / 6 / 4">=</button>
        <button @click="input('\u00F7')" class="lcars-bg-ho lcars-btn-center bottom-right-round" style="grid-area: 5 / 4 / 6 / 5">&divide;</button>

        <div class="lcars-bg-fl storagesep"></div>
        <ul class="storage">
          <li v-for="item in log" :key="item.formula" class="lcars-bg-ap" @click="logback(item)">
            {{item.formula}} <span>= {{item.res}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return { formula: "", log: [] }
    },
    methods: {
      input: function (str) {
        this.formula += str;
      },
      clear: function () {
        this.formula = "";
      },
      eval: function() {
        let fr = this.formula;
        var eq = fr;
        eq = eq.replace('\u00F7', '/');
        eq = eq.replace('\u00D7', '*');
        eq = eq.replace('\u2212', '-');

        let res = eval(eq);
        this.log.push({formula: fr, res});
        this.formula = String(res);
      },
      logback: function (item) {
        this.formula = item.formula;
      }
    }
  }
</script>

<style type="text/css">
  .calculator-wrapper
  {
    box-sizing: border-box;
    height: calc(100vh - 5rem);
    display: flex;
  }

  #calculator button {
    border-radius: 0;
  }

  #calculator
  {
    margin: auto;
    min-width: 30rem;
    min-height: 15rem;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1rem 4fr;
    grid-gap: 0.3rem;
  }

  #calculator .result
  {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding-right: 1rem;
    grid-area: 1 / 1 / 2 / 5;
    font-size: 30pt;
  }

  #calculator .storagesep
  {
    border-radius: 1rem;
    grid-area: 1 / 5 / 6 / 6;
  }

  #calculator .storage
  {
    grid-area: 1 / 6 / 6 / 7;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  #calculator .storage li
  {
    font-family: LCARSGTJ3;
    border-radius: 1rem;
    margin-bottom: 0.2rem;
    padding: 0 0.5rem;
    color: #000;
    font-size: 14pt;
  }

  #calculator .storage li span
  {
    float: right;
    min-width: 2rem;
  }

  #calculator button.top-left-round
  {
    border-top-left-radius: 1rem;
  }

  #calculator button.bottom-left-round
  {
    border-bottom-left-radius: 1rem;
  }

  #calculator button.bottom-right-round
  {
    border-bottom-right-radius: 1rem;
  }

  .lcars-btn-center
  {
    color: #000;
    font-family: LCARSGTJ3;
    text-align: center;
    font-size: 30pt;
  }
</style>
