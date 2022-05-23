<script lang="ts">
  import Lightboard from '$lib/components/scramble/Lightboard.svelte'
  import Keyboard from '$lib/components/scramble/Keyboard.svelte'
  import Plugboard from '$lib/components/scramble/Plugboard.svelte'
  import MachineLogs from '$lib/components/scramble/MachineLogs.svelte'
  import Connections from '$lib/components/scramble/Connections.svelte'

  let active = 'b'
  let connectOutbound = ['a', 'l']

  function change (letter: string) {
    active = letter
  }
</script>

<div class="container wrapper">
  <h1>Alphabet Scrambling<br /> Machine</h1>
  <div class="row">
    <div class="col s2">
      <div class="title">Connections</div>
      <Connections />
    </div>
    <div class="col s6">
      <div class="title">Encrypt/Decrypt</div>
      <Lightboard light={active} />
      <br />
      <Keyboard press={active} change={change} />
      <br />
      <Plugboard connectOutbound={connectOutbound} />
      <br />
    </div>
    <div class="col s4">
      <div class="title">Machine Logs</div>
      <MachineLogs />
    </div>
  </div>
</div>
<br />
<br />

<style>
  h1 {
    font-size: 2em;
    text-align: center;
  }
  .container {
    width: 100%;
    min-width: 950px;
    max-width: 1200px;
  }
  .wrapper {
    min-height: 100vh;
  }
  .title {
    text-align: center;
  }
</style>