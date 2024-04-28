<script lang="ts">
  import Icon from "@iconify/svelte";
  import { THEMES } from "../lib/config";
  import { onMount } from "svelte";

  let current_theme = "";
  onMount(() => {
    current_theme = document.documentElement.className;
  });
  const navItem: { url: string; title: string }[] = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/blog",
      title: "Blog",
    },
    {
      url: "/project",
      title: "Project",
    },
  ];
  function set_theme(theme: string) {
    if (!Object.values(THEMES).includes(theme)) return;
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }

  function toggle_theme(): void {
    let current_themes = document.documentElement.className;
    const theme = current_themes === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    current_theme = theme;
    set_theme(theme);
  }
</script>

<nav class="sticky top-0 w-full flex justify-between p-3">
  <div class="">LukiZnr</div>
  <ul class="flex gap-2">
    {#each navItem as item}
      <li class="underline decoration-sky-500 decoration-wavy decoration-2">
        <a href={item.url}>{item.title}</a>
      </li>
    {/each}
  </ul>
  <div class="">
    <button class="mr-2" aria-label="toggle theme" on:click={toggle_theme}>
      {#if current_theme === THEMES.LIGHT}
        <Icon width="2rem" icon="ph:moon-duotone" />
      {:else}
        <Icon width="2rem" icon="ph:sun-dim-duotone" />
      {/if}
    </button>
  </div>
</nav>
