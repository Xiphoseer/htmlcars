# Elements

This page presents how common HTML elements are displayed. The intention
is to provide a consistent text display within the LCARS styling for actual
content. In practice many LCARS-themed pages do this, as it greatly increases
readbility and embed that in LCARS layout with some addtional components.

The font used for text is `Helvetica`, as this is the regular version of the LCARS font.

<!-- HR -->

<Demo componentName="examples-hr-element-doc" />

<example title="Preformatted Text" element="pre">
  <template slot="description">
    A preformatted text block has a slightly lighter background than the usual page and displays the text in a monospace font.
  </template>
  <template slot="markup">
    <pre>Hello World
This is a new line!</pre>
  </template>
</example>

<example title="Quote" element="blockquote">
  <template slot="markup">
    <blockquote>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...</blockquote>
    <blockquote class="underline">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...</blockquote>
    <blockquote class="leftline">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...</blockquote>
  </template>
</example>

<example title="Ordered List" element="ol">
  <template slot="markup">
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </template>
</example>

<example title="Unordered List" element="ul">
  <template slot="markup">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </template>
</example>

<example title="Definition List" element="dl">
  <template slot="markup">
    <dl>
      <dt>Item 1</dt>
      <dd>Value 1</dd>
      <dt>Item 2</dt>
      <dd>Value 2.1</dd>
      <dd>Value 2.2</dd>
      <dt>Item 3</dt>
      <dd>Value 3</dd>
    </dl>
  </template>
</example>

<example id="anchors" title="Anchors" element="a">
  <template slot="description">
    Hyperlinks within paragraphs are usually displayed in red with a circle
    in front. On hover, they get underlined. It is likely that this may be
    configurable by some sort of global class in the future.
  </template>
  <template slot="markup">
<p>
  This is an example text with an embedded <a href="#anchors">hyperlink</a>.
</p>
  </template>
</example>

<example title="Emphasized" element="em">
  <template slot="markup">
<p>
  This is an <em>emphasized</em> sentence.
</p>
  </template>
</example>

<example title="Headings">
  <template slot="description">
    These are the standard display variations for HTML headings. All 6
    variants are supported. Withe the <code>small</code> element, a subtext
    may be added.
  </template>
  <template slot="markup">
    <h1>Hello World! <small>Subtext</small></h1>
    <h2>Hello World! <small>Subtext</small></h2>
    <h3>Hello World! <small>Subtext</small></h3>
    <h4>Hello World! <small>Subtext</small></h4>
    <h5>Hello World! <small>Subtext</small></h5>
    <h6>Hello World! <small>Subtext</small></h6>
  </template>
</example>

<example title="Buttons" element="button">
  <template slot="description">
    Buttons are displayed with rounded corners and a Text in the bottom
    right corner. Buttons are created with the <code>lcars-btn</code> CSS
    class.
  </template>
  <template slot="markup">
    <button>Hello</button>
    <button>Button with a really long Text</button>
  </template>
</example>