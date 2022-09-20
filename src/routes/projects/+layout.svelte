<script lang="ts">
  import { onMount } from 'svelte';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
  import Navigation from '$lib/projects/Navigation.svelte'
	
  let records: any

  onMount(async () => {
    let endpoint = `https://projects.trabur.workers.dev`;
    const init = {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };

    const response = await fetch(endpoint, init);
    const content: any = JSON.parse(await response.text())
    records = content.sort(function (a: any, b: any) {
      let bb: any = new Date(b.pushed_at)
      let aa: any = new Date(a.pushed_at)
      return bb - aa
    })
  })
</script>

<Header />

<Navigation projects={records} />
<slot />

<Footer />
