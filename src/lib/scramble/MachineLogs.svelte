

<script>
  let data = [
    {
      loggedAt: 'just now',
      message: 'hello world'
    },
    {
      loggedAt: '1 minute ago',
      message: 'hello world 2'
    },
  ]
</script>

<div class="card">
  <ul class="collection">
    {#each data as record}
      <li class="collection-item">
        {record.message} <span class="loggedAt">- {record.loggedAt}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .card {
    width: 100%;
    margin: 0;
  }
  .collection {
    margin: 0;
  }
  .loggedAt {
    color: #999;
  }
</style>