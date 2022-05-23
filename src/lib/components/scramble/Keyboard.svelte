<script lang="ts">
  let alphabet = 'qwertzuioasdfghjkpyxcvbnml'
  let letters = alphabet.split('')
  export let press = 'a'
  export let change: any
</script>

<div class="card keyboard">
  <div class="title">(Keyboard)</div>
  {#each letters as letter, index}
    <a href="#" on:click={() => change(letter)} class="btn-floating btn-small grey black-text lighten-2 letter" style={letter === press ? 'background: #000 !important; color: #fff !important;' : null}>{letter}</a>
    {#if index === 8 || index === 16}
      <br />
    {/if}
  {/each}
</div>


<style>
  .keyboard {
    text-align: center;
    margin: 0 auto;
  }
  .letter {
    margin: 0.5em;
  }
</style>