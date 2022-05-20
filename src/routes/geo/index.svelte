<script context="module" lang="ts">
  declare module 'leaflet';
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  import Map from '$lib/geo/Map.svelte'
  import Things from '$lib/geo/Things.svelte'
  import Connections from '$lib/geo/Connections.svelte'
  import Scramblings from '$lib/geo/Scramblings.svelte'
  import About from '$lib/geo/About.svelte'

  onMount(() => {
    let el = document.querySelectorAll('.tabs')
    var instance = window['M'].Tabs.init(el, {});
  })
</script>

<div class="container">
  <h1>Geographical Spatial<br /> Networking</h1>
  <Map />
  <br />
  <br />
  <ul class="tabs">
    <li class="tab col s3"><a class="active" href="#tabs-1">Things</a></li>
    <li class="tab col s3"><a href="#tabs-2">Connections</a></li>
    <li class="tab col s3"><a href="#tabs-3">Scramblings</a></li>
    <li class="tab col s3"><a href="#tabs-4">About</a></li>
  </ul>
  <div id="tabs-1" class="col s12">
    <Things />
  </div>
  <div id="tabs-2" class="col s12">
    <Connections />
  </div>
  <div id="tabs-3" class="col s12">
    <Scramblings />
  </div>
  <div id="tabs-4" class="col s12">
    <About />
  </div>
</div>
<br />
<br />

<style>
  h1 {
    font-size: 2em;
    text-align: center;
  }
  .tabs {
    background: transparent;
  }
</style>