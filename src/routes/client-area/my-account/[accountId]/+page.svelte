<script lang="ts">
  import { onMount } from 'svelte';

  import Banner from '$lib/Banner.svelte'

  import navigation from '$lib/stores/navigation';
  import com from 'idea-optimizer'
  
  export let data: any;
  let vehicle: any;

  navigation.set('fleets')

  let loading: boolean = true

  onMount(async () => {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()
    vehicle = await db.vehicle.findOne({
      selector: {
        id: data.vehicleId
      }
    }).exec()
    console.dir(vehicle)
    
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
  <Banner icon="directions_bus" name={vehicle.name} description="Innovation Management System">
    <a href="/client-area/dashboard" class="breadcrumb">Dashboard</a>
    <a href="/client-area/fleets" class="breadcrumb">Fleets</a>
    <a href="/client-area/fleets/vehicles" class="breadcrumb">Vehicles</a>
    <a href={`/client-area/fleets/vehicles/${data.vehicleId}`} class="breadcrumb">View</a>
  </Banner>

  <div class="container">
    <!-- Dropdown Trigger -->
    <a class='dropdown-trigger btn-floating btn-large right red lighten-2' style="position: float; margin-top: -2em;" href='#' data-target='dropdownMore'><i class="material-icons">more_vert</i></a>
  
    <!-- Dropdown Structure -->
    <ul id='dropdownMore' class='dropdown-content' style="min-width: 200px;">
      <li><a href="#!" class="black-text">one</a></li>
      <li><a href="#!" class="black-text">two</a></li>
      <li class="divider" tabindex="-1"></li>
      <li><a href="#!" class="black-text">three</a></li>
      <li><a href="#!" class="black-text"><i class="material-icons">view_module</i>four</a></li>
      <li><a href="#!" class="black-text"><i class="material-icons">cloud</i>five</a></li>
    </ul>
  
    {JSON.stringify(vehicle)}
  </div>
{/if}
