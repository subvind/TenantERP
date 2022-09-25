<script>
  import Header from '../../Header.svelte'
  import MainNavigation from './MainNavigation.svelte';
  
  export let app = 'my-account'
</script>

<Header />
<div class="row dashboard">
  <div class="col m1" style="background: #555; text-align: center;">
    <br />
    <br />
    <br />
    <br />
    <MainNavigation app={app} />
  </div>
  <div class="col m11" style="background: #f4f4f4; color: #333; padding-top: 64px;">
    <slot></slot>
  </div>
</div>



<style>
  .dashboard {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    margin: 0;
    padding: 0;
  }

  .dashboard > .col {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
</style>