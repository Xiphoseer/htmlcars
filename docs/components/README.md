# Components

This is a library of components which can be used in a LCARS themed site. They are intended to be reusable in most cases. but it is not guaranteed that all components will work together seamlessly. Components are inspired from a variety of sources.

<example title="Clock">
  <template slot="description">
    A simple digital clock, displaying the current time in 24h mode.
  </template>
  <template slot="markup">
    <lcars-clock style="font-size: 5em"></lcars-clock>
  </template>
</example>

<example title="Stardate">
  <template slot="description">
    A simple stardate display.
  </template>
  <template slot="markup">
    <lcars-stardate style="font-size: 5em"></lcars-stardate>
  </template>
</example>

<example title="Message Titles">
  <template slot="description">
    When a system message appears in LCARS it tends not to be a toast or
    color-coded alert, but rather a full page with bold font of different
    sizes describing the situation. This may be achieved through the
    <code>message</code> class.
  </template>
  <template slot="markup">
    <div class="lcars-message">
      <h1>Authorized</h1>
      <h2>Please stand by!</h2>
      <h3>Starfleet command</h3>
      <h4>Alpha - Epsilon - Theta</h4>
      <h5>Management Console</h5>
      <h6>Library Computer Access and Retrieval System</h6>
    </div>
  </template>
</example>

<example title="Badges">
  <template slot="description">
    These panel identification labels have been used on the backside of
    PADDS or storage crates. They consist of a number and multiline description.
  </template>
  <template slot="markup">
    <div class="badge" data-key="123">
      <h2>ENGINEERING ACCESS ONLY</h2>
      <span>Three hundred thousand kilometers per second: It's not just a good idea. It's the law, your actual mileage may vary, of course</span>
    </div>
    <div class="badge badge-red" data-key="123">
      <h2>WEBSITE UNDER CONSTRUCTION</h2>
      <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
    </div>
    <div class="badge badge-blue" data-key="123">
      <h2>ENGINEERING ACCESS ONLY</h2>
      <span>Three hundred thousand kilometers per second: It's not just a good idea. It's the law, your actual mileage may vary, of course</span>
    </div>
    <div class="badge badge-brown" data-key="123">
      <h2>WEBSITE UNDER CONSTRUCTION</h2>
      <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
    </div>
  </template>
</example>

## Button Groups

<example title="Button Grid">
  <template slot="markup">
    <div class="lcars-button-grid">
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
    </div>
  </template>
</example>

<example title="Button Panel">
  <template slot="markup">
    <div class="lcars-button-panel" style="max-width: 5rem">
      <div class="lcars-message lcars-bg-fl lcars-field" style="grid-area: 2 / 1 / 4 / 3;">
        <h3><!--&#0133;--></h3>
      </div>
      <a href="#" class="lcars-btn lcars-btn-pi">PQR</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <div class="lcars-button-panel-group">
        <a href="#" class="lcars-btn lcars-btn-pi">123</a>
        <a href="#" class="lcars-btn lcars-btn-pi">567</a>
      </div>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <div class="lcars-button-panel-group">
        <a href="#" class="lcars-btn lcars-btn-pi">2BC</a>
        <a href="#" class="lcars-btn lcars-btn-or">3YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or">5YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or">6YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or">7YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or">7YZ</a>
      </div>
    </div>
  </template>
</example>

<example title="Console">
  <template slot="markup">
    <div class="lcars-console">
      <div class="lcars-console-line">
        <a href="#" class="lcars-btn lcars-btn-pi left">2BC</a>
        <a href="#" class="lcars-btn lcars-btn-or block">3YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or right">5YZ</a>
      </div>
      <div class="lcars-console-line">
        <a href="#" class="lcars-btn lcars-btn-pi left">2BC</a>
        <span class="num">5</span>
        <a href="#" class="lcars-btn lcars-btn-or block">3YZdlknabckanek</a>
        <a href="#" class="lcars-btn lcars-btn-or right">5YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or left">6YZ</a>
        <a href="#" class="lcars-btn lcars-btn-pi block">2BC</a>
        <a href="#" class="lcars-btn lcars-btn-or right">3YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or left">5YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or right">6YZ</a>
        <a href="#" class="lcars-btn lcars-btn-pi left">2BC</a>
        <a href="#" class="lcars-btn lcars-btn-or block">3YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or right">5YZ</a>
      </div>
      <div class="lcars-console-line">
        <a href="#" class="lcars-btn lcars-btn-pi left">2BC</a>
        <a href="#" class="lcars-btn lcars-btn-or block">3YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or left">5YZ</a>
        <a href="#" class="lcars-btn lcars-btn-or right">6YZ</a>
      </div>
    </div>
  </template>
</example>

<example title="chrome">
  <template slot="markup">
    <div class="lcars-chrome-horizontal lcars-chrome-large">
      <h1>LARGE</h1>
      <a href="#" class="lcars-btn">123</a>
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <span class="lcars-bar-space"></span>
    </div><br/>
    <div class="lcars-chrome-horizontal lcars-chrome-larger">
      <h1>LARGER</h1>
      <a href="#" class="lcars-btn">123</a>
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <span class="lcars-bar-space"></span>
    </div><br/>
    <div class="lcars-chrome-horizontal">
      <h1>NORMAL</h1>
      <a href="#" class="lcars-btn">123</a>
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <span class="lcars-bar-space"></span>
    </div><br/>
    <div class="lcars-chrome-horizontal lcars-chrome-smaller">
      <h1>SMALLER</h1>
      <a href="#" class="lcars-btn">123</a>
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <span class="lcars-bar-space"></span>
    </div><br/>
    <div class="lcars-chrome-horizontal lcars-chrome-small">
      <h1>SMALL</h1>
      <a href="#" class="lcars-btn">123</a>
      <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
      <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
      <span class="lcars-bar-space"></span>
    </div>
  </template>
</example>

<example title="Custom buttons">
  <template slot="markup">
    <button style="width: 20rem;" class="lcars-btn-flat"><span>Alien Database</span></button><br>
    <button style="width: 20rem;" class="lcars-btn-flat"><span>Behind the scenes</span></button>
  </template>
</example>