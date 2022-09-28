<script lang="ts">
  import { onMount } from "svelte";

  import Banner from "$lib/Banner.svelte";

  import Table from "$lib/Table.svelte"
  import * as gridjs from "gridjs";

  import navigation from '$lib/stores/navigation';
  import com from 'idea-optimizer'
  import { v4 as uuidv4 } from 'uuid';

  navigation.set('ideas')

  let search = {
    enabled: true
  }
  let sort = true
  let pagination = {
    enabled: true,
    limit: 10,
    summary: true
  }
  let columns = [
    {
      name: 'Id',
      width: '100px',
      sort: false,
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;',
        }, row.cells[0].data);
      }
    },
    'slug',
    'name',
    'description',
    { 
      name: 'Actions',
      sort: false,
      hidden: false,
      formatter: (cell: any, row: any) => {
        return gridjs.h('a', {
          href: `/client-area/ideas/view/${row.cells[1].data}`,
          className: 'btn btn-small blue lighten-2 right',
        }, 'VIEW');
      }
    },
  ]
  let data: any = [
    // ['Tom', 'john@example.com'],
    // ['Joe', 'mike@gmail.com'],
    // ['Joe1', 'mike1@gmail.com'],
    // ['Joe2', 'mike2@gmail.com'],
  ]

  let loading: boolean = true
  onMount(async () => {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
      alignment: 'right'
    });

    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()
    let ideas = await db.idea.find().exec()
    console.dir(ideas)

    ideas.forEach((value: any) => {
      data.push([value.id, value.slug, value.name, value.description])
    })
    
    loading = false
  })
</script>


<Banner icon="flag" name="Ideas">
  <a href="/client-area/dashboard" class="breadcrumb">Home</a>
  <a href="/client-area/ideas" class="breadcrumb">Ideas</a>
</Banner>

<div class="container">
  <!-- Dropdown Trigger -->
  <a class='dropdown-trigger btn-floating btn-large right blue lighten-2' style="position: float; margin-top: -2em;" href='#' data-target='dropdownMore'><i class="material-icons">more_vert</i></a>

  <!-- Dropdown Structure -->
  <ul id='dropdownMore' class='dropdown-content' style="min-width: 200px;">
    <li><a href="/client-area/ideas/create" class="light-blue-text"><i class="material-icons">add</i>Add Record</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!" class="light-blue-text"><i class="material-icons">cloud_download</i>Import Records</a></li>
    <li><a href="#!" class="light-blue-text"><i class="material-icons">cloud_upload</i>Export Records</a></li>
  </ul>
  {#if loading === false}
    <Table columns={columns} data={data} search={search} pagination={pagination} sort={sort} />
  {/if}
</div>
<br />
<br />
<br />
<br />

<style>
  .banner {
    background: #ddd;
    min-height: 100px;
    overflow: hidden;
  }
  .banner h1 {
    font-size: 3em;
    margin: 0 0 0.2em;
  }
  .banner .breadcrumb,
  .banner .breadcrumb:before {
    color: #000;
  }
</style>
