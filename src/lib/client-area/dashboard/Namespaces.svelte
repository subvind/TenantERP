<script lang="ts">
  import { onMount } from "svelte";

  import Table from "$lib/Table.svelte"
  import * as gridjs from "gridjs";

  import com from 'idea-optimizer'
  
  export let slug: string;
  let namespaceRecords: any;

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
    'Slug',
    { 
      name: 'InviteOnly',
      sort: false,
      hidden: false,
      formatter: (cell: any, row: any) => {
        return gridjs.h('span', {
          className: '',
        }, row.cells[2].data ? 'true' : 'false');
      }
    },
    'Clients',
    { 
      name: 'Actions',
      sort: false,
      hidden: false,
      formatter: (cell: any, row: any) => {
        return gridjs.h('a', {
          className: 'btn btn-small black right modal-close',
          onClick: () => {slug = row.cells[1].data},
        }, 'SELECT');
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
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    await load()
    
    loading = false
  })

  async function load() {
    let ideaOptimizer = com.IdeaOptimizer.getInstance()
    let db = await ideaOptimizer.db()

    namespaceRecords = await db.namespace.find().exec()

    namespaceRecords.forEach((value: any) => {
      let memberCount = 0
      if (value.clients) {
        memberCount = value.clients.length
      }
      data.push([value.id, value.slug, value.inviteOnly, memberCount])
    })
    console.log('data', data)
  }
</script>

<a href="#namespaces" class="btn white black-text modal-trigger">view all</a>

<!-- Modal Structure -->
<div id="namespaces" class="modal">
  <div class="modal-content">
    <h4>Namespaces</h4>
    <!-- <p>{JSON.stringify(namespaceRecords)}</p> -->
    {#if loading === false}
      <Table columns={columns} data={data} search={search} pagination={pagination} sort={sort} />
    {/if}
  </div>
  <div class="modal-footer">
    <a href="#!" class="btn modal-close red lighten-2">close</a>
  </div>
</div>