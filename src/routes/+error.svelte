<script>
  // src/routes/blog/[slug]/+page.svelte

  import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
