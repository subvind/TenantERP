<script lang="ts">
  import { onMount } from 'svelte';

  import Banner from '$lib/Banner.svelte'

  import navigation from '$lib/stores/navigation';
  import namespace from '$lib/stores/namespace';

  import com from 'idea-optimizer'

	let namespaceSlug: string;
	namespace.subscribe(value => {
		namespaceSlug = value;
	});
  
  export let data: any;
  let idea: any;

  navigation.set('ideas')

  let loading: boolean = true

  async function getNamespaceId(slug: string) {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    let record = await db.namespace.findOne({
      selector: {
        slug: slug
      }
    }).exec()

    return record.id
  }

  onMount(async () => {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()
    let record = await db.idea.findOne({
      selector: {
        slug: data.ideaId,
        namespace: getNamespaceId(namespaceSlug)
      }
    }).exec()
    idea = record.toJSON()
    console.dir(idea)
    
    loading = false

    setTimeout(() => {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {
        alignment: 'right'
      });
    }, 0)
  })
</script>

{#if loading === false}
  <Banner icon="directions_bus" name={idea.name}>
    <a href="/client-area/dashboard" class="breadcrumb">Home</a>
    <a href="/client-area/ideas" class="breadcrumb">Ideas</a>
    <a href={`/client-area/ideas/${data.ideaId}`} class="breadcrumb">View</a>
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
