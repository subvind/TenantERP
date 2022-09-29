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
  <a href="/client-area/ideas" data-position="right" data-tooltip="Ideas" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'ideas' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">flag</i></a>
  <a href="/client-area/domain-names" data-position="right" data-tooltip="Domain Names" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'websites' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">dns</i></a>
  <a href="/client-area/platforms" data-position="right" data-tooltip="Platforms" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'platforms' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">folder</i></a>
  <a href="/client-area/tenants" data-position="right" data-tooltip="Tenants" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'tenants' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">business</i></a>
  <a href="/client-area/chatbots" data-position="right" data-tooltip="Chatbots" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'chatbots' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">chat</i></a>
  <a href="/client-area/clients" data-position="right" data-tooltip="Clients" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'clients' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">people</i></a>
  <a href="/client-area/access-keys" data-position="right" data-tooltip="Access Keys" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'access-keys' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">key</i></a>
  <a href="/client-area/license-keys" data-position="right" data-tooltip="License Keys" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'license-keys' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">badge</i></a>
  <a href="/client-area/reports" data-position="right" data-tooltip="Reports" class={`tooltipped btn-floating btn-large waves-effect waves-light ${app === 'reports' ? 'red lighten-2' : 'grey'}`}><i class="material-icons">receipt</i></a>
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