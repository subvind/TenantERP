<script>
  export let app = ''
</script>

<div class="nav">
  <a href="/admin-control-panel" class={`btn-floating btn-large waves-effect waves-light ${app === 'admin-control-panel' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">security</i></a>
  <a href="/client-area" class={`btn-floating btn-large waves-effect waves-light ${app === 'client-area' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">card_membership</i></a>
  <a href="/webmaster" class={`btn-floating btn-large waves-effect waves-light ${app === 'webmaster' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">store</i></a>
  <a href="/my-account" class={`my-account btn-floating btn-large waves-effect waves-light ${app === 'my-account' ? 'blue lighten-2' : 'grey'}`}><i class="material-icons">lock</i></a>
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