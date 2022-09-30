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
  let ideas: any;

  user.subscribe((value: any) => {
    if (value) {
      userRecord = JSON.parse(value)
    }
  });

  namespace.subscribe(value => {
    if (value) {
      namespaceRecord = JSON.parse(value)
      inviteOnly = namespaceRecord.inviteOnly
      loadIdeas()
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

  async function loadIdeas () {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    ideas = await db.idea.find({
      selector: {
        namespace: namespaceRecord.id
      }
    }).exec()
  }
</script>

<h4>5) System</h4>
{#if clientRecord && clientRecord.firstName && clientRecord.lastName}
  <div class="card">
    <div class="card-action">
      <div class="card-title">
        {#if ideas && ideas.length}
          Ideas <button class="btn disabled right">{ideas.length}</button>
        {:else}
          Ideas <button class="btn disabled right"><i class="material-icons">close</i></button>
        {/if}
      </div>
      <p>Start with a simple concept then little by little add more and more details to it.</p>
      {#if ideas && ideas.length}
        <table class="" style="border: 1px solid #eee;">
          <thead>
            <tr>
                <th>Identity</th>
                <th style="text-align: right;">Select</th>
            </tr>
          </thead>
          <tbody>
            {#each ideas as idea}
              <tr>
                <td><span style="font-weight: 900;">{idea.name}</span><br />{idea.description}</td>
                <td style="text-align: right;"><a href={`/client-area/ideas/view/${idea.slug}`} class="btn white black-text">{idea.slug}</a></td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
      <br />
      <a href="/client-area/ideas" class="btn black"><i class="material-icons left">flag</i>view all</a>
    </div>
  </div>
{:else}
  <div class="card">
    <div class="card-action">
      <div class="card-title">
        Disabled <button class="btn disabled right"><i class="material-icons">cancel</i></button>
      </div>
      <p>Complete step 4 before moving onto this step.</p>
    </div>
  </div>
{/if}