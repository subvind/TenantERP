<script lang="ts">
  export let selected: string
  export let apps: any
</script>

<div class="container">
	<div class="row">
		{#each apps as app}
			<div class="col s12 m6">
				<div class="card">
					<div class="card-image">
						<!-- <img src="images/sample-1.jpg"> -->
					</div>
					<div class="card-content">
						<span class="card-title">{app.name}</span>
						<p>I am a very simple card. I am good at containing small bits of information.
						I am convenient because I require little markup to use effectively.</p>
					</div>
					<div class="card-action">
            {#if app.website == selected}
              <a class="btn red lighten-2" href={app.url}>{app.website}</a>
            {:else}
						  <a class="btn black white-text" href={app.url}>{app.website}</a>
            {/if}
					</div>
				</div>
			</div>
		{/each}
  </div>
</div>