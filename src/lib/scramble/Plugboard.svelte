<script lang="ts">
  import { onMount } from "svelte";

  let alphabet = 'qwertzuioasdfghjkpyxcvbnml'
  let letters = alphabet.split('')
  let dots = letters
  export let connect = ['a', 'b']

  onMount(() => {
    new window['LeaderLine'](
      document.getElementById(`top-${connect[0]}`),
      document.getElementById(`middle-${connect[0]}`),
      {
        path: 'straight',
        startSocket: 'bottom',
        endSocket: 'top',
        startPlug: 'disc',
        endPlug: 'disc',
        size: 1,
        color: '#ee6e73',
      }
    );
    new window['LeaderLine'](
      document.getElementById(`middle-${connect[0]}`),
      document.getElementById(`middle-${connect[1]}`),
      {
        path: 'straight',
        startPlug: 'disc',
        endPlug: 'disc',
        size: 1,
        color: '#ee6e73',
      }
    );
    new window['LeaderLine'](
      document.getElementById(`middle-${connect[1]}`),
      document.getElementById(`bottom-${connect[1]}`),
      {
        path: 'straight',
        startSocket: 'bottom',
        endSocket: 'top',
        startPlug: 'disc',
        endPlug: 'disc',
        size: 1,
        color: '#ee6e73',
      }
    );
  })
</script>

<div class="wrapper">
  <div class="card keyboard">
    <div class="dots">
      {#each dots as dot}
        <div id={`top-${dot}`} class="dot" style={dot === connect[0] ? 'background: #ee6e73;' : null}></div>
      {/each}
    </div>
    <br />
    {#each letters as letter, index}
      <a id={`middle-${letter}`} href="#" class="btn-floating btn-small grey black-text lighten-2 letter" style={letter === connect[0] || letter === connect[1] ? 'background: #ee6e73 !important; color: #fff !important;' : null}>{letter}</a>
      {#if index === 8 || index === 16}
        <br />
      {/if}
    {/each}
    <br />
    <div class="dots">
      {#each dots as dot}
        <div id={`bottom-${dot}`} class="dot" style={dot === connect[1] ? 'background: #ee6e73;' : null}></div>
      {/each}
    </div>
  </div>
</div>

<style>
  .wrapper {
    margin: 0 auto;
    text-align: center;
  }
  .keyboard {
    width: 450px;
    margin: 0 auto;
  }
  .letter {
    margin: 0.5em;
  }
  .dots {
    margin-top: 0.5em;
    display: inline-block
  }
  .dot {
    text-align: center;
    height: 10px;
    width: 10px;
    border-radius: 1em;
    background: #000;
    float: left;
    margin: 0.1em;
  }
</style>