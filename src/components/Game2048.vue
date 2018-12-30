<template>
  <div class="lcars-body lcars-page lcars-chrome-ho lcars-fixed">
    <div class="lcars-chrome-horizontal lcars-topbar">
      <h1>LCARS</h1>
      <router-link to="/" class="lcars-btn">Home</router-link>
      <a class="lcars-btn lcars-btn-pi">Reset</a>
      <a class="lcars-btn lcars-btn-rb">Help</a>
      <span class="lcars-bar-space"></span>
    </div>
    <div id="wrapper-2048" class="lcars-grid-content">
      <div id="game-2048">
        <template v-for="y in [0,1,2,3]">
          <template v-for="x in [0,1,2,3]">
            <game-2048-tile v-if="tiles[y][x] > 0" :num="tiles[y][x]" :pos="{x: x, y: y}"/>
          </template>
        </template>
      </div>
    </div>
    <div class="lcars-bottombar lcars-chrome-horizontal">

    </div>
  </div>
</template>

<script>
import Game2048Tile from '@/components/Game2048Tile.vue'

export default {
  name: 'game-2048',
  components: {
    Game2048Tile
  },
  created: function () {
    window.addEventListener('keydown', this.onKeyDown);
    this.tiles[0][0] = 2;
    this.tiles[0][1] = 4;
  },
  beforeDestroy: function () {
    window.removeEventListener('keydown', this.onKeyDown);
  },
  methods: {
    onKeyDown: function (event) {
      let key = event.keyCode;
      if (37 <= key && key <= 40) {
        let dict = {37: this.moveLeft, 38: this.moveUp, 39: this.moveRight, 40: this.moveDown};
        dict[key]();
      }
    },
    moveLeft: function () {
      alert("Left");
    },
    moveUp: function () {
      alert("Up");
    },
    moveDown: function () {
      alert("Down");
    },
    moveRight: function() {
      this.tiles.forEach(function(row) {
        if (row[3]) {
          if (row[2]) {
            if (row[3] == row[2]) {
              row[3] = row[3] * 2;
              if (row[1]) {
                if (row[0]) {
                  if (row[0] == row[1]) {
                    row[2] = row[1] * 2;
                    delete row[1];
                  } else {
                    row[2] = row[1];
                    row[1] = row[0];
                  }
                  delete row[0];
                } else {
                  row[2] = row[1];
                  delete row[1];
                }
              } else {
                if (row[0]) {
                  row[2] = row[0];
                  delete row[0];
                }
              }
            } else {
              if (row[0]) {
                if (row[1]) {
                  if (row[1] == row[0]) {
                    row[1] = row[1] * 2;
                    delete row[0];
                  } // else row[1] != row[0] ==> nothing
                } else { // !row[1]
                  row[1] = row[0];
                  delete row[0];
                }
              } // else maybe row[1] ==> nothing
            }
          } else { // !row[2]
            if (row[1]) {
              if (row[0]) {
                if (row[0] == row[1]) {
                  row[2] = row[1] * 2;
                  delete row[1];
                } else { // row[1] != row[0]
                  row[2] = row[1];
                  row[1] = row[0];
                }
                delete row[0];
              } else { // !row[0]
                row[2] = row[1];
                delete row[1];
              }
            } else { // !row[1]
              if (row[0]) {
                row[2] = row[0];
                delete row[0];
              }
            }
          }
        } else { // !row[3]
          if (row[2]) {
            if (row[1]) {
              if (row[1] == row[2]) {
                row[3] = row[2] * 2;
                if (row[0]) {
                  row[2] = row[0];
                  delete row[0];
                  delete row[1];
                } // else !row[0] ==> nothing
              } else {
                row[3] = row[2];
                if (row[0]) {
                  if (row[0] == row[1]) {
                    row[2] = row[1] * 2;
                    delete row[1];
                  } else {
                    row[2] = row[1];
                    row[1] = row[0];
                  }
                  delete row[0];
                } else { // !row[0]
                  row[2] = row[1];
                  delete row[1];
                }
              }
            } else { // !row[1]
              if (row[0]) {
                if (row[0] == row[2]) {
                  row[3] = row[2] * 2;
                  delete row[2];
                } else {
                  row[3] = row[2];
                  row[2] = row[0];
                }
                delete row[0];
              } else { // !row[0]
                row[3] = row[2];
                delete row[2];
              }
            }
          } else { // !row[2]
            if (row[1]) {
              if (row[0]) {
                if (row[1] == row[0]) {
                  row[3] = row[1] * 2;
                } else {
                  row[3] = row[1];
                  row[2] = row[0];
                }
                delete row[0];
              } else {
                row[3] = row[1];
              }
              delete row[1];
            } else { // !row[1]
              if (row[0]) {
                row[3] = row[0];
                delete row[0];
              } // else row = {} ==> nothing
            }
          }
        }
      });
    }
  },
  data: function () {
    return {
      tiles: [{}, {}, {}, {}]
    }
  }
}
</script>

<style lang="scss">
  #wrapper-2048
  {
    box-sizing: border-box;
    height: calc(100vh - 8rem);
    display: flex;
  }

  #game-2048
  {
    margin: auto;
    min-width: 20rem;
    min-height: 20rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.3rem;
  }
</style>
