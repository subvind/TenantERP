<script lang="ts">
  import { onMount } from 'svelte';
  import Dashboard from '$lib/client-area/layout/Dashboard.svelte'
  import axios from 'axios'

  let namespaces: any[] = []

  onMount(async () => {
    let req = await axios.get('https://namespaces.trabur.workers.dev')
    namespaces = req.data
  })
</script>

<svelte:head>
	<title>Namespaces - Client Area - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Dashboard app="namespaces" active="namespaces">
  <div class="padded">

    <a href="/client-area/namespaces/create" class="btn btn-large grey right">create</a>
    <h3 class="title">List of Namespaces:</h3>
    <br />
    <div class="card">
      <div class="card-content">
        <table>
          <thead>
            <tr>
                <th>Slug</th>
                <th>Item Name</th>
                <th>Action</th>
            </tr>
          </thead>
  
          <tbody>
            {#each namespaces as namespace}
              <tr>
                <td>{namespace.slug}</td>
              </tr>
            {/each}
          </tbody>
        </table>  
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