<template>
  <div>
    <h1>Elements</h1>
    <p>
      This page presents how common HTML elements are displayed. The intention
      is to provide a consistent text display within the LCARS styling for actual
      content. In practice many LCARS-themed pages do this, as it greatly increases
      readbility and embed that in LCARS layout with some addtional components.

      The font used for text is <code>Helvetica</code>, as this is the regular
      version of the LCARS font.
    </p>

    <h2>Horizontal Rule <small>&lt;hr&gt;</small></h2>
    <p>
      A horizontal rule is a divider which may be used to split up a text.
      It is white by default, but may be assigned different colors.
    </p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <hr>
        <hr class="lcars-color-or">
        <hr class="lcars-color-fl">
        <hr class="lcars-color-bg">
        <hr class="lcars-color-rb">
        <hr class="lcars-color-be">
        <hr class="lcars-color-lb">
        <hr class="lcars-color-ap">
        <hr class="lcars-color-pi">
        <hr class="lcars-color-ho">
        <hr class="lcars-color-ck">
      </div>
      <pre>&lt;<span class="lcars-fg-or">hr</span>&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-or</span>"&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-fl</span>"&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-bg</span>"&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-rb</span>"&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-be</span>"&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-lb</span>"&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-ap</span>"&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-pi</span>"&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-ho</span>"&gt;
&lt;<span class="lcars-fg-or">hr</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">lcars-color-ck</span>"&gt;</pre>
    </div>
    <h2>Preformatted Text <small>&lt;pre&gt;</small></h2>
    <p>
      A preformatted text block has a slightly lighter background than the usual page and displays the text in a monospace font.
    </p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <pre>Hello World
This is a new line!</pre>
      </div>
      <pre>&lt;<span class="lcars-fg-or">pre</span>&gt;Hello World
This is a new line!&lt;/<span class="lcars-fg-or">pre</span>&gt;</pre>
    </div>
    <h2>Quote <small>&lt;blockquote&gt;</small></h2>
    <p>

    </p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <blockquote>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...</blockquote>
        <blockquote class="underline">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...</blockquote>
        <blockquote class="leftline">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...</blockquote>
      </div>
      <pre>&lt;<span class="lcars-fg-or">blockquote</span>&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...&lt;/<span class="lcars-fg-or">blockquote</span>&gt;
&lt;<span class="lcars-fg-or">blockquote</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">underline</span>"&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...&lt;/<span class="lcars-fg-or">blockquote</span>&gt;
&lt;<span class="lcars-fg-or">blockquote</span> <span class="lcars-fg-rb">class</span>="<span class="lcars-fg-bg">leftline</span>"&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ...&lt;/<span class="lcars-fg-or">blockquote</span>&gt;</pre>
    </div>
    <h2>Ordered List <small>&lt;ol&gt;</small></h2>
    <p>
    </p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ol>
      </div>
      <pre>&lt;<span class="lcars-fg-or">ol</span>&gt;
  &lt;<span class="lcars-fg-or">li</span>&gt;Item 1&lt;/<span class="lcars-fg-or">li</span>&gt;
  &lt;<span class="lcars-fg-or">li</span>&gt;Item 2&lt;/<span class="lcars-fg-or">li</span>&gt;
  &lt;<span class="lcars-fg-or">li</span>&gt;Item 3&lt;/<span class="lcars-fg-or">li</span>&gt;
&lt;/<span class="lcars-fg-or">ol</span>&gt;</pre>
    </div>
    <h2>Unordered List <small>&lt;ol&gt;</small></h2>
    <p>
    </p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <pre>&lt;<span class="lcars-fg-or">ul</span>&gt;
  &lt;<span class="lcars-fg-or">li</span>&gt;Item 1&lt;/<span class="lcars-fg-or">li</span>&gt;
  &lt;<span class="lcars-fg-or">li</span>&gt;Item 2&lt;/<span class="lcars-fg-or">li</span>&gt;
  &lt;<span class="lcars-fg-or">li</span>&gt;Item 3&lt;/<span class="lcars-fg-or">li</span>&gt;
&lt;/<span class="lcars-fg-or">ul</span>&gt;</pre>
    </div>
    <h2>Definition List <small>&lt;ol&gt;</small></h2>
    <p>
    </p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <dl>
          <dt>Item 1</dt>
          <dd>Value 1</dd>
          <dt>Item 2</dt>
          <dd>Value 2</dd>
          <dt>Item 3</dt>
          <dd>Value 3</dd>
        </dl>
      </div>
      <pre>&lt;<span class="lcars-fg-or">dl</span>&gt;
  &lt;<span class="lcars-fg-or">dt</span>&gt;Item 1&lt;/<span class="lcars-fg-or">dt</span>&gt;
  &lt;<span class="lcars-fg-or">dd</span>&gt;Value 1&lt;/<span class="lcars-fg-or">dd</span>&gt;
  &lt;<span class="lcars-fg-or">dt</span>&gt;Item 2&lt;/<span class="lcars-fg-or">dt</span>&gt;
  &lt;<span class="lcars-fg-or">dd</span>&gt;Value 2&lt;/<span class="lcars-fg-or">dd</span>&gt;
  &lt;<span class="lcars-fg-or">dt</span>&gt;Item 3&lt;/<span class="lcars-fg-or">dt</span>&gt;
  &lt;<span class="lcars-fg-or">dd</span>&gt;Value 3&lt;/<span class="lcars-fg-or">dd</span>&gt;
&lt;/<span class="lcars-fg-or">dl</span>&gt;</pre>
    </div>
    <h2 id="anchors">Anchors <small>&lt;a&gt;</small></h2>
    <p>
      Hyperlinks within paragraphs are usually displayed in red with a circle in front. On hover, they get underlined.
      It is likely that this may be configurable by some sort of global class in the future.
    </p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <p>
          This is an example text with an embedded <a href="#anchors">hyperlink</a>.
        </p>
      </div>
      <pre>&lt;<span class="lcars-fg-or">p</span>&gt;
  This is an example text with an embedded &lt;<span class="lcars-fg-or">a</span> <span class="lcars-fg-rb">href</span>="<span class="lcars-fg-bg">#anchors</span>"&gt;hyperlink&lt;/<span class="lcars-fg-or">a</span>&gt;.
&lt;/<span class="lcars-fg-or">p</span>&gt;</pre>
    </div>
    <h2 id="anchors">Emphasized <small>&lt;em&gt;</small></h2>
    <p></p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <p>
          This is an <em>emphasized</em> sentence.
        </p>
      </div>
      <pre>&lt;<span class="lcars-fg-or">p</span>&gt;
  This is an &lt;<span class="lcars-fg-or">em</span>&gt;emphasized&lt;/<span class="lcars-fg-or">em</span>&gt; sentence.
&lt;/<span class="lcars-fg-or">p</span>&gt;</pre>
    </div>
    <h2>Headings</h2>
    <p>
      These are the standard display variations for HTML headings. All 6 variants are supported. Withe the <code>small</code> element, a subtext may be added.
    </p>
    <div class="lcars-container">
      <div class="lcars-container-inlay">
        <h1>Hello World! <small>Subtext</small></h1>
        <h2>Hello World! <small>Subtext</small></h2>
        <h3>Hello World! <small>Subtext</small></h3>
        <h4>Hello World! <small>Subtext</small></h4>
        <h5>Hello World! <small>Subtext</small></h5>
        <h6>Hello World! <small>Subtext</small></h6>
      </div>
    </div>
    <h2>Buttons</h2>
    <p>
      Buttons are displayed with rounded corners and a Text in the bottom right corner. Buttons are created with the
      <code>lcars-btn</code> CSS class.
    </p>
    <div class="lcars-container">
      <div class="lcars-container-inlay">
        <button>Hello</button>
        <button>Button with a really long Text</button>
      </div>
    </div>
  </div>
</template>
