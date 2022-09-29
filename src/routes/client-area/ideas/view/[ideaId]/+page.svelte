<script lang="ts">
  import { onMount } from 'svelte';

  import Banner from '$lib/Banner.svelte'

  import navigation from '$lib/stores/navigation';
  import namespace from '$lib/stores/namespace';

  import com from 'idea-optimizer'
  
  export let data: any;
  let namespaceRecord: any;
  let idea: any;
  
  navigation.set('ideas')
  
  namespace.subscribe(async (value) => {
    if (value) {
      namespaceRecord = JSON.parse(value);
      await loadIdea()
      initMaterial()
    }
  });

  onMount(async () => {
    // nothing
  })

  function initMaterial() {
    setTimeout(() => {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {
        alignment: 'right'
      });
    }, 0)
  }
  
  async function loadIdea() {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()
    
    console.log('load idea', data.ideaId)
    console.log('load idea', namespaceRecord.id)
    idea = await db.idea.findOne({
      selector: {
        slug: data.ideaId,
        namespace: namespaceRecord.id
      }
    }).exec()
    console.log(idea)
  }
</script>

{#if idea}
  <Banner icon="flag" name={idea.name} description="Innovation Management System">
    <a href="/client-area/dashboard" class="breadcrumb">Dashboard</a>
    <a href="/client-area/ideas" class="breadcrumb">Ideas</a>
    <a href={`/client-area/ideas/view/${data.ideaId}`} class="breadcrumb">View</a>
  </Banner>

  <div class="container">
    <!-- Dropdown Trigger -->
    <a class='dropdown-trigger btn-floating btn-large right blue lighten-2' style="position: float; margin-top: -2em;" href='#' data-target='dropdownMore'><i class="material-icons">more_vert</i></a>
  
    <!-- Dropdown Structure -->
    <ul id='dropdownMore' class='dropdown-content' style="min-width: 200px;">
      <li><a href="#!" class="light-blue-text">one</a></li>
      <li><a href="#!" class="light-blue-text">two</a></li>
      <li class="divider" tabindex="-1"></li>
      <li><a href="#!" class="light-blue-text">three</a></li>
      <li><a href="#!" class="light-blue-text"><i class="material-icons">view_module</i>four</a></li>
      <li><a href="#!" class="light-blue-text"><i class="material-icons">cloud</i>five</a></li>
    </ul>
  
    {JSON.stringify(idea)}
  </div>
{/if}
