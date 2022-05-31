<script>
  import { onMount } from "svelte";

  // import { parseJwt } from "../../parseJwt";

  let account = {
    email: ''
  }

  onMount(() => {
    let token = localStorage.getItem('token')
    // account = parseJwt(token)
  })
</script>

<nav>
  <div class="nav-wrapper">
    <ul>
      <li>
        <a href="#!" class="breadcrumb">{account.email}</a>
      </li>
    </ul>
  </div>
</nav>
