<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Sidebar from "./Sidebar.svelte";
  import "./styles.css";
  import "../../src/app.css";
  import { setContext } from "svelte";

   let isSidebarOpen = true;

   function toggleSidebar() {	
    return (isSidebarOpen = !isSidebarOpen);
  }

  setContext('toggleSidebar', toggleSidebar)


</script>

<div class="bg-gray-100 flex overflow-x-hidden min-h-screen">
    <Sidebar isSidebarOpen={isSidebarOpen} />
    <main class="w-full h-full">
      <Header />
      <slot />
      <Footer />
    </main>


  
</div>

<style>
</style>
