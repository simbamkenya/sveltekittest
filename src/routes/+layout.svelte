<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Sidebar from "./Sidebar.svelte";
  import "./styles.css";
  import "../../src/app.css";
  import { setContext } from "svelte";

   let isSidebarOpen = false;

   function toggleSidebar() {	
    return (isSidebarOpen = !isSidebarOpen);
  }

  setContext('toggleSidebar', toggleSidebar)


</script>

<div class="bg-gray-100 w-full h-screen overflow-y-auto">
  <div class="flex">
    <Sidebar isSidebarOpen={isSidebarOpen} />
    <main class="w-full">
      <Header />
      <slot />
    </main>
  </div>

  <Footer />
</div>

<style>
</style>
