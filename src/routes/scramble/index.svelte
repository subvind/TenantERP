<script lang="ts">
  import Lightboard from '$lib/scramble/Lightboard.svelte'
  import Keyboard from '$lib/scramble/Keyboard.svelte'
  import Plugboard from '$lib/scramble/Plugboard.svelte'

  let active = 'b'
  let connect = ['c', 'a']

  function change (letter: string) {
    active = letter
  }
</script>

<br />
<br />
<div class="wrapper">
  <div class="title">Lightboard</div>
  <Lightboard light={active} />
  <br />
  <div class="title">Keyboard</div>
  <Keyboard press={active} change={change} />
  <br />
  <div class="title">Plugboard</div>
  <Plugboard connect={connect} />
  <br />
</div>

<style>
  .wrapper {
    min-height: 100vh;
  }
  .title {
    text-align: center;
  }
</style>