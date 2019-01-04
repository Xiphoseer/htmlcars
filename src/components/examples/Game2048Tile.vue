<template>
  <div class="game-2048-tile" :class="gridPos" :data-num="num">{{num}}</div>
</template>

<script>
  export default {
    name: 'game-2048-tile',
    props: ['num', 'pos'],
    computed: {
      gridPos: function() {
        let key = "pos-" + this.pos.x + "-" + this.pos.y;
        var pos = {};
        pos[key] = true;
        return pos;
      }
    }
  }
</script>

<style lang="scss">
  $game-2048-tile-colors: (
    2: map-get($lcars-colors, lb),
    4: map-get($lcars-colors, rb),
    8: map-get($lcars-colors, fl),
    16: map-get($lcars-colors, bg),
    32: map-get($lcars-colors, be),
    64: map-get($lcars-colors, ap),
    128: map-get($lcars-colors, pi),
    256: map-get($lcars-colors, lp),
    1024: map-get($lcars-colors, ho),
    2048: map-get($lcars-colors, or)
  );

  .game-2048-tile {
    font-size: 30pt;
    font-family: LCARSGTJ3;
    text-align: center;
    line-height: 200%;
    transition: grid-template-rows 5s, grid-template-columns 5s;

    @each $num, $color in $game-2048-tile-colors {
      &[data-num="#{$num}"] {
        background-color: $color;
      }
    }

    @for $x from 0 through 3 {
      @for $y from 0 through 3 {
        &.pos-#{$x}-#{$y} {
          grid-area: ($x+1) #{"/"} ($y+1) #{"/"} ($x+2) #{"/"} ($y+2);
        }
      }
    }
  }
</style>
