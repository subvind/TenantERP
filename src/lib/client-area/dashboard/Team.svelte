<script lang="ts">
  import { onMount } from 'svelte';

  import com from 'idea-optimizer'
  import { v4 as uuidv4 } from 'uuid';

  import user from '$lib/stores/user';
  import namespace from '$lib/stores/namespace';
  import client from '$lib/stores/client';

  let userRecord: any;
  let namespaceRecord: any;
  let clientRecord: any;
  let inviteOnly: boolean;
  let username: string;
  let team: any;

  user.subscribe((value: any) => {
    if (value) {
      userRecord = JSON.parse(value)
    }
  });

  namespace.subscribe(value => {
    if (value) {
      namespaceRecord = JSON.parse(value)
      inviteOnly = namespaceRecord.inviteOnly
      loadMembers()
    }
  });

  client.subscribe(value => {
    if (value) {
      clientRecord = JSON.parse(value)
    } else {
      clientRecord = null
    }
  });

  onMount(() => {
    M.updateTextFields();
  })

  async function loadMembers () {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    team = await db.client.find({
      selector: {
        namespace: namespaceRecord.id
      }
    }).exec()
  }

  async function toggleInviteOnly () {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    let query = await db.namespace.findOne(namespaceRecord.id)

    await query.update({
      $set: {
        inviteOnly: inviteOnly
      }
    })

    let ns = await db.namespace.findOne(namespaceRecord.id).exec()

    namespace.set(JSON.stringify(ns))
  }
</script>

<h4>4) Team</h4>
{#if clientRecord && clientRecord.firstName && clientRecord.lastName}
  <div class="card">
    <div class="card-action">
      <div class="card-title">
        {#if clientRecord.firstName && clientRecord.lastName}
          Member <button class="btn disabled right">{clientRecord.firstName} {clientRecord.lastName}</button>
        {:else}
          Member <button class="btn disabled right"><i class="material-icons">close</i></button>
        {/if}
      </div>
      <p>Those that will be supporting the idea(s) under the "{namespaceRecord.slug}" namespace silo by using this client area. </p>
    </div>
    <div class="card-action">
      <div class="switch right" style="margin: 0.4em 0;">
        <label>
          Off
          <input type="checkbox" bind:checked={inviteOnly} on:click={() => toggleInviteOnly()}>
          <span class="lever"></span>
          On
        </label>
      </div>
      <div class="card-title">Invite Only</div>
      {#if inviteOnly}
        <p>Only people who have "grant" next to their name will be allowed to access this namespace.</p>
      {:else}
        <p>Only people who have "deny" next to their name will be blocked from accessing this namespace.</p>
      {/if}
    </div>
    <div class="card-action">
      <div class="card-title">
        Clients <button class="btn disabled right"><i class="material-icons">check</i></button>
      </div>
      <br />
      {#if team && team.length}
        <table class="centered" style="border: 1px solid #eee;">
          <thead>
            <tr>
                <th>Identity</th>
                <th>Authorization</th>
            </tr>
          </thead>
          <tbody>
            {#each team as member}
              <tr>
                <td>{member.firstName} {member.lastName}</td>
                <td>grant</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    </div>
    <div class="card-action">
      <a href="/client-area/clients" class="btn black"><i class="material-icons left">people</i>view all</a>
    </div>
  </div>
{:else}
  <div class="card">
    <div class="card-action">
      <div class="card-title">
        Disabled <button class="btn disabled right"><i class="material-icons">cancel</i></button>
      </div>
      <p>Complete step 3 before moving onto this step.</p>
    </div>
  </div>
{/if}