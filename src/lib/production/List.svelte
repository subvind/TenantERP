<script lang="ts">
  export let data: any
</script>

<div class="container">
  <h1 class="title">Production</h1>
  {#each data as record, index}
    {#if index !== 0}
      <div style="border-left: 1em solid #000; height: 5em; margin-left: calc(390px / 2);"></div>
    {/if}
    <div class="record">
      <div class="frame">
        <iframe id="frame" title="demo" src={record.url} frameborder="0"></iframe>
      </div>
      <br />
      <div class="details card">
        <div class="card-content">
          <div class="card-title">
            {record.name}
          </div>
            <a href={record.git} target="_blank" class="btn white black-text">Git</a>
            {#if record.type === 'backend'}
              <a href={record.apiTests} target="_blank" class="btn white black-text">API Tests</a>
              <a href={record.library} target="_blank" class="btn white black-text">Library</a>
              <a href={record.restApi} target="_blank" class="btn white black-text">POSTMAN DOCS</a>
            {/if}
            {#if record.type === 'global'}
              <a href={record.apiTests} target="_blank" class="btn white black-text">API Tests</a>
              <a href={record.restApi} target="_blank" class="btn white black-text">POSTMAN DOCS</a>
            {/if}
            {#if record.type === 'web'}
              <a href={record.e2eTests} target="_blank" class="btn white black-text">E2E Tests</a>
            {/if}
            <a href={record.statusPage} target="_blank" class="btn white black-text">Status Page</a>
            <a href={record.pipeline} target="_blank" class="btn white black-text">Pipeline</a>
            <a href={record.kanban} target="_blank" class="btn white black-text">Kanban</a>
        </div>
        <div class="card-action">
          <a href={record.url} target="_blank" class="btn blue lighten-2">LAUNCH APP</a>
        </div>
      </div>
      <br />
    </div>
  {/each}
</div>

<style>
  .btn {
    margin: 0 0.5em 0.5em 0;
  }
	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
    color: #000;
	}

  .record {
    min-height: 390px;
  }
  .details {
    margin-left: 390px;
  }

  .frame {
    width: 390px;
    height: 390px;
    overflow: hidden;
    border: 1em solid #000;
    float: left;
  }

  #frame {
    width: 1200px;
    height: 1200px;
    border: 0;
    background: #eee;
  }

  #frame {
    -ms-zoom: 0.3;
    -moz-transform: scale(0.3);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.3);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.3);
    -webkit-transform-origin: 0 0;
  }
</style>