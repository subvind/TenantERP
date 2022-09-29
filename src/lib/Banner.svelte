<script lang="ts">
  import namespace from "$lib/stores/namespace";
  import idea from "$lib/stores/idea";

  let namespaceRecord: any;
  let ideaRecord: any;
  export let name: string;
  export let icon: string | null;
  export let description: string | null = '';
  
  namespace.subscribe((value: any) => {
    if (value) {
      namespaceRecord = JSON.parse(value)
    }
  });

  idea.subscribe((value: any) => {
    if (value) {
      ideaRecord = JSON.parse(value)
    }
  });
</script>

<div class="banner">
  <br />
  <br />
  <div class="container">
    <div class="row" style="margin-bottom: 0;">
      <div class="col m6">
        {#if description}
          <h2 class="">{description}</h2>
        {/if}
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
      <div class="col m6">
        <div style="text-align: right;">
          {#if namespaceRecord}
            <a href="#" class="btn right black">
              {namespaceRecord.slug}
            </a>
            <a href="#" class="btn right white black-text">
              <i class="material-icons left">space_bar</i>namespace
            </a>
            <br/>
          {/if}
          {#if ideaRecord}
            idea: {ideaRecord.slug}<br/>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</div>


<style>
  .banner {
    background: #aaa;
    min-height: 100px;
    overflow: hidden;
  }
  .banner h1 {
    font-size: 3em;
    margin: 0 0 0.2em;
  }
  .banner h2 {
    font-size: 1.5em;
    margin: 0 0 0.5em;
  }
  :global(.banner .breadcrumb),
  :global(.banner .breadcrumb:before) {
    color: #000;
  }
</style>