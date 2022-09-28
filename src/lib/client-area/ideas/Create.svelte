<script lang="ts">
  import { onMount } from "svelte";

  import com from 'idea-optimizer'
  import { v4 as uuidv4 } from 'uuid';
  import namespace from '$lib/stores/namespace';

	let namespaceSlug: string;
	namespace.subscribe(value => {
		namespaceSlug = value;
	});

  let slug: string;
  let name: string;
  let description: string;

  onMount(() => {
    M.updateTextFields();
  })

  async function getNamespaceId(slug: string) {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    let record = await db.namespace.findOne({
      slug: slug 
    }).exec()

    return record.id
  }


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
      namespace: getNamespaceId(namespaceSlug)
    })

    window.location.href = `/client-area/ideas/view/${record.slug}`
  }
</script>

<div class="container">
  <form class="card" on:submit={(e) => submit(e)}>
    <div class="card-content">
      <span class="card-title">Create Idea</span>
      <div class="row">
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
      <div class="row">
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
    <div class="card-action">
      <button class="btn btn-large red lighten-2" type='submit'>Submt</button>
      <a href="/client-area/ideas" class="btn btn-large white black-text">Cancel</a>
    </div>
  </form>
</div>