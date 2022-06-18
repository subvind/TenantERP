<script>
  import { onMount } from "svelte";

  import Cradle from "./Cradle.svelte";
</script>

<div class="build-ideas">
  <div class="container">
    <h1 class="title">
      Let's build ideas.
    </h1>
    <!-- svelte-ignore a11y-distracting-elements -->
    <div class="description">isTrav's goal is to solve problems using the right solutions, turn ideas into apps that spark joy to the end user, and then to keep production live with what works best.</div>
    <br />
    <a href="/about" class="btn btn-large blue lighten-2">about</a>
  </div>
</div>
<div style="text-align: center;">
  <Cradle />
</div>

<br />
<br />
<h1 class="brand">isTrav</h1>
<div class="center-dot"></div>
<div class="center-dash"></div>
<div class="container" style="padding: 0;">
  <div class="left-bar"></div>
</div>
<div class="steps">
  <div class="container">
    <h1 class="title">
      - Platform for ideas.
    </h1>
    <div class="bump">
      <div class="description">After bouncing ideas back and forth and off the walls product owners should have a solid foundation of like minded thinking built up around what they want and don't want.</div>
      <br />
      <a href="/platforms" class="btn btn-large red lighten-2">Platforms</a>
    </div>
  </div>
</div>
<div class="steps">
  <div class="container">
    <h1 class="title">
      - Existing ideas.
    </h1>
    <div class="bump">
      <div class="description">Most ideas are just collections of other ideas. Some ideas are assembled the same yet branded differently. Look here to see how your idea may integrate with other ideas.</div>
      <br />
      <a href="/apps" class="btn btn-large red lighten-2">Applications</a>
    </div>
  </div>
</div>
<div class="steps">
  <div class="container">
    <h1 class="title">
      - Fully custom ideas.
    </h1>
    <div class="bump">
      <div class="description">There are some ideas that may not fit within the scope of our platform or existing applications. Ideas that require a coder to sit down and program. Reach out. We may be able to build your idea and release it as a new feature.</div>
      <br />
      <a href="/contact-me" class="btn btn-large red lighten-2">contact me</a>
    </div>
  </div>
</div>
<div class="steps">
  <div class="container">
    <h1 class="title">
      - Ideas with solutions.
    </h1>
    <div class="bump">
      <div class="description">There is a market that every idea should target in order to be successful; for instance, perhaps your niche idea solves a pain point in the "cooking" or (etc) industry.</div>
      <br />
      <a href="/solutions" class="btn btn-large red lighten-2">solutions</a>
    </div>
  </div>
</div>
<div class="steps">
  <div class="container">
    <h1 class="title">
      - Successful ideas.
    </h1>
    <div class="bump">
      <div class="description">Notice how we did a couple of things. We identified the problem. Found a solution. Executed on turning our idea into reality.</div>
      <br />
      <a href="/production" class="btn btn-large red lighten-2">production</a>
    </div>
  </div>
</div>
<div class="steps">
  <div class="container">
    <h1 class="title">
      - Idea automation.
    </h1>
    <div class="bump">
      <div class="description">Our client area or Idea Management Software (IMS) is where isTrav clients may login to a control panel and keep track of and manage their ideas from startup to production.</div>
      <br />
      <a href="/client-area" class="btn btn-large red lighten-2">client area</a>
    </div>
  </div>
</div>
<div class="steps">
  <div class="container">
    <h1 class="title">
      - Diagnose an idea.
    </h1>
    <div class="bump">
      <div class="description">Our AI chat bot or "Network AI" is capable of looking at our historical system logs and database records and can tell you a thing or two about your idea.</div>
      <br />
      <a href="/network-ai" class="btn btn-large red lighten-2">Network AI</a>
    </div>
  </div>
</div>
<div class="container" style="padding: 0;">
  <div class="left-bar"></div>
</div>
<div class="center-dash"></div>
<div class="center-dot"></div>
<h1 class="brand">isTrav</h1>

<style>
  .bump {
    padding-left: 3em;
  }
  .brand {
    text-align: center;
    font-weight: 900;
    font-size: 4.5em;
    margin: 0;
    color: #000;
  }
  .center-dot {
    width: 50%;
    border-right: 1em dotted #000;
    height: 5em;
    margin: 1em 0;
  }
  .center-dash {
    width: 50%;
    border-right: 1em dashed #000;
    height: 5em;
    margin: 0.5em 0;
  }
  .left-bar {
    border-top: 1em solid #000;
    width: 50%;
  }
  .build-ideas {
    background: #000;
	}
  .build-ideas .title {
    font-weight: 900;
    font-size: 4.5em;
    text-align: left;
    margin: 0;
    color: #fff;
  }
  .build-ideas .description {
    color: #fff;
    font-size: 2em;
  }

  .steps {
    background: transparent;
	}
  .steps .container {
    border-left: 1em solid #000;
    padding-left: 1em;
  }
  .steps .title {
    font-weight: 900;
    font-size: 4.5em;
    text-align: left;
    margin: 0;
    color: #000;
  }
  .steps .description {
    color: #000;
    font-size: 2em;
  }
  .container {
    padding: 5em 0;
  }
</style>