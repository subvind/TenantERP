
<script lang="ts">
  import { onMount } from 'svelte';
  import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

  export let auth: any

	let email = ''
  let password = ''
  let passwordRepeat = ''
  let username = ''
  let subscribe = true
  let agreement = false

  async function login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        // localStorage.setItem('token', response.data)
        // let token = parseJwt(response.data)
        // window.location.href = `/members/${token.userId}`
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('unable to fetch auth token')
      });
  }

	async function register() {
    if (email === '') return alert('Email must be defined.')
    if (password === '') return alert('Password must be defined.')
    if (passwordRepeat === '') return alert('Confirm Password must be defined.')
    if (passwordRepeat !== password) return alert('Passwords must match.')
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage)
      });
  }
</script>

<div class="contain">
  <h1 class="title">
    Register / Join
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
        <div class="input-field col s12">
          <input id="passwordRepeat" type="password" class="validate" bind:value={passwordRepeat}>
          <label for="passwordRepeat">Password Confirm</label>
        </div>
        <br />
        <button style="margin-left: 1em;" type='submit' class="waves-effect blue lighten-2 btn" on:click={() => register()}>Submit</button>
      </div>
    </div>
  </div>
  <div>
    <a href="/clients/verify" class="waves-effect red lighten-2 btn" style="float: right;">Verify</a>
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
    font-size: 2em;
    font-weight: 900;
    text-align: center;
  }
</style>