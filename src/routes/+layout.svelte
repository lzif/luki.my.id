<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";
  import Nav from "../components/Nav.svelte";
  import { enableCache } from "@iconify/svelte";

  onMount(() => {
    enableCache("all");
  });
</script>

<div class="pop">
<Nav />

<slot />
</div>
<style>
@import url(https://fonts.bunny.net/css?family=poppins:400,900);
.pop{
  font-family: 'Poppins', sans-serif;
}
</style>
