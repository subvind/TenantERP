<script>
  import { onMount } from "svelte";

  onMount(() => {
    let el = document.querySelectorAll('.sidenav')
    var instance = window['M'].Sidenav.init(el, {});
    instance.isFixed = true
  })
</script>

<nav>
  <div class="nav-wrapper">
    <form class="explore">
      <div class="input-field">
        <input id="search" type="search" required placeholder="Explore" style="border: 0px !important; color: #111;">
        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        <i class="material-icons">close</i>
      </div>
    </form>
  </div>
</nav>
