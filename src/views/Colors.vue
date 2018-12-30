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
    <color-display title="Colorindex Voyager" source="gtjlcars.de" :colors="voyagerColors" />
    <color-display title="Colorindex USS" source="lcarssdk.org" :colors="ussColors" />
  </section>
</template>

<script>
  import ColorDisplay from '@/components/ColorDisplay.vue';

  export default {
    name: 'docs-colors',
    components: {
      ColorDisplay
    },
    data: function() {
      return {
        voyagerColors: [
          {name: 'Blue-Gray', key: 'BG', code: '#9999cc'},
          {name: 'Lightblue', key: 'LB', code: '#9999ff'},
          {name: 'Lilac', key: 'FL', code: '#cc99cc'},

          {name: 'Pink', key: 'PI', code: '#cc6699'},
          {name: 'Russet', key: 'RB', code: '#cc6666'},
          {name: 'Light-Pink', key: 'LP', code: '#ff99cc'},

          {name: 'Apricot', key: 'AP', code: '#ff9966'},
          {name: 'Beige', key: 'BE', code: '#ffcc99'},
          {name: 'Orange', key: 'OR', code: '#ff9900'},

          {name: 'Light-Orange', key: 'HO', code: '#f7c64a'}
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
        ]
      };
    }
  }
</script>
