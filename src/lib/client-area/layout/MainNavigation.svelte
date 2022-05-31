<script>
  import { onMount } from "svelte";
  
  export let app = ''

  onMount(() => {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = window['M'].Tooltip.init(elems, {});
  })
</script>

<div class="nav">
  <a href="/client-area/dashboard" data-position="right" data-tooltip="Dashboard" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'dashboard' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">dashboard</i></a>
  <a href="/client-area/production" data-position="right" data-tooltip="Production" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'production' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">public</i></a>
  <a href="/client-area/solutions" data-position="right" data-tooltip="Solutions" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'solutions' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">lightbulb_outline</i></a>
  <a href="/client-area/apps" data-position="right" data-tooltip="Apps" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'apps' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">store</i></a>
  <a href="/client-area/platforms" data-position="right" data-tooltip="Platforms" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'platforms' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">folder</i></a>
  <a href="/client-area/projects" data-position="right" data-tooltip="Projects" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'projects' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">code</i></a>

  <a href="/client-area/my-account" data-position="right" data-tooltip="My Account" class={`tooltipped my-account btn-floating btn-large waves-effect waves-light ${app === 'my-account' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">lock</i></a>
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