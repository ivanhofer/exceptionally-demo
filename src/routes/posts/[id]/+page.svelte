<script lang="ts">
  import type { PageData } from "./$types.js";

  export let data: PageData;
</script>

<h1>Post {data.post.id} details</h1>

<pre>{JSON.stringify(data.post, null, 3)}</pre>

<h2>Comments</h2>

<pre>{JSON.stringify(data.comments, null, 3)}</pre>
