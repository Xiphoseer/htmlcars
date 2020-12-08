<template>
  <div id="panel" class="lcars-body">
    <div id="left">
      <div id="engineering" class="lcars-bg-or lcars-chrome-field text-bottom-right">Engineering</div>
      <div id="sciences" class="lcars-bg-lb lcars-chrome-field text-bottom-left">Sciences</div>
      <div id="lcars" class="lcars-bg-fl lcars-chrome-field text-bottom-left">LCARS</div>
      <div id="left-top-right" class="lcars-bg-lp"></div>
      <div id="left-right" class="lcars-bg-pi"></div>
      <div id="left-bottom-right" class="lcars-bg-lp"></div>
      <div id="left-bottom" class="lcars-bg-ho"></div>
      <div id="left-bottom-left" class="lcars-bg-or"></div>
      <div id="left-content">
        Hello
      </div>
      <div id="left-middle-top-left" class="lcars-bg-ap"></div>
      <div id="left-middle-top" class="lcars-bg-lb"></div>
      <div id="left-middle-top-right" class="lcars-bg-lp"></div>
      <div id="left-middle-right" class="lcars-bg-or"></div>
      <div id="left-middle-bottom-right" class="lcars-bg-fl"></div>

      <div id="left-middle-content">
        Hello
      </div>

      <div id="left-middle-bottom" class="lcars-bg-or"></div>
      <div id="left-bottom-border" class="lcars-bg-pi"></div>
      <div id="left-bottom-content" class="lcars-bg-ck">
        Hello
      </div>
    </div>
    <div id="right">
      <div id="right-test" data-label="Hello"></div>
      <svg viewBox="0 0 100 50">
        <path d="
          M 0 25
          A 25 25 0 0 1 25 0
          L 100 0
          L 100 10
          L 60 10
          A 10 10 0 0 0 50 20
          L 50 25
          Z
        " fill="var(--lcars-theme-secondary)"/>
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
  #panel
  {
    display: grid;
    grid-template-columns: 5fr 4fr;
    grid-gap: 0.2rem;
    padding: 0;
    min-height: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
  }

  #left
  {
    grid-area: 1 / 1 / 2 / 2;
    display: grid;
    grid-template-rows: 6rem 1fr 4fr 1fr 0.5rem 0.5rem 0.5rem 1fr 2fr 2fr 0.5rem 2fr 2fr 1rem;
    grid-template-columns: repeat(9, 1fr) 1.5rem;
    grid-gap: 0 0.5rem;
  }

  #engineering
  {
    grid-area: 1 / 1 / 2 / 5;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  #sciences
  {
    grid-area: 1 / 5 / 2 / 6;
  }

  #lcars
  {
    grid-area: 1 / 6 / 2 / 7;
  }

  #left-top-right
  {
    grid-area: 1 / 7 / 3 / 11;
    border-top-right-radius: 3rem;
  }

  #left-right
  {
    grid-area: 3 / 7 / 4 / 11;
    border-top: 0.5rem solid #000;
    border-bottom: 0.5rem solid #000;
  }

  #left-bottom-right
  {
    grid-area: 4 / 5 / 6 / 11;
  }

  #left-bottom
  {
    grid-area: 4 / 3 / 6 / 5;
  }

  #left-bottom-left
  {
    grid-area: 4 / 1 / 6 / 3;
  }

  #left-content
  {
    grid-area: 2 / 1 / 5 / 10;
    background-color: #000;
    border-top-right-radius: 1rem;
  }

  #left-middle-top-left
  {
    grid-area: 7 / 1 / 8 / 3;
  }

  #left-middle-top
  {
    grid-area: 7 / 3 / 8 / 7;
  }

  #left-middle-top-right
  {
    grid-area: 7 / 7 / 9 / 11;
  }

  #left-middle-right
  {
    grid-area: 9 / 7 / 10 / 11;
    border-top: 0.5rem solid #000;
    border-bottom: 0.5rem solid #000;
  }

  #left-middle-bottom-right
  {
    grid-area: 10 / 9 / 12 / 11;
  }

  #left-middle-bottom
  {
    grid-area: 11 / 1 / 12 / 9;
  }

  #left-middle-content
  {
    background-color: #000;
    grid-area: 8 / 1 / 11 / 10;
  }

  #left-bottom-border
  {
    grid-area: 12 / 1 / 15 / 11;
    border-top: 0.5rem solid #000;
    border-bottom-right-radius: 1rem;
  }

  #left-bottom-content
  {
    grid-area: 12 / 1 / 14 / 10;
  }

  #right
  {
    background-color: #000;
    grid-area: 1 / 2 / 2 / 3;
  }

  #right-test
  {
    background-color: transparent;
    height: 6rem;
    width: 10rem;
    overflow: hidden;
    position: relative;
    font-family: $lcars-title-font;
  }

  #right-test::before
  {
    content: "";
    background-color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    transform: skew(18deg);
    display: block;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    pointer-events: none;
    transform-origin: bottom;
    right: 0px;
  }

  #right-test::after
  {
    content: attr(data-label);
    font-size: 20px;
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
    letter-spacing: 1px;
    padding: 4px 8px;
    line-height: 1.25;
    overflow: hidden;
    max-height: 100%;
    color: #000;
  }
</style>
