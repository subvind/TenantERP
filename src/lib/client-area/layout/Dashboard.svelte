<script>
  import Header from '../../Header.svelte'
  import MainNavigation from './MainNavigation.svelte';
  import Navigation from './Navigation.svelte';
  
  export let app = 'my-account'
  export let active = 'available-sessions'
</script>

<div class="row dashboard">
  <div class="col m1" style="background: #111; text-align: center;">
    <nav class="green lighten-2">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo center"><i class="material-icons">folder_open</i></a>
      </div>
    </nav>
    <br />
    <MainNavigation app={app} />
  </div>
  <div class="col m3" style="background: #222;">
    <nav class="black lighten-2">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">/community_folder/</a>
      </div>
    </nav>
    <Navigation app={app} active={active} />
  </div>
  <div class="col m8" style="background: #ddd; color: #333;">
    <Header active="clients" />
    <slot></slot>
  </div>
</div>



<style>
  .brand-logo i {
    margin: 0;
  }

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