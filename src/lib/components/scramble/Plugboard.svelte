<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from '$app/env';

  let alphabet = 'qwertzuioasdfghjkpyxcvbnml'
  let letters = alphabet.split('')
  let dots = letters
  export let connectOutbound = ['a', 'b']

  export let connections = [
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f'],
    ['g', 'h'],
    ['i', 'j'],
    ['k', 'l'],
    ['m', 'n'],
    ['o', 'p'],
    ['q', 'r'],
    ['s', 't'],
    ['u', 'v'],
    ['w', 'x'],
    ['y', 'z'],
  ]

  function makeConnections() {
    connections.forEach((join) => {
      new window['LeaderLine'](
        document.getElementById(`middle-${join[0]}`),
        document.getElementById(`middle-${join[1]}`),
        {
          path: 'straight',
          startPlug: 'disc',
          endPlug: 'disc',
          size: 1,
          color: '#000',
        }
      );
    })
  }

  onMount(() => {
    makeConnections()
    new window['LeaderLine'](
      document.getElementById(`header-${connectOutbound[0]}`),
      document.getElementById(`top-${connectOutbound[0]}`),
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
      document.getElementById(`top-${connectOutbound[0]}`),
      document.getElementById(`middle-${connectOutbound[0]}`),
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
      document.getElementById(`middle-${connectOutbound[0]}`),
      document.getElementById(`middle-${connectOutbound[1]}`),
      {
        path: 'grid',
        startPlug: 'disc',
        endPlug: 'disc',
        size: 1,
        color: '#ee6e73',
      }
    );
    new window['LeaderLine'](
      document.getElementById(`middle-${connectOutbound[1]}`),
      document.getElementById(`bottom-${connectOutbound[1]}`),
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
  
  onDestroy(() => {
    if (browser) {
      document.querySelectorAll(`.leader-line`).forEach((element) => {
        element.remove()
      })
    }
  });
</script>

<div class="plugboard">
  <div class="dots">
    {#each dots as dot}
      <div id={`header-${dot}`} class="dot" style={dot === connectOutbound[0] ? 'background: #ee6e73;' : 'background: transparent;'}></div>
    {/each}
  </div>
  <div class="card">
    <div class="dots">
      {#each dots as dot}
        <div id={`top-${dot}`} class="dot" style={dot === connectOutbound[0] ? 'background: #ee6e73;' : null}></div>
      {/each}
    </div>
    <div class="title">(Plugboard)</div>
    {#each letters as letter, index}
      <a id={`middle-${letter}`} href="#!" class="btn-floating btn-small grey black-text lighten-2 letter" style={letter === connectOutbound[0] || letter === connectOutbound[1] ? 'background: #ee6e73 !important; color: #fff !important;' : null}>{letter}</a>
      {#if index === 8 || index === 16}
        <br />
      {/if}
    {/each}
    <div class="title">(Outbound: <span class="upper">{connectOutbound[0]}</span> to <span class="upper">{connectOutbound[1]}</span>, Inbound: )</div>
    <div class="dots">
      {#each dots as dot}
        <div id={`bottom-${dot}`} class="dot" style={dot === connectOutbound[1] ? 'background: #ee6e73;' : null}></div>
      {/each}
    </div>
  </div>
</div>

<style>
  :global(.leader-line) {
    z-index: 1000;
  }
  .plugboard {
    margin: 0 auto;
    text-align: center;
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
  .upper {
    text-transform: capitalize;
  }
</style>