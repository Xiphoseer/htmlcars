<template>
  <div id="roadmap">
    <h1>Roadmap &amp; Manifesto</h1>
    <p>
      HTMLCARS is continually evolving. This page lists some of the ideas and
      planned features for this library.
    </p>
    <lcars-manifesto></lcars-manifesto>
    <h2>High-Level Goals</h2>
    <ul>
      <li>Implement a comprehensive library of components/widgets</li>
      <li>Implement an algorithm that places widgets based on input and usage data</li>
      <li>Adapt this into a proper ES Module / Vue library</li>
    </ul>
    <h2>Components</h2>
    <p>
      Components are the fundamental building block of an LCARS interface. They
      may be grouped together to form a single application, but can also be split
      apart to appear in a different part of the interface.
    </p>
    <p>
      Actions in particular can be created and moved around freely, depending on
      how frequently they are used. This is vital for a starship control, where
      some actions need to exist for different people on the bridge, composed
      into their usual task interface.
    </p>
    <p>
      Much like GTK+ Widgets and HTML elements, these components have a minimal
      and optimal size and aspect ratio. Based on these values, an algorithm or
      machine learning model places the components onto the available screen.
    </p>
    <ul>
      <li>Clock</li>
      <li>Stardate Display</li>
      <li>Status Indicator</li>
      <li>Terminal Emulator</li>
      <li>Numpad</li>
      <li>Keyboard</li>
      <li>Action Group</li>
      <li>Navigation Wheel</li>
      <li>Picture Frame</li>
      <li>Settings Panel</li>
    </ul>
  </div>
</template>
