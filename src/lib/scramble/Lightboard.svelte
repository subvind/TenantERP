<script lang="ts">
  let alphabet = 'qwertzuioasdfghjkpyxcvbnml'
  let letters = alphabet.split('')
  export let light = 'a'
</script>

<div class="wrapper">
  <div class="card keyboard">
    {#each letters as letter, index}
      <a href="#" class="btn-floating btn-small grey black-text lighten-2 letter" style={letter === light ? 'background: #000 !important; color: #fff !important;' : null}>{letter}</a>
      {#if index === 8 || index === 16}
        <br />
      {/if}
    {/each}
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
</style>