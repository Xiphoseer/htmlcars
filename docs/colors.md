# Colors

A basic, empty LCARS console is black. We call this a `screen`.
A screen can be filled with text, displayed in white, green or orange, as
it has been for old CRT computer screens.

On a screen, the recognizable features of a LCARS console are the buttons,
controls, schematics, toggles, headings and more. We call them collectively
the `chrome` of the console. The chrome is
mostly orange or beige in TNG, very colorful in Voyager and blue-green in
the newer films.

This framework is intended to be mostly color independent, but provides
some predefined colors as well as utility classes to use a specific theme
or color.

## CSS custom properties

By default, the framework uses CSS custom variables to cascade the
currently selected chrome and screen color through an application. The
`:root` pseudo-class is used to set some generic defaults.

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

## Reference

While there are many colors appropriate for an LCARS interface, a realistic
interface will only ever use a palette of less than 6. This section
presents some predefined color that I found around the web. The sources
are annotated at the bottom right of the palette tables.

An LCARS Design guideline (which will not be linked here for its use of
agressive language) specifies this:

1. Use no more main colors than are required to present the semantics of the interface.
2. Use up to five shades or tints of these colors when necessary.
3. Use no more than five colors in total

<color-display title="Colorindex Voyager" source="gtjlcars.de" colors="voyagerColors" />
<color-display title="Colorindex USS" source="lcarssdk.org" colors="ussColors" />
<color-display title="PADDs Template" source="lcars.padd.online.fr" colors="paddColors" />
<color-display title="Year 2357" source="@Mokurunner / lcars47.com" colors="year2357Colors" />
<color-display title="Year 2369" source="@Mokurunner / lcars47.com" colors="year2369Colors" />
<color-display title="Year 2375" source="@Mokurunner / lcars47.com" colors="year2375Colors" />
<color-display title="Year 2379" source="@Mokurunner / lcars47.com" colors="year2379Colors" />

<color-display title="Odyssey Normal"       source="@sumghai" colors="odysseyNormalColors" />
<color-display title="Odyssey Gray Mode"    source="@sumghai" colors="odysseyGrayModeColors" />
<color-display title="Odyssey Blue Alert"   source="@sumghai" colors="odysseyBlueAlertColors" />
<color-display title="Odyssey Yellow Alert" source="@sumghai" colors="odysseyYellowAlertColors" />
<color-display title="Odyssey Red Alert"    source="@sumghai" colors="odysseyRedAlertColors" />

<color-palette title="Full Palette" source="Something" colors="allColors" />
