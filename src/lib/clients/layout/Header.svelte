<script>
  import { onMount } from "svelte";

  import Email from "./Email.svelte";
  import Search from "./Search.svelte";

  export let app = 'client-area'

  onMount(() => {
    let el = document.querySelectorAll('.sidenav')
    var instance = window['M'].Sidenav.init(el, {});
    instance.isFixed = true
  })
</script>


<div class="row header">
  <div class="col m6">
    {#if app === 'admin-control-panel'}
      <Search />
    {/if}
    {#if app === 'client-area'}
      <Search />
    {/if}
    {#if app === 'webmaster'}
      <Search />
    {/if}
    {#if app === 'my-account'}
      <Email />
    {/if}
  </div>
  <div class="col m6">
    <nav>
      {#if app === 'my-account'}
        <ul class="right">
          <li>
            <a href="/auth/logout">Logout</a>
          </li>
        </ul>
      {/if}
    </nav>
  </div>
</div>

<style>
  .header {
    margin: 0;
  }
  
  .header > .col {
    height: 100%;
    overflow: auto;
    margin: 0;
    padding: 0;

  }
</style>