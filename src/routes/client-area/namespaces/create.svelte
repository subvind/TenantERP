<script lang="ts">
  import Dashboard from '$lib/client-area/layout/Dashboard.svelte'
  import axios from 'axios'

  let slug = ''

  async function submit (event: any) {
    event.preventDefault()
    let namespace = await axios.post('https://namespaces.trabur.workers.dev', {
      slug: slug
    })

    console.log('namespace')
  }
</script>

<svelte:head>
	<title>Namespaces - Client Area - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Dashboard app="namespaces" active="namespaces">
  <div class="padded">

    <a href="/client-area/namespaces" class="btn btn-large grey right">list</a>
    <h3 class="title">Create Namespace:</h3>
    <br />
    <div class="card">
      <div class="card-content">
        <form on:submit={(e) => submit(e)}>
          <div class="row">
            <div class="input-field col s6">
              <input id="slug" type="text" class="validate" bind:value={slug}>
              <label for="slug">Slug</label>
            </div>
            <div class="input-field col s6">
              <div>This will be the id that will be used to reference this namespace. It should be lowercase, no spaces, letters or numbers or dashs are allowed.</div>
            </div>
          </div>
          <button type="submit" class="btn red lighten-2">submit</button>
        </form>
      </div>
    </div>
  </div>
</Dashboard>

<style>
  .title {
    margin: 0;
  }
  .padded {
    padding: 1em;
  }
</style>