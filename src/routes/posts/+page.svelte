<script lang="ts">
  import type { PageData } from "./$types.js";

  export let data: PageData;
</script>

<h1>List of posts</h1>

<ul>
  {#each data.posts as { id, title }}
    <li>
      <a href="/posts/{id}">
        {id} - <strong>{title}</strong>
      </a>
    </li>
  {/each}
</ul>
