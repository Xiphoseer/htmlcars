<template>
  <div class="calculator-wrapper">
    <div id="calculator">
      <lcars-calculator @computed="store" ref="calc" class="lcars-bg-be text-bottom-right lcars-chrome-field result">
      </lcars-calculator>
      <button @click="calc.input('7')" class="lcars-btn-center top-left-round" style="grid-area: 2 / 1 / 3 / 2">7</button>
      <button @click="calc.input('8')" class="lcars-btn-center" style="grid-area: 2 / 2 / 3 / 3">8</button>
      <button @click="calc.input('9')" class="lcars-btn-center" style="grid-area: 2 / 3 / 3 / 4">9</button>
      <button @click="calc.input('+')" class="lcars-bg-ho lcars-btn-center" style="grid-area: 2 / 4 / 3 / 5">&plus;</button>
      <button @click="calc.input('4')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 3 / 1 / 4 / 2">4</button>
      <button @click="calc.input('5')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 3 / 2 / 4 / 3">5</button>
      <button @click="calc.input('6')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 3 / 3 / 4 / 4">6</button>
      <button @click="calc.input('\u2212')" class="lcars-bg-ho lcars-btn-center" style="grid-area: 3 / 4 / 4 / 5">&minus;</button>
      <button @click="calc.input('1')" class="lcars-bg-lb lcars-btn-center bottom-left-round" style="grid-area: 4 / 1 / 5 / 2">1</button>
      <button @click="calc.input('2')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 4 / 2 / 5 / 3">2</button>
      <button @click="calc.input('3')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 4 / 3 / 5 / 4">3</button>
      <button @click="calc.input('\u00D7')" class="lcars-bg-ho lcars-btn-center" style="grid-area: 4 / 4 / 5 / 5">&times;</button>
      <button @click="calc.clear()" class="lcars-bg-rb lcars-btn-center top-left-round bottom-left-round" style="grid-area: 5 / 1 / 6 / 2">C</button>
      <button @click="calc.input('0')" class="lcars-bg-lb lcars-btn-center" style="grid-area: 5 / 2 / 6 / 3">0</button>
      <button @click="calc.eval()" class="lcars-bg-or lcars-btn-center" style="grid-area: 5 / 3 / 6 / 4">=</button>
      <button @click="calc.input('\u00F7')" class="lcars-bg-ho lcars-btn-center bottom-right-round" style="grid-area: 5 / 4 / 6 / 5">&divide;</button>
      <div class="lcars-bg-fl storagesep"></div>
      <ul class="storage">
        <li v-for="item in log" :key="item.formula" class="lcars-bg-ap" @click="calc.logback(item)">
          {{item.formula}} <span>= {{item.res}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return { log: [], calc: undefined }
    },
    mounted() {
      this.calc = this.$refs.calc;
    },
    methods: {
      store: function(data) {
        this.log.push(data);
      }
    }
  }
</script>

<style lang="scss">
  .calculator-wrapper
  {
    box-sizing: border-box;
    height: calc(100vh - 10rem);
    display: flex;
  }

  #calculator button {
    border-radius: 0;
    min-width: initial;
    padding: 1.5rem 0.6rem 0rem 0.6rem;
  }

  #calculator
  {
    margin: auto;
    min-width: 30rem;
    min-height: 15rem;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 4rem 4rem 4rem 4rem 2rem 4fr;
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
    //color: #000;
    //font-family: LCARSGTJ3;
    //text-align: right;
    //font-size: 30pt;
  }
</style>
