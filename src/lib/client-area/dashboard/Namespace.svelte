<script lang="ts">
  import { onMount } from 'svelte';

  import com from 'idea-optimizer'
  import { v4 as uuidv4 } from 'uuid';

  import user from '$lib/stores/user';
  import namespace from '$lib/stores/namespace';
  import client from '$lib/stores/client';
  import Namespaces from './Namespaces.svelte';

  let slug: string;
  let userRecord: any;
  let namespaceRecord: any;
  let clientRecord: any;
  let isMemberOfNamespace: boolean;
  
  user.subscribe((value: any) => {
    if (value) {
      userRecord = JSON.parse(value)
    }
  });

  namespace.subscribe((value: any) => {
    if (value) {
      namespaceRecord = JSON.parse(value)
      slug = namespaceRecord.slug
      checkUserMembership()
    }
  });

  client.subscribe((value: any) => {
    if (value) {
      clientRecord = JSON.parse(value)
    } else {
      clientRecord = undefined
    }
    checkClientMembership()
  });

  onMount(async () => {
    M.updateTextFields();
  })

  async function toggleNamespace () {
    if (namespaceRecord.slug === slug) return; // already showing ns
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

    console.log('reset client')
    client.set('')
  }

  async function registerClientToNamespace () {
    if (userRecord === '') return alert('User record must exist.')
    if (namespaceRecord === '') return alert('Namespace record must exist.')

    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    let c = await db.client.insert({
      id: uuidv4(),
      namespace: namespaceRecord.id,
      user: userRecord.id,
    })
    client.set(JSON.stringify(c))
    console.log('created client', c)
    
    console.log('updating namespace')
    let query = await db.namespace.find({
      slug: namespaceRecord.slug,
    })

    let clients = []
    if (namespaceRecord.clients) {
      clients = namespaceRecord.clients.push(c.id)
    } else {
      clients = [c.id]
    }
    console.log('changed namespace clients', clients)

    await query.update({
      $set: {
        clients: clients
      }
    })

    let ns = await db.namespace.findOne({
      slug: namespaceRecord.slug,
    }).exec()
    console.log('updated namespace', ns)

    namespace.set(JSON.stringify(ns))
    isMemberOfNamespace = true
  }

  function checkClientMembership () {
    if (clientRecord && namespaceRecord) {
      if (clientRecord.namespace === namespaceRecord.id) {
        isMemberOfNamespace = true
      } else {
        isMemberOfNamespace = false
      }
      console.log('isMemberOfNamespace', isMemberOfNamespace)
    } else {
      isMemberOfNamespace = false
    }
  }

  async function checkUserMembership () {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()
    
    let allClients = await db.client.find().exec()
    console.log('all clients', JSON.parse(JSON.stringify(allClients)))

    if (namespaceRecord.clients && namespaceRecord.clients.length) {
      console.log('namespaceRecord.clients', namespaceRecord.clients)
      let c = await db.client.findOne({
        selector: {
          user: userRecord.id,
          namespace: namespaceRecord.id
        }
      }).exec()
      console.log('userRecord.id', userRecord.id)
      console.log('namespaceRecord.id', namespaceRecord.id)
      console.log('check if user is client in namespace result', c)

      if (c) {
        console.log('user is already a client of this namespace')
        client.set(JSON.stringify(c))
        
      } else {
        console.log('user is not a client of this namespace')
      }
    } else {
      client.set('')
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
      <a href="#" class="btn black" on:click={() => {toggleNamespace()}}><i class="material-icons left">swap_calls</i>select</a>
      <Namespaces bind:slug={slug} />
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
        {#if isMemberOfNamespace}
          <div class="card-action">
            <div class="card-title">
              Client <button class="btn disabled right"><i class="material-icons">check</i></button>
            </div>
            <p>As a team member of the "{namespaceRecord.slug}" namespace you have permission to view all of your related data thoughout our client area.</p>
          </div>
        {:else}
          {#if namespaceRecord.clients && namespaceRecord.clients.length}
            <div class="card-action">
              <div class="card-title">
                Client <button class="btn disabled right"><i class="material-icons">close</i></button>
              </div>
              <p>You must become a member of this namespace before proceeding.</p>
              {#if namespaceRecord.inviteOnly}
                <a href="#" class="btn black"><i class="material-icons left">people</i>request an invite</a>
              {:else}
                <a href="#" class="btn black" on:click={() => registerClientToNamespace()}><i class="material-icons left">people</i>join namespace</a>
              {/if}
            </div>
          {:else}
            <div class="card-action">
              <div class="card-title">
                Initialized <button class="btn disabled right"><i class="material-icons">close</i></button>
              </div>
              <p>This namespace has yet to be owned and operated.</p>
              <a href="#" class="btn black" on:click={() => registerClientToNamespace()}><i class="material-icons left">add</i>register</a>
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