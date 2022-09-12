<script>
  import { onMount } from "svelte";

  import Cradle from "./Cradle.svelte";
</script>

<div class="build-ideas">
  <div class="container">
    <br />
    <h1 class="title">
      Let's build ideas.
    </h1>
    <!-- svelte-ignore a11y-distracting-elements -->
    <div class="description">isTrav's goal is to solve problems using the right solutions, turn ideas into apps that spark joy to the end user, and then to keep production live with what works best.</div>
    <br />
    <a href="https://istrav.dev" class="btn btn-large blue lighten-2">System Headquarters</a>
    <br />
    <br />
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
      <div class="description">Our AI chat bot or "Information Transformation" is capable of looking at our historical system logs and database records and can tell you a thing or two about your idea.</div>
      <br />
      <a href="/information-transformation" class="btn btn-large red lighten-2">Information Transformation</a>
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
    border-bottom: 1em solid #ee6e73;
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23222222' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
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