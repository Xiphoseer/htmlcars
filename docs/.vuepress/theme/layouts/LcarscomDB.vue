<template>
  <div class="lcars-page lcars-fixed" style="max-width: 50rem; margin: 0 auto;">
    <div class="lcars-topbar lcars-chrome-horizontal lcars-chrome-smaller lcars-chrome-bg">
      <span class="lcars-bar-space lcars-bg-fl"></span>
      <h1>LCARScom.net Computer Access &bull; <span class="lcars-on-off">ONLINE</span></h1>
    </div>
    <div id="lcarscom-index" class="lcars-grid-content">
      <div id="lcarscom-mode" class="lcars-bg-bg">
        <span class="lcars-chrome-field text-bottom-right">Mode Select</span>
      </div>
      <div class="lcars-bg-rb" style="grid-area: 4 / 1 / 5 / 2"></div>
      <div class="lcars-bg-or lcars-chrome-field text-bottom-right lcars-blink-4" style="grid-area: comm;">Comm</div>
      <div class="lcars-bg-rb lcars-chrome-field text-bottom-left" style="grid-area: system;">System</div>
      <div class="lcars-bg-or lcars-chrome-field text-bottom-right lcars-blink-4" style="grid-area: access;">Access</div>
      <div class="lcars-bg-rb lcars-chrome-field text-bottom-left lcars-round-right" style="grid-area: view;">View</div>

      <div class="lcars-bg-rb" style="grid-area: 2 / 3 / 3 / 4;"></div>
      <div class="lcars-bg-ho" style="grid-area: 2 / 4 / 3 / 6;"></div>
      <div class="lcars-bg-or" style="grid-area: 2 / 6 / 3 / 7;"></div>
      <div class="lcars-bg-lb" style="grid-area: 2 / 7 / 3 / 9;"></div>
      <div class="lcars-bg-lb" style="grid-area: 2 / 8 / 4 / 9;"></div>

      <div id="lcarscom-shipview">
        <div class="lcars-bg-rb" style="grid-area: 1 / 1 / 3 / 3; border-radius: 1rem 0 0 0;"></div>
        <div class="lcars-bg-lb lcars-chrome-field text-bottom-right" style="grid-area: 3 / 1 / 4 / 2;">
          LCARS
        </div>
        <div class="lcars-bg-or lcars-chrome-field text-top-right" style="grid-area: 4 / 1 / 5 / 2;">
          470
        </div>
        <div class="lcars-bg-fl lcars-chrome-field text-bottom-right" style="grid-area: 5 / 1 / 6 / 2;">
          Mode
        </div>
        <div class="lcars-bg-or" style="grid-area: 6 / 1 / 8 / 5; border-radius: 0 0 1rem 1rem;"></div>

        <div class="lcars-bg-fl" style="grid-area: 1 / 3 / 6 / 4; border-left: 0.3rem solid #000; border-right: 0.3rem solid #000;"></div>
        <div class="lcars-bg-fl lcars-font lcars-fg-ck" style="grid-area: 1 / 4 / 6 / 5; padding: 0.1rem 0.2rem;">
          4707
        </div>

        <div id="lcarscom-shipimage" class="lcars-bg-ck">
          <div style="grid-area: 1 / 1 / 2 / 3;">
            <h5 class="lcars-img-header">Dorsal View</h5>
          </div>
          <div style="grid-area: 2 / 1 / 3 / 3;">
            <h5 class="lcars-img-header">Starboard View</h5>
          </div>
          <div style="grid-area: 3 / 1 / 4 / 2;">
            <h5 class="lcars-img-header">Aft View</h5>
          </div>
          <div style="grid-area: 3 / 2 / 4 / 3;">
            <h5 class="lcars-img-header">Fore View</h5>
          </div>
        </div>
      </div>

      <span class="lcars-font lcars-fg-or" style="grid-area: 3 / 6 / 4 / 8; background: #000; text-align: right; padding: 0; line-height: 1.1rem; font-size: 17pt;">U.S.S. Prometheus NX 59650</span>

      <nav class="lcars-btn-nav" style="grid-area: menu;">
        <a class="lcars-btn-flat lcars-btn-lb lcars-hover-or lcars-fg-or"><span>Alien Database</span></a>
        <a class="lcars-btn-flat lcars-btn-be lcars-hover-or lcars-fg-or"><span>Behind the scenes</span></a>
        <a class="lcars-btn-flat lcars-btn-be lcars-hover-or lcars-fg-or"><span>Episodes and Movies</span></a>
        <a class="lcars-btn-flat lcars-btn-be lcars-hover-or lcars-fg-or"><span>Klingon Database</span></a>
        <a class="lcars-btn-flat lcars-btn-be lcars-hover-or lcars-fg-or"><span>Personnel Database</span></a>
        <a class="lcars-btn-flat lcars-btn-be lcars-hover-or lcars-fg-or"><span>Starfleet Database</span></a>
        <a class="lcars-btn-flat lcars-btn-fl lcars-hover-or lcars-fg-or"><span>Starship Database</span></a>
        <a class="lcars-btn-flat lcars-btn-lb lcars-hover-or lcars-fg-or"><span>Stellar Cartography</span></a>
        <a class="lcars-btn-flat lcars-btn-lb lcars-hover-or lcars-fg-or"><span>Technical Database</span></a>
        <router-link to="/" class="lcars-btn-flat lcars-btn-lb lcars-hover-or lcars-fg-or"><span>Back to the Databank</span></router-link>
      </nav>
    </div>
    <div class="lcars-bottombar lcars-chrome-horizontal lcars-chrome-smaller lcars-chrome-bg">
      <h1>Console 47 Beta</h1>
      <span class="lcars-bar-space lcars-bg-fl"></span>
    </div>
  </div>
</template>

<style type="text/css">
  #lcarscom-index
  {
    display: grid;
    grid-template-columns: 1rem 2fr 1fr 1fr 2fr 1fr 2fr 2rem;
    grid-template-rows: 3rem 5px 1rem auto;
    grid-template-areas: "mode mode comm system system  access  view    view   "
                         "mode mode .    .      .       .       .       .      "
                         "mode mode .    .      .       .       .       .      "
                         ".    menu menu .      content content content content";
    grid-gap: 0.3rem;
    height: 100%;
  }

  #lcarscom-shipview
  {
    grid-area: content;
    display: grid;
    grid-template-columns: 3rem auto 2rem 2rem;
    grid-template-rows: 0.5rem 2rem 1fr 2fr 1fr 2rem 1rem;
    grid-gap: 0.3rem 0;
  }

  #lcarscom-shipimage
  {
    grid-area: 2 / 2 / 7 / 4;
    padding: 0.5rem;
    border-radius: 1rem 0 1rem 1rem;
    display: grid;
    grid-template-rows: 3fr 2fr 2fr;
    grid-template-columns: 1fr 1fr;
  }

  #lcarscom-mode
  {
    grid-area: mode;
    border-top-left-radius: 15% 50%;
    display: grid;
    grid-template-rows: auto calc(1.6rem + 5px);
    grid-template-columns: 1rem auto;
  }

  #lcarscom-mode::after
  {
    content: "";
    display: block;
    background: #000;
    grid-area: 2 / 2 / 3 / 3;
    border-top-left-radius: 1rem;
  }

  #lcarscom-mode span
  {
    grid-area: 1 / 2 / 1 / 3;
    text-align: right;
  }
</style>
