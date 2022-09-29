<script lang="ts">
  import { onMount } from "svelte";

  import com from 'idea-optimizer'
  import { v4 as uuidv4 } from 'uuid';
  import namespace from '$lib/stores/namespace';

	let namespaceRecord: any;
  let slug: string;
  let name: string;
  let description: string;

  namespace.subscribe((value: any) => {
    if (value) {
      namespaceRecord = JSON.parse(value)
    }
  });

  onMount(() => {
    M.updateTextFields();
  })

  async function submit (event: any) {
    event.preventDefault()

    if (slug === '') return alert('Slug must be defined.')
    if (name === '') return alert('Name must be defined.')
    if (description === '') return alert('Description must be defined.')

    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    let record = await db.idea.insert({
      id: uuidv4(),
      slug,
      name,
      description,
      namespace: namespaceRecord.id
    })

    window.location.href = `/client-area/ideas/view/${record.slug}`
  }
</script>

<div class="container">
  <h4>New Idea</h4>
  <form class="card" on:submit={(e) => submit(e)}>
    <div class="card-content">
      <span class="card-title">Details</span>
      <div class="row" >
        <div class="col m6">
          <div class="input-field">
            <input placeholder="Placeholder" id="slug" type="text" class="validate" bind:value={slug}>
            <label for="slug">Slug</label>
          </div>
        </div>
        <div class="col m6">
          <p>Only lowercase letters, dashes, and numbers are aloud; as seen in domain name.</p>
        </div>
      </div>
      <div class="row">
        <div class="col m6">
          <div class="input-field">
            <input placeholder="Placeholder" id="name" type="text" class="validate" bind:value={name}>
            <label for="name">Name</label>
          </div>
        </div>
        <div class="col m6">
          <p>Use a simple name that is descriptive.</p>
        </div>
      </div>
      <div class="row" style="margin-bottom: 0;">
        <div class="col m6">
          <div class="input-field">
            <textarea id="description" class="materialize-textarea" bind:value={description}></textarea>
            <label for="description">Description</label>
          </div>
        </div>
        <div class="col m6">
          <p>In 250 characters of less say something about the idea.</p>
        </div>
      </div>
    </div>
    {#if namespaceRecord}
      <div class="card-action">
        <span class="card-title">Namespace</span>
        <div class="row" style="margin-bottom: 0;">
          <div class="col m6 input-field">
            <input id="namespaceId" type="text" disabled class="validate" bind:value={namespaceRecord.slug}>
            <label for="namespaceId">Slug</label>
          </div>
          <div class="col m6">
            <p>This record will be created under the "{namespaceRecord.slug}" namespace silo. Navigate to the dashboard to change this value.</p>
          </div>
        </div>
      </div>
    {/if}
    <div class="card-action">
      <button class="btn btn-large red lighten-2" type='submit'>Submt</button>
      <a href="/client-area/ideas" class="btn btn-large white black-text">Cancel</a>
    </div>
  </form>
</div>