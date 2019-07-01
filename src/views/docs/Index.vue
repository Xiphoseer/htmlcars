<template>
  <div id="index">
    <p>
      Welcome to this (open-source) implementation of the LCARS design in HTML.
      This is easily my fourth clean start for this kind of project, this time
      using <a target="_blank" href="http://sass-lang.com">SASS</a> (SCSS) as
      the css preprocessor.
    </p>
    <p>
      The colorscheme and font are taken from
      <a target="_blank" href="http://gtjlcars.de">GTJLCARS</a>, a german
      language resource all around the LCARS system as depicted in StarTrek
      series. The text font is standard Helvetica, which the title font is based
      on.
    </p>
    <p>
      As I use firefox for prototyping, it is quite likely that this system will
      be lacking behind in cross-browser compatibility, as I try to use current
      web-standards where possible. I am currently reworking this repository to
      become a Vue.js app. The SASS files are still there, but I'll need to set
      a build process for the full library at some point.
    </p>
    <p>
      The goal of this project is to provide a HTML/CSS framework that can be
      used to render webpages in LCARS Design, that is using state-of-the-art
      web standards, does not require prefabricated images, absolute positioning,
      flash or any other such software or system. If completed, there should be
      multiple components and layouts available to quickly generate LCARS consoles
      for any webapp.
    </p>
    <h2>Examples</h2>
    <ul>
      <li><router-link to="/examples/403">403 Page</router-link></li>
      <li><router-link to="/examples/calculator">Calculator</router-link></li>
      <li><router-link to="/examples/lcarscom">LCARScom Database</router-link></li>
      <li><router-link to="/examples/panel">Panel</router-link></li>
      <li><router-link to="/examples/access">Access Control Matrix</router-link></li>
      <li><router-link to="/examples/gutter">Gutter</router-link></li>
    </ul>
  </div>
</template>
