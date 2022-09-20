<script lang="ts">
  import { onMount } from 'svelte';
	import '../app.css';

	onMount(async () => {
		console.log('layout main')
	})
</script>

<slot />
