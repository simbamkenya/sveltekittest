<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Sidebar from "$lib/Sidebar.svelte";
  import "./styles.css";
  import "../../src/app.css";
  import { setContext } from "svelte";
  import { page } from '$app/stores';  


  let isSidebarOpen = true;

  function toggleSidebar() {
    return (isSidebarOpen = !isSidebarOpen);
  }

  setContext("toggleSidebar", toggleSidebar);
  export const prerender = true

</script>

{#if $page.url.pathname !== '/signup' }
<div class="bg-gray-100 flex overflow-x-hidden min-h-screen">
  <Sidebar {isSidebarOpen} />
  <main class="w-full h-full">
    <Header />
    <slot />
    <Footer />
  </main>
</div>
{:else}
 <div>
  <slot/>
 </div>
{/if}

<style>
</style>
