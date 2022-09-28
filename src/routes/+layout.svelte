<script lang="ts">
  import { onMount } from 'svelte';
	
	import '../app.css';

  import backend from '$lib/stores/backend';
  import com from 'idea-optimizer'

  let loading = true
	onMount(async () => {
		console.log('layout main')
    backend.set(`https://api.istrav.dev`)

    loading = false

    setTimeout(async () => {
      let ideaOptimizer = com.IdeaOptimizer.getInstance()
      let database = await ideaOptimizer.database(com.database.browser)
    }, 0)
	})
</script>

<slot />
