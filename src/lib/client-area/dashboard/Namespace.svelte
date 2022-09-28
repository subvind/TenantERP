<script lang="ts">
  import { onMount } from 'svelte';

  import com from 'idea-optimizer'
  import { v4 as uuidv4 } from 'uuid';

  import user from '$lib/stores/user';
  import namespace from '$lib/stores/namespace';

  let slug: string;
  let userRecord: any;
  let namespaceRecord: any;
  let clientRecord: any;
  
  user.subscribe((value: any) => {
    if (value) {
      userRecord = JSON.parse(value)
    }
  });

  namespace.subscribe(value => {
    if (value) {
      namespaceRecord = JSON.parse(value)
      slug = namespaceRecord.slug
    }
  });

  onMount(async () => {

    M.updateTextFields();
  })

  async function toggleNamespace () {
    if (slug === '') return alert('Namespace Slug must be defined.')

    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    console.log('see if record already exists', slug)
    let check = await db.namespace.findOne({
      selector: {
        slug: slug
      }
    }).exec()

    console.log('check', check)
    if (check) {
      console.log('namespace already exists')
      namespace.set(JSON.stringify(check))
    } else {
      console.log('creating namespace')
      let r = await db.namespace.insert({
        id: uuidv4(),
        slug,
      })
      namespace.set(JSON.stringify(r))
    }
  }
</script>

<h4>2) Namespace</h4>
{#if userRecord}
  <div class="card">
    <div class="card-action">
      <div class="card-title">
        {#if namespaceRecord}
          Selected <button class="btn disabled right">{namespaceRecord.slug}</button>
        {:else}
          Selected <button class="btn disabled right"><i class="material-icons">close</i></button>
        {/if}
      </div>
      <p>This is like a folder that exists in order to silo out ideas from one another.</p>
    </div>
    <div class="card-action">
      <div class="card-title">
        Switch
      </div>
      <p>Toggle between one namespace and another.</p>
      <div class="input-field">
        <input id="last_name" type="text" class="validate" bind:value={slug}>
        <label for="last_name">Namespace Slug</label>
      </div>
      <a href="#" class="btn" on:click={() => toggleNamespace()}><i class="material-icons left">swap_calls</i>select</a>
    </div>
      {#if namespaceRecord}
        {#if namespaceRecord.clients && namespaceRecord.clients.length}
          <div class="card-action">
            <div class="card-title">
              Initialized <button class="btn disabled right"><i class="material-icons">check</i></button>
            </div>
            <p>This namespace is owned and operated by clients.</p>
          </div>
        {/if}
        {#if clientRecord}
          <div class="card-action">
            <div class="card-title">
              Client <button class="btn disabled right"><i class="material-icons">check</i></button>
            </div>
            <p>As a member of the "{namespaceRecord.slug}" namespace you have permission to view all of your related data thoughout our client area.</p>
          </div>
        {:else}
          {#if namespaceRecord.clients && namespaceRecord.clients.length}
            <div class="card-action">
              <div class="card-title">
                Client <button class="btn disabled right"><i class="material-icons">close</i></button>
              </div>
              <p>You must become a member of this namespace before proceeding.</p>
              {#if namespaceRecord.inviteOnly}
                <a href="#" class="btn"><i class="material-icons left">people</i>request an invite</a>
              {:else}
                <a href="#" class="btn"><i class="material-icons left">people</i>join namespace</a>
              {/if}
            </div>
          {:else}
            <div class="card-action">
              <div class="card-title">
                Initialized <button class="btn disabled right"><i class="material-icons">close</i></button>
              </div>
              <p>This namespace has yet to be owned and operated.</p>
              <a href="#" class="btn"><i class="material-icons left">add</i>register</a>
            </div>
          {/if}
        {/if}
      {/if}
  </div>
{:else}
  <div class="card">
    <div class="card-action">
      <div class="card-title">
        Disabled <button class="btn disabled right"><i class="material-icons">cancel</i></button>
      </div>
      <p>Complete step 1 before moving onto this step.</p>
    </div>
  </div>
{/if}