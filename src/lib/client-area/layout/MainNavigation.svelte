<script>
  import { onMount } from "svelte";
  
  export let app = ''

  onMount(() => {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = window['M'].Tooltip.init(elems, {});
  })
</script>

<div class="nav">
  <a href="/client-area/dashboard" data-position="right" data-tooltip="Dashboard" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'dashboard' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">dashboard</i></a>
  <a href="/client-area/ideas" data-position="right" data-tooltip="Ideation" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'ideas' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">flag</i></a>
  <a href="/client-area/foundation" data-position="right" data-tooltip="Foundation" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'websites' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">layers</i></a>
  <a href="/client-area/manage" data-position="right" data-tooltip="Manage" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'platforms' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">mood</i></a>
  <a href="/client-area/innovate" data-position="right" data-tooltip="Innovate" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'tenants' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">trending_up</i></a>
  <a href="/client-area/system" data-position="right" data-tooltip="System" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'system' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">traffic</i></a>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br /><!-- we need extra brs because if small window height -->

  <a href="/client-area/my-account" data-position="right" data-tooltip="My Account" class={`tooltipped my-account btn-floating btn-large waves-effect waves-light ${app === 'my-account' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">lock</i></a>
</div>

<style>
  .nav {
    text-align: center;
    display: inline-flex;
    flex-direction: column;
  }

  .nav a {
    margin: 0.5em;
  }

  .my-account {
    position: absolute;
    bottom: 1em;
  }
</style>