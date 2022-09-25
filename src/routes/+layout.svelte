<script lang="ts">
  import { onMount } from 'svelte';
	
	import '../app.css';

  import { backend, sidebarVisibility, sidebarActive, sidebarMode } from '../stores.js';
  import pro from 'fleet-optimizer'

  let loading = true
	onMount(async () => {
		console.log('layout main')
    backend.set(`https://pro.istrav.dev`)

    loading = false

    setTimeout(async () => {
      let fleetOptimizer = pro.FleetOptimizer.getInstance()
      let database = await fleetOptimizer.database(pro.database.browser)
    }, 0)
	})
</script>

<slot />
