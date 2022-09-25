<script lang="ts">
  export let name: string;
  export let icon: string | null;
</script>

<div class="banner">
  <br />
  <br />
  <div class="container">
    <h1>
      {#if icon}<i class={`material-icons small`}>{icon}</i>{/if}
      {name}
    </h1>
    <nav style="background: transparent; box-shadow: none; height: 32px; line-height: 32px;">
      <div class="nav-wrapper">
        <div class="col s12">
          <slot></slot>
        </div>
      </div>
    </nav>
  </div>
  <br />
  <br />
</div>


<style>
  .banner {
    background: #ddd;
    min-height: 100px;
    overflow: hidden;
  }
  .banner h1 {
    font-size: 3em;
    margin: 0 0 0.2em;
  }
  :global(.banner .breadcrumb),
  :global(.banner .breadcrumb:before) {
    color: #000;
  }
</style>