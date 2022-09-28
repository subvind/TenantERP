<script lang="ts">
  import { onMount } from 'svelte';

  import com from 'idea-optimizer'
  import { v4 as uuidv4 } from 'uuid';

  import user from '$lib/stores/user';
  import namespace from '$lib/stores/namespace';
  import client from '$lib/stores/client';

  let userRecord: any;
  let namespaceRecord: string;
  let clientRecord: string;
  let completed: boolean = false;
  let firstName: string;
  let lastName: string;

  user.subscribe((value: any) => {
    if (value) {
      userRecord = JSON.parse(value)
    }
  });

  namespace.subscribe(value => {
    if (value) {
      namespaceRecord = JSON.parse(value)
    }
  });

  client.subscribe(value => {
    if (value) {
      clientRecord = JSON.parse(value)
    }
  });

  onMount(() => {
    M.updateTextFields();
  })
</script>

<h4>3) Client</h4>
{#if clientRecord}
  <div class="card">
    <div class="card-action">
      <div class="card-title">
        {#if completed}
          Permission <button class="btn disabled right"><i class="material-icons">check</i></button>
        {:else}
          Permission <button class="btn disabled right"><i class="material-icons">close</i></button>
        {/if}
      </div>
      <p>This will show on your profile within the selected namespace.</p>
    </div>
    <div class="card-action">
      <div class="input-field">
        <input id="firstName" type="text" class="validate" bind:value={firstName}>
        <label for="firstName">First Name</label>
      </div>
      <div class="input-field">
        <input id="lastName" type="text" class="validate" bind:value={lastName}>
        <label for="lastName">Last Name</label>
      </div>
      {#if completed}
        <a href="#" class="btn" on:click={() => changeNamespace()}><i class="material-icons left">account_circle</i>update</a>
      {:else}
        <a href="#" class="btn" on:click={() => changeNamespace()}><i class="material-icons left">account_circle</i>submit</a>
      {/if}
    </div>
  </div>
{:else}
  <div class="card">
    <div class="card-action">
      <div class="card-title">
        Disabled <button class="btn disabled right"><i class="material-icons">cancel</i></button>
      </div>
      <p>Complete step 2 before moving onto this step.</p>
    </div>
  </div>
{/if}