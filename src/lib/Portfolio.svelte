<script>
  import { onMount } from "svelte";

  import Cradle from "./Cradle.svelte";
</script>

<div class="portfolio">
  <div class="container">
    <h1 class="title">
      Portfolio
    </h1>
    <marquee direction="right">isTrav, DocBookMD, Staples, Atomic Axis, PNI Media, Gritness, HVAC Buddy, FleetGrid, /community_folder/</marquee>
  </div>

</div>
<div style="text-align: center;">
  <Cradle />
</div>

<style>
	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
    color: #fff;
	}
	.portfolio {
		background: #000;
	}
  .container {
    padding: 5em 0;
  }
  marquee {
    color: #fff;
    font-size: 2em;
  }
</style>