<script lang="ts">
  import { onMount } from "svelte";

  import Banner from "$lib/Banner.svelte";
  import Create from "$lib/client-area/ideas/Create.svelte";
</script> 

<Banner icon="flag" name="Ideas" description="Innovation Management System">
  <a href="/client-area/dashboard" class="breadcrumb">Dashboard</a>
  <a href="/client-area/ideas" class="breadcrumb">Ideas</a>
  <a href="/client-area/ideas/create" class="breadcrumb">Create</a>
</Banner>
<br />
<br />
<Create />
<br />
<br />
<br />
<br />