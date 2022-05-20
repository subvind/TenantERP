<script lang="ts">
  import { onMount } from 'svelte';

  import Clusters from '$lib/consensus/Clusters.svelte'
  import Nodes from '$lib/consensus/Nodes.svelte'
  import Messages from '$lib/consensus/Messages.svelte'
  import Commands from '$lib/consensus/Commands.svelte'
  import Logs from '$lib/consensus/Logs.svelte'

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
    <li class="tab col s3"><a href="#tabs-3">Messages</a></li>
    <li class="tab col s3"><a href="#tabs-4">Commands</a></li>
    <li class="tab col s3"><a href="#tabs-5">Logs</a></li>
  </ul>
  <div id="tabs-1" class="col s12">
    <Clusters />
  </div>
  <div id="tabs-2" class="col s12">
    <Nodes />
  </div>
  <div id="tabs-3" class="col s12">
    <Messages />
  </div>
  <div id="tabs-4" class="col s12">
    <Commands />
  </div>
  <div id="tabs-5" class="col s12">
    <Logs />
  </div>
</div>
<br />
<br />

<style>
  .consensus {
    min-height: 100vh;
  }
  .tabs {
    background: transparent;
  }
</style>