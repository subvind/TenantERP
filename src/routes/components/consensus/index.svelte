<script lang="ts">
  import { onMount } from 'svelte';

  import Clusters from '$lib/components/consensus/Clusters.svelte'
  import Nodes from '$lib/components/consensus/Nodes.svelte'
  import Packets from '$lib/components/consensus/Packets.svelte'

  onMount(() => {
    let el = document.querySelectorAll('.tabs')
    var instance = window['M'].Tabs.init(el, {});
  })
</script>

<div class="consensus container">
  <h1>Raft Consensus<br /> Algorithm</h1>
  <ul class="tabs">
    <li class="tab col s3"><a class="active" href="#tabs-1">Clusters</a></li>
    <li class="tab col s3"><a href="#tabs-2">Nodes</a></li>
    <li class="tab col s3"><a href="#tabs-3">Packets</a></li>
  </ul>
  <div id="tabs-1" class="col s12">
    <Clusters />
  </div>
  <div id="tabs-2" class="col s12">
    <Nodes />
  </div>
  <div id="tabs-3" class="col s12">
    <Packets />
  </div>
</div>
<br />
<br />

<style>
  h1 {
    font-size: 2em;
    text-align: center;
  }
  .consensus {
    min-height: 100vh;
  }
  .tabs {
    background: transparent;
  }
</style>