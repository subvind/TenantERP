<script lang="ts">
  import { onMount } from 'svelte';
  
  import Register from '$lib/client-area/Register.svelte'
  
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
	<title>Join / Register - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header active="clients" />
<br />
<br />
<div class="wrapper">
  <Register auth={auth}/>
</div>
<br />
<br />
<Footer />

<style>
  .wrapper {
    min-height: 100vh;
  }
</style>