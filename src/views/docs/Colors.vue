<template>
  <section>
    <h1>Colors</h1>
    <p>
      A basic, empty LCARS console is black. We call this a
      <code>screen</code>.
      A screen can be filled with text, displayed in white, green or orange, as
      it has been for old CRT computer screens.
    </p>
    <p>
      On a screen, the recognizable features of a LCARS console are the buttons,
      controls, schematics, toggles, headings and more. We call them collectively
      the <code>chrome</code> of the console. The chrome is
      mostly orange or beige in TNG, very colorful in Voyager and blue-green in
      the newer films.
    </p>
    <p>
      This framework is intended to be mostly color independent, but provides
      some predefined colors as well as utility classes to use a specific theme
      or color.
    </p>
    <h2>CSS custom properties</h2>
    <p>
      By default, the framework uses CSS custom variables to cascade the
      currently selected chrome and screen color through an application. The
      <code>:root</code> pseudo-class is used to set some
      generic defaults.
    </p>
    <table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">CSS property</th>
          <th>Default Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>chrome background</td>
          <td><code>--lcars-chrome-bg</code></td>
          <td class="text-center lcars-bg-default-chrome-bg" style="color: #000;"><code>#999999</code></td>
        </tr>
        <tr>
          <td>chrome text color</td>
          <td><code>--lcars-chrome-fg</code></td>
          <td class="text-center lcars-bg-default-chrome-fg" style="color: #fff;"><code>#000000</code></td>
        </tr>
        <tr>
          <td>screen background</td>
          <td><code>--lcars-screen-bg</code></td>
          <td class="text-center lcars-bg-default-screen-bg" style="color: #fff;"><code>#000000</code></td>
        </tr>
        <tr>
          <td>screen text color</td>
          <td><code>--lcars-screen-fg</code></td>
          <td class="text-center lcars-bg-default-screen-fg" style="color: #000;"><code>#ffffff</code></td>
        </tr>
      </tbody>
    </table>
    <h2>Reference</h2>
    <p>
      While there are many colors appropriate for an LCARS interface, a realistic
      interface will only ever use a palette of less than 6. This section
      presents some predefined color that I found around the web. The sources
      are annotated at the bottom right of the palette tables.
    </p>
    <p>
      An LCARS Design guideline (which will not be linked here for its use of
      agressive language) specifies this:
      <ol>
        <li>Use no more main colors than are required to present the semantics of the interface.</li>
        <li>Use up to five shades or tints of these colors when necessary.</li>
        <li>Use no more than five colors in total</li>
      </ol>
    </p>
    <color-display title="Colorindex Voyager" source="gtjlcars.de" :colors="voyagerColors" />
    <color-display title="Colorindex USS" source="lcarssdk.org" :colors="ussColors" />
    <color-display title="PADDs Template" source="lcars.padd.online.fr" :colors="paddColors" />
    <color-palette title="Full Palette" source="Something" :colors="allColors" />
  </section>
</template>

<script>
  import ColorDisplay from '@/components/ColorDisplay.vue';
  import ColorPalette from '@/components/ColorPalette.vue';

  export default {
    name: 'docs-colors',
    components: {
      ColorDisplay, ColorPalette
    },
    data: function() {
      return {
        voyagerColors: [
          {name: 'Blue-Gray', key: 'BG', code: '#9999cc'},
          {name: 'Lightblue', key: 'LB', code: '#9999ff'},
          {name: 'Lilac', key: 'FL', code: '#cc99cc'},

          {name: 'Pink', key: 'PI', code: '#cc6699'},
          {name: 'Light-Pink', key: 'LP', code: '#ff99cc'},

          {name: 'Russet', key: 'RB', code: '#cc6666'},
          {name: 'Apricot', key: 'AP', code: '#ff9966'},

          {name: 'Beige', key: 'BE', code: '#ffcc99'},
          {name: 'Light-Orange', key: 'HO', code: '#f7c64a'},
          {name: 'Orange', key: 'OR', code: '#ff9900'}
        ],
        ussColors: [
          {name: 'Blue-1', key: 'b1', code: '#99ccff'},
          {name: 'Blue-2', key: 'b2', code: '#3399cc'},
          {name: 'Blue-3', key: 'b3', code: '#006699'},
          {name: 'Blue-4', key: 'b4', code: '#003366'},

          {name: 'Green-1', key: 'g1', code: '#ccddbb'},
          {name: 'Green-2', key: 'g2', code: '#00cc99'},
          {name: 'Green-3', key: 'g3', code: '#009999'},
          {name: 'Green-4', key: 'g4', code: '#006666'}
        ],
        paddColors: [
          {name: 'golden-tanoi',      key: 'p1', code: '#fc6'},
          {name: 'cold-gray',         key: 'p2', code: '#999'},
          {name: 'chestnut-rose',     key: 'p3', code: '#c66'},
          {name: 'lilac',             key: 'p4', code: '#c9c'},
          {name: 'anakiwa',           key: 'p5', code: '#9cf'},
          {name: 'atomic-tangerine',  key: 'p6', code: '#f90'}
        ],
        allColors: [
          { name: 'black',               key: 'black',               font: '#ddd', code: '#000'},
          { name: 'navy-blue',           key: 'navy-blue',           font: '#ddd', code: '#008'},
          { name: 'pure-blue',           key: 'pure-blue',           font: '#000', code: '#00f'},
          { name: 'blue',                key: 'blue',                font: '#000', code: '#01e'},
          { name: 'dark-midnight-blue',  key: 'dark-midnight-blue',  font: '#ddd', code: '#036'},
          { name: 'very-dark-cyan',      key: 'very-dark-cyan',      font: '#000', code: '#066'},
          { name: 'baltic-blue',         key: 'baltic-blue',         font: '#000', code: '#069'},
          { name: 'bahama-blue',         key: 'bahama-blue',         font: '#000', code: '#069'},
          { name: 'dark-cyan',           key: 'dark-cyan',           font: '#000', code: '#099'},
          { name: 'carribean-green',     key: 'carribean-green',     font: '#000', code: '#0c9'},
          { name: 'pure-green',          key: 'pure-green',          font: '#000', code: '#0f0'},
          { name: 'monochrome-green-2',  key: 'monochrome-green-2',  font: '#000', code: '#0f3'},
          { name: 'monochrome-green-3',  key: 'monochrome-green-3',  font: '#000', code: '#0f6'},
          { name: 'monochrome-black',    key: 'monochrome-black',    font: '#ddd', code: '#282828'},
          { name: 'very-dark-red',       key: 'very-dark-red',       font: '#ddd', code: '#300'},
          { name: 'azure-blue',          key: 'azure-blue',          font: '#ddd', code: '#369'},
          { name: 'mariner',             key: 'mariner',             font: '#000', code: '#36c'},
          { name: 'dodger-blue-alt',     key: 'dodger-blue-alt',     font: '#000', code: '#36f'},
          { name: 'bavaria-blue',        key: 'bavaria-blue',        font: '#000', code: '#39c'},
          { name: 'monochrome-green-1',  key: 'monochrome-green-1',  font: '#000', code: '#3f0'},
          { name: 'monochrome-apple',    key: 'monochrome-apple',    font: '#000', code: '#3f3'},
          { name: 'indigo',              key: 'indigo',              font: '#000', code: '#45b'},
          { name: 'dodger-blue',         key: 'dodger-blue',         font: '#000', code: '#59f'},
          { name: 'blood-red',           key: 'blood-red',           font: '#ddd', code: '#600'},
          { name: 'eggplant',            key: 'eggplant',            font: '#ddd', code: '#646'},
          { name: 'lead-gray',           key: 'lead-gray',           font: '#000', code: '#666'},
          { name: 'danub',               key: 'danub',               font: '#000', code: '#68c'},
          { name: 'cosmic',              key: 'cosmic',              font: '#000', code: '#746'},
          { name: 'tamarillo',           key: 'tamarillo',           font: '#ddd', code: '#821'},
          { name: 'chelsea-gem',         key: 'chelsea-gem',         font: '#ddd', code: '#965032'},
          { name: 'crimson-red',         key: 'crimson-red',         font: '#ddd', code: '#900'},
          { name: 'lavender-purple',     key: 'lavender-purple',     font: '#000', code: '#97a'},
          { name: 'cold-gray',           key: 'cold-gray',           font: '#000', code: '#999'},
          { name: 'anakiwa',             key: 'anakiwa',             font: '#000', code: '#9cf'},
          { name: 'blue-bell',           key: 'blue-bell',           font: '#000', code: '#99c'},
          { name: 'melrose',             key: 'melrose',             font: '#000', code: '#99f'},
          { name: 'medium-carmine',      key: 'medium-carmine',      font: '#000', code: '#a53'},
          { name: 'rust',                key: 'rust',                font: '#000', code: '#b41'},
          { name: 'bourbon',             key: 'bourbon',             font: '#000', code: '#b62'},
          { name: 'husk',                key: 'husk',                font: '#000', code: '#ba5'},
          { name: 'free-speech-red',     key: 'free-speech-red',     font: '#ddd', code: '#c80000'},
          { name: 'rangoon-red',         key: 'rangoon-red',         font: '#ddd', code: '#c00'},
          { name: 'chestnut-rose',       key: 'chestnut-rose',       font: '#000', code: '#c66'},
          { name: 'hopbush',             key: 'hopbush',             font: '#000', code: '#c69'},
          { name: 'desaturated-red',     key: 'desaturated-red',     font: '#000', code: '#c99'},
          { name: 'lilac',               key: 'lilac',               font: '#000', code: '#c9c'},
          { name: 'chinese-silver',      key: 'chinese-silver',      font: '#000', code: '#ccc'},
          { name: 'grayish-green',       key: 'grayish-green',       font: '#000', code: '#cdb'},
          { name: 'periwinkle',          key: 'periwinkle',          font: '#000', code: '#cdf'},
          { name: 'red-damask',          key: 'red-damask',          font: '#000', code: '#d64'},
          { name: 'very-light-gray',     key: 'very-light-gray',     font: '#000', code: '#eee'},
          { name: 'sandy-brown',         key: 'sandy-brown',         font: '#000', code: '#e95'},
          { name: 'sunset-orange',       key: 'sunset-orange',       font: '#000', code: '#f55'},
          { name: 'pure-red',            key: 'pure-red',            font: '#000', code: '#f00'},
          { name: 'bittersweet',         key: 'bittersweet',         font: '#000', code: '#f66'},
          { name: 'bright-coral',        key: 'bright-coral',        font: '#000', code: '#f77'},
          { name: 'light-orange',        key: 'light-orange',        font: '#000', code: '#f7c64a'},
          { name: 'very-light-red',      key: 'very-light-red',      font: '#000', code: '#f88'},
          { name: 'atomic-tangerine',    key: 'atomic-tangerine',    font: '#000', code: '#f90'},
          { name: 'neon-carrot',         key: 'neon-carrot',         font: '#000', code: '#f93'},
          { name: 'orange-peel',         key: 'orange-peel',         font: '#000', code: '#f96'},
          { name: 'pale-magenta',        key: 'pale-magenta',        font: '#000', code: '#f9c'},
          { name: 'light-salmon-pink',   key: 'light-salmon-pink',   font: '#000', code: '#f99'},
          { name: 'patient-pink',        key: 'patient-pink',        font: '#000', code: '#faa'},
          { name: 'amber',               key: 'amber',               font: '#000', code: '#ffb000'},
          { name: 'pale-red',            key: 'pale-red',            font: '#000', code: '#fbb'},
          { name: 'light-amber',         key: 'light-amber',         font: '#000', code: '#fc0'},
          { name: 'golden-tanoi',        key: 'golden-tanoi',        font: '#000', code: '#fc6'},
          { name: 'peach-orange',        key: 'peach-orange',        font: '#000', code: '#fc9'},
          { name: 'light-red',           key: 'light-red',           font: '#000', code: '#fcc'},
          { name: 'very-pale-red',       key: 'very-pale-red',       font: '#000', code: '#fdd'},
          { name: 'laser-lemon',         key: 'laser-lemon',         font: '#000', code: '#ff6'},
          { name: 'pale-canary',         key: 'pale-canary',         font: '#000', code: '#ff9'},
          { name: 'white',               key: 'white',               font: '#000', code: '#fff'},
        ]
      };
    }
  }
</script>
