<template>
  <div>
    <h1>Layouts</h1>
    <p>
      Based on the CSS Grid and Flexbox systems, there are a set of predefined layouts available. These commonly use the same placeholder names for the different areas, which means that migrating form one layout to another should be as easy as possible. Writing new layouts that extend or integrate existing ones should also work quite well.
    </p>
    <p>
      These grid layouts may be optimized for or enhance some of the provided components (especially the <code>chrome</code> ones).
    </p>
    <h2>Page Layout</h2>
    <p>
      This is the most standard layout available. It has room for a <code>topbar</code> and a <code>bottombar</code> as well as a <code>content</code> and <code>statusline</code>.
    </p>
    <div class="lcars-container">
      <div class="lcars-container-inlay" style="height: 30rem">
        <div class="lcars-page lcars-fixed">
          <div class="lcars-chrome-horizontal lcars-topbar">
            <h1>Topbar</h1>
            <a href="#" class="lcars-btn">123</a>
            <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
            <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
            <span class="lcars-bar-space"></span>
          </div>
          <span class="lcars-infoline">statusline</span>
          <div class="lcars-grid-content">
            <p>content</p>
          </div>
          <div class="lcars-chrome-horizontal lcars-bottombar">
            <span class="lcars-bar-space"></span>
            <h2>Bottombar</h2>
          </div>
        </div>
      </div>
    </div>

    <h2>Grid Layout</h2>
    <p>
      The next one is the grid layout (name subject to change). It has room for a <code>topbar</code> and a <code>bottombar</code> as well as a <code>content</code> and <code>sidebar</code>.
    </p>
    <div class="lcars-container">
      <div class="lcars-container-inlay" style="height: 30rem">
        <div class="lcars-grid lcars-grid-merged">
          <div class="lcars-topbar lcars-chrome-horizontal">
            <h1>Topbar</h1>
            <span class="lcars-bar-space"></span>
            <a href="#" class="lcars-btn lcars-btn-rb">Button</a>
          </div>
          <div class="lcars-sidebar lcars-chrome-vertical">
            <h2>Sidebar</h2>
            <span class="lcars-bar-space"></span>
            <a href="pages/impress.html" target="content" class="lcars-btn lcars-btn-ap">Impress</a>
          </div>
          <div class="lcars-grid-content">
            content
          </div>
          <div class="lcars-bottombar lcars-chrome-horizontal">
          </div>
        </div>
      </div>
    </div>

    <h2>Grid Layout</h2>
    <p>
      Likely the most iconic console variation, this <code>analytical</code> layout provides a <code>status</code> window in its upper half, and a main <code>content</code> block at the bottom, along with a <code>sidebar</code> and <code>altbar</code>.
    </p>
    <div class="lcars-container">
      <div class="lcars-container-inlay" style="height: 30rem">
        <div class="lcars-analytical lcars-analytical-merged">
          <div class="lcars-chrome-horizontal lcars-topbar alt-cap-right lcars-chrome-small">
            <span class="lcars-bar-space lcars-bg-rb"></span>
            <span class="lcars-bar-space lcars-bg-pi inlay-down"></span>
            <span class="lcars-bar-space lcars-bg-rb"></span>
          </div>
          <div class="lcars-grid-content">
            content
          </div>
          <div class="lcars-chrome-horizontal lcars-bottombar alt-cap-right lcars-chrome-small">
            <span class="lcars-bar-space"></span>
            <span class="lcars-bar-space lcars-bg-lb inlay-up"></span>
          </div>
          <div class="lcars-status-left lcars-fg-or" style="text-align: justify;">
            status-left
          </div>
          <div class="lcars-status-right">
            <div class="lcars-button-grid">
              <a href="#" class="lcars-btn lcars-btn-pi">status-right</a>
              <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
              <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
              <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
              <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
              <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
              <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
              <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
            </div>
          </div>
          <div class="lcars-chrome-vertical lcars-sidebar">
            <a href="#" class="lcars-btn lcars-btn-or">sidebar</a>
            <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
            <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
            <div class="lcars-bar-space"></div>
            <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
            <a href="#" class="lcars-btn lcars-btn-pi">ABC</a>
          </div>
          <div class="lcars-chrome-vertical lcars-altbar">
            <a href="#" class="lcars-btn lcars-btn-pi">altbar</a>
            <a href="#" class="lcars-btn lcars-btn-or">XYZ</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
