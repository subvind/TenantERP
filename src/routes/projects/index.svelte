<script lang="ts">
  import { onMount } from "svelte";

  import { Octokit } from 'octokit';
  // import { Octokit } from "@octokit/rest";

  // https://octokit.github.io/rest.js/v18
  
  onMount(async () => {
    const octokit = new Octokit({ auth: `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` });
    let data = await octokit.rest.repos.listForUser({ username: 'trabur' })
    console.log(data)
  })
</script>
<!-- 
<br />hello
<br />hello
<br />hello
<br />hello
<br />hello -->