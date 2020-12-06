# Roadmap & Manifesto

HTMLCARS is continually evolving. This page lists some of the ideas and
planned features for this library.

## The LCARS Manifesto

<lcars-manifesto/>

## High-Level Goals
    
* Implement a comprehensive library of components/widgets
* Implement an algorithm that places widgets based on input and usage data
* Adapt this into a proper ES Module / Vue library

## Components

Components are the fundamental building block of an LCARS interface. They
may be grouped together to form a single application, but can also be split
apart to appear in a different part of the interface.

Actions in particular can be created and moved around freely, depending on
how frequently they are used. This is vital for a starship control, where
some actions need to exist for different people on the bridge, composed
into their usual task interface.

Much like GTK+ Widgets and HTML elements, these components have a minimal
and optimal size and aspect ratio. Based on these values, an algorithm or
machine learning model places the components onto the available screen.

* Clock
* Stardate Display
* Status Indicator
* Terminal Emulator
* Numpad
* Keyboard
* Action Group
* Navigation Wheel
* Picture Frame
* Settings Panel
