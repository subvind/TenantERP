
<script lang="ts">
  import { onMount } from "svelte";

  let search = ''
  let placeholder = ''
  let tagLines = [
    'Search for a domain name here...',
    'For example:',
    'atx-pizza.com',
    'or how about:',
    'weirdpizza.com',
    'The choice is yours!'
  ]

  let domains = [
    {
      name: '.com',
      price: '$15',
      route53: '$12'
    },
    {
      name: '.net',
      price: '$14',
      route53: '$11'
    },
    {
      name: '.org',
      price: '$15',
      route53: '$12'
    },
    {
      name: '.biz',
      price: '$19',
      route53: '$16'
    },
    {
      name: '.it',
      price: '$18',
      route53: '$15'
    },
    {
      name: '.me',
      price: '$28',
      route53: '$25'
    },
  ]

  onMount(() => {
    var elems = document.querySelectorAll('.modal');
    var instances = window['M'].Modal.init(elems, {});

    function writeText (content: any) {
      let contentArray = content.split('')
      let current = 0;
      var myInterval = setInterval(function() {
        if (current < contentArray.length) {
          placeholder = `${placeholder}${contentArray[current++]}`
        } else {
          clearInterval(myInterval)
        }
      }, 50)
    }

    function removeText (content: any) {
      let contentArray = content.split('')
      var myInterval = setInterval(function() {
        if (contentArray.length) {
          contentArray.pop()
          placeholder = contentArray.join('')
        } else {
          clearInterval(myInterval)
        }
      }, 50)
    }

    // loop through all sayings
    let counter = 0
    function myLoop () {
      let say = tagLines[counter % tagLines.length]
      writeText(say)
      setTimeout(() => {
        removeText(say)
        setTimeout(() => {
          counter++
          myLoop()
        }, say.split('').length * 50)
      }, 2000 + say.split('').length * 50)
    }
    myLoop(); 
  })

  function debounce (func: any, wait: any, immediate: any) {
    var timeout: any;
    return  () => {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  let whois: any
  let noMatch = true
  let noParse = true
  let toggle = false
  function submit () {
    fetch(`https://istrav.istrav.dev/whois/${search}`)
      .then((response) => response.text())
      .then(function (response) {
        console.log('whois', response)
        whois = response
        if (whois.includes('AVAILABLE') === true || whois.includes('No Data Found') || whois.includes('NOT FOUND') || whois.includes('No match for domain')) {
          noMatch = true
        } else {
          noMatch = false
        }

        // check if can't parse what was entered
        if (whois.includes('No entries found in source RIPE')) {
          noParse = true
        } else {
          noParse = false
        }
      })
  }
</script>

<div class="domains">
  <br />
  <div class="container">
    <form>
      <div class="row" style="margin: 0;">
        <div class="col s12 m9">
          <div class="search">
            <div class="input-field">
              <input bind:value={search} type="text" class="input" placeholder={placeholder} on:change={debounce(submit)}>
            </div>
          </div>
        </div>
        <div class="col s12 m3">
          <button type="submit" class="waves-effect waves-light btn btn-large modal-trigger red lighten-2" style="width: 100%; border-radius: 0 5em 5em 0;" href="#modal1">
            Search
          </button>
  
          <!-- Modal Structure -->
          <div id="modal1" class="modal">
            <div class="modal-content">
              <h4>results for: {search}</h4>
              <a href="#!" on:click={() => {toggle = !toggle}}>toggle whois request</a>
              {#if toggle}
                <p>{whois}</p>
              {/if}
              {#if noParse}
                <p>Looks like we are not able to parse that search term as a valid top level domain name (TLD). Try adjusting your search terms to match the criteria on the https://lookup.icann.org website.</p>
              {:else}
                {#if noMatch}
                  <p>You are in luck! Looks like that domain name hasn't been taken yet. Would you like to register it with istrav.com?</p>
                {:else}
                  <p>Looks like that domain is already registered. Do you already own it? If so, would you like to transfer it to istrav.com?</p>
                {/if}
              {/if}

            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
              {#if noParse === false}
                {#if noMatch}
                  <a href={`/client-area/domains/register?domain=${search}`} class="modal-close waves-effect waves-green btn-flat">Register Domain</a>
                {:else}
                  <a href={`/client-area/domains/transfer?domain=${search}`} class="modal-close waves-effect waves-green btn-flat">Transfer Domain</a>
                {/if}
              {/if}
            </div>
          </div>
        </div>
      </div>
    </form>
    <br />
    <div class="row" style="margin: 0;">
      {#each domains as domain}
        <div class="col s12 m2 available">
          <div class="tld">{domain.name}</div><div class="price">{domain.price}</div>
        </div>
      {/each}
    </div>
  </div>
  <br />
</div>

<style>
  .domains {
    color: #ccc;
    background-color: #222;
    border-top: 1em solid #000;
    border-bottom: 1em solid #000;
  }

  .search {
    background: #333;
    border-radius: 5em 0 0 5em;
  }
  
  .input-field {
    margin: 0;
    padding: 0 0 0 1.75em;
  }
  
  .input {
    height: 3.8rem !important;
    padding: 0;
    margin: 0 !important;
    color: #eee;
    border-bottom: 0 !important;
  }

  .available {
    display: flex;
    flex-direction: row;
  }

  .tld {
    font-weight: 900;
    border-right: 1px solid #777;
    flex: 1;
    text-align: center;
    font-size: 1.2em;
  }

  .price {
    flex: 1;
    text-align: center;
    font-weight: 100;
    font-size: 1.2em;
  }

  .modal {
    color: #333;
  }
</style>