
<script lang="ts">
  import { onMount } from 'svelte';
  import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

  export let auth: any

	let email = ''
  let password = ''

  async function login() {
    if (email === '') return alert('Email must be defined.')
    if (password === '') return alert('Password must be defined.')

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        // localStorage.setItem('token', response.data)
        // let token = parseJwt(response.data)
        window.location.href = `/client-area/dashboard`
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }
</script>

<div class="contain">
  <h1 class="title">
    Login
  </h1>
  <div class="card">
    <div class="card-content">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" bind:value={email}>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" bind:value={password}>
          <label for="password">Password</label>
        </div>
        <br />
        <button style="margin-left: 1em;" type='submit' class="waves-effect blue lighten-2 btn" on:click={() => login()}>Submit</button>
      </div>
    </div>
  </div>
  <div>
    <a href="/client-area/join" class="waves-effect red lighten-2 btn" style="float: right;">Register</a>
    <br />
    <br />
    <br />
    <br />
  </div>
</div>

<style>
  .contain {
    max-width: 400px;
    margin: 0 auto;
  }

	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
	}
</style>