<script lang="ts">
  import type { PageData } from "./$types.js";

  export let data: PageData;
</script>

<h1>Dashboard</h1>

<ul>
  <li><a href="/posts">show all {data.nrOfPosts} posts</a></li>
</ul>
