<script lang="ts">
  import { onMount } from 'svelte';
  
  import Register from '$lib/client-area/Register.svelte'
  
  import Marketing from '$lib/client-area/Marketing.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
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
  let auth: any

  onMount(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    auth = getAuth(app);
  
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('uid', uid)

        const token = await user.getIdTokenResult()
        console.log('token', token)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  })
</script>

<svelte:head>
	<title>Register - Client Area - isTrav</title>
	<meta name="description" content="Register a new client with isTrav." />
</svelte:head>

<Header />
<div class="wrapper">
  <div class="row main">
    <div class="col m6 left-side">
      <br />
      <br />
      <Register auth={auth}/>
    </div>
    <div class="col m6 right-side">
      <Marketing />
    </div>
  </div>
</div>
<Footer />

<style>
  .wrapper {
    min-height: 100vh;
  }
  .main {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .left-side {
    height: 100%;
    border-right: 0.5em solid #ee6e73;

  }
  .right-side {
    height: 100%;
    border-left: 0.5em solid #ee6e73;
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23111111' fill-opacity='1' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
  }
</style>