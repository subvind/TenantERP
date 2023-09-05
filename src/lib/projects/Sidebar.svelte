<script lang="ts">
  import { onMount } from "svelte";

  let githubPath = 'subvind'
  onMount(() => {
    M.updateTextFields();

  })
</script>

<ul class="menu" style="display: visible;">
  <li><a class="subheader">Projects</a></li>
</ul>
<div class="card github">
  <div class="card-content row">
    <form class="col s12">
      <div class="input-field">
        <input placeholder="" id="first_name" type="text" class="validate" bind:value={githubPath} >
        <label for="first_name">github.com/{githubPath}</label>
        <p>Notice: we are only showing repositories from users and orgs that are public. Private repos are not supported yet.</p>
      </div>
      <a href="#!" class="btn">save</a>
    </form>
  </div>
</div>

<style>
  .github {
    margin: 1em;
  }
	.menu {
    padding: 1em 0 0 1.2em;
    margin: 0;
	}
	.subheader {
		color: #fff;
		font-size: 1.2em;;
	}

</style>