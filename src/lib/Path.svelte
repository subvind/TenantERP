<script>
  import { onMount } from "svelte";
</script>

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
    <h3 class="title">
      - nomy.ERP
    </h3>
    <div class="bump">
      <div class="description">a erpnomy frontend and backend module that covers a business' Enterprise Resource Planning (ERP) needs such as orders and inventory management plus it is capable of hosting many catalogs of products behind many storefronts.</div>
      <!-- <br /> -->
      <!-- <a href="/platforms" class="btn btn-large red lighten-2"><i class="material-icons left">folder</i>Platforms</a> -->
    </div>
  </div>
</div>
<div class="steps">
  <div class="container">
    <h3 class="title">
      - nomy.DESK
    </h3>
    <div class="bump">
      <div class="description">a desknomy frontend and backend module which has a support desk admin area for employees plus it is capable of supporting many suppliers and customers behind many support desks.</div>
      <!-- <br /> -->
      <!-- <a href="/apps" class="btn btn-large red lighten-2"><i class="material-icons left">extension</i>Applications</a> -->
    </div>
  </div>
</div>
<div class="steps">
  <div class="container">
    <h3 class="title">
      - nomy.TUBE
    </h3>
    <div class="bump">
      <div class="description">a tubenomy frontend and backend module which has a dashboard for content creators plus it is capable of hosting many catalogs of videos behind many galleries.</div>
      <!-- <br /> -->
      <!-- <a href="/contact-me" class="btn btn-large red lighten-2"><i class="material-icons left">face</i>contact me</a> -->
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
    padding-left: 2em;
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

  .steps {
    background: transparent;
	}
  .steps .container {
    border-left: 1em solid #000;
    padding-left: 1em;
  }
  .steps .title {
    font-weight: 900;
    text-align: left;
    margin: 0;
    color: #000;
  }
  .steps .description {
    color: #000;
    font-size: 1em;
  }
  .container {
    padding: 2em 0;
  }
</style>