<script lang="ts">
  import { onMount } from 'svelte';

  import com from 'idea-optimizer'
  import { v4 as uuidv4 } from 'uuid';

  import user from '$lib/stores/user';
  import firebase from '$lib/stores/firebase';

  let userRecord: any;
  let firebaseRecord: any;
  let firebaseUid: string = '';
  let username: string = '';

  user.subscribe((value: any) => {
    if (value) {
      userRecord = JSON.parse(value)
      username = userRecord.username
		  firebaseUid = userRecord.firebase;
    }
  });

	firebase.subscribe((value: any) => {
    if (value) {
      firebaseRecord = JSON.parse(value)
		  firebaseUid = firebaseRecord.uid;
    }
	});

  onMount(async () => {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    let r = await db.user.findOne({
      username,
    }).exec()

    if (r) {
      user.set(JSON.stringify(r))
    }

    setTimeout(() => {
      M.updateTextFields();
    })
  })

  async function create () {
    if (username === '') return alert('Username must be defined.')

    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    let r = await db.user.insert({
      id: uuidv4(),
      firebase: firebaseUid,
      username,
    })

    user.set(JSON.stringify(r))
  }

  async function update () {
    if (username === '') return alert('Username must be defined.')

    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    let query = await db.user.find({
      username: userRecord.username,
    })

    await query.update({
      $set: {
        username,
      }
    })

    let r = await db.user.findOne({
      username,
    }).exec()

    user.set(JSON.stringify(r))
  }
</script>

<h4>1) User</h4>
<div class="card">
  <div class="card-action">
    <div class="card-title">
      {#if userRecord}
        Main <button class="btn disabled right">{userRecord.username}</button>
      {:else}
        Main <button class="btn disabled right"><i class="material-icons">close</i></button>
      {/if}
    </div>
    <p>With usernames we have a single label that can be used to idenify each other across all of our apps. This also means all of your profiles between our different enviornments exist under a single entity.</p>
  </div>
  {#if firebaseRecord}
    <div class="card-action">
      <div class="input-field">
        <input id="firebase" type="text" disabled class="validate" bind:value={firebaseRecord.uid}>
        <label for="firebase">Firebase UID</label>
      </div>
      <div class="input-field">
        <input id="firebase" type="text" disabled class="validate" bind:value={firebaseRecord.email}>
        <label for="firebase">Email Address</label>
      </div>
    </div>
  {/if}
  <div class="card-action">
    <div class="input-field">
      <input id="username" type="text" class="validate" bind:value={username}>
      <label for="username">Username</label>
    </div>
    {#if userRecord}
      <a href="#" class="btn" on:click={() => update()}><i class="material-icons left">account_circle</i>update</a>
    {:else}
      <a href="#" class="btn" on:click={() => create()}><i class="material-icons left">account_circle</i>submit</a>
    {/if}
  </div>
</div>