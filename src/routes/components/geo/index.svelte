<script context="module" lang="ts">
  declare module 'leaflet';
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  import Map from '$lib/components/geo/Map.svelte'
  import Machines from '$lib/components/geo/Machines.svelte'
  import Connections from '$lib/components/geo/Connections.svelte'
  import Logs from '$lib/components/geo/Logs.svelte'
  import About from '$lib/components/geo/About.svelte'

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
    <li class="tab col s3"><a class="active" href="#tabs-1">Machines</a></li>
    <li class="tab col s3"><a href="#tabs-2">Connections</a></li>
    <li class="tab col s3"><a href="#tabs-3">Logs</a></li>
    <li class="tab col s3"><a href="#tabs-4">About</a></li>
  </ul>
  <div id="tabs-1" class="col s12">
    <Machines />
  </div>
  <div id="tabs-2" class="col s12">
    <Connections />
  </div>
  <div id="tabs-3" class="col s12">
    <Logs />
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