<script lang="ts">
  import { onMount } from 'svelte';
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBFnkIpee766wZ5eV1npZwJpr6AVRpR_KA",
    authDomain: "istrav.firebaseapp.com",
    projectId: "istrav",
    storageBucket: "istrav.appspot.com",
    messagingSenderId: "479255246086",
    appId: "1:479255246086:web:7253f6886c8b7a55075a87",
    measurementId: "G-438HF3486Z"
  };

  let authenticated = false
  onMount(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        authenticated = true
      }
    });
  })
</script>

<div class="border hide-on-med-and-down"></div>
<div class="container">
  <div class="box">
    <div class="row" style="margin: 0;">
      <div class="col s12 m6">
        <h3 class="title"><i class="material-icons badge">security</i><div class="name">Client Area</div></h3>
      </div>
      <div class="col s12 m6">
        {#if authenticated === true}
          <a href="/client-area" class="btn btn-large right controls">DASHBOARD</a>
        {:else}
          <a href="/client-area" class="btn btn-large right controls hide-on-small-only">GET STARTED</a>
          <a href="/client-area" class="btn btn-large controls hide-on-med-and-up">GET STARTED</a>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .border {
    border-top: 1em solid #ee6e73;
    margin-bottom: -5em;
    margin-top: 5em;
  }
  .badge {
    font-size: 1em;
    float: left;
  }
  .name {
    font-weight: 900;
  }
  .title {
    color: #ee6e73;
    margin: 0;
    padding: 0.2em 0;
  }
  .box {
    border: 1em solid #ee6e73;
    color: #ccc;
    padding: 1em;
    background-color: #222222;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23333333' fill-opacity='1' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
  }
  .controls {
    margin: 0.6em;
  }
</style>