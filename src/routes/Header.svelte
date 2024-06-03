<script>
  import { page } from "$app/stores";
  import { getContext } from "svelte";
  let isDropDownOpen = false;

  let toggleSidebar = getContext("toggleSidebar");
  let toggleDropdown = function () {
    return (isDropDownOpen = !isDropDownOpen);
  };
</script>

<header class="border-b border-solid #border-gray-300 bg-white">
  <nav class="flex items-center justify-between">
    <svg
      on:click={toggleSidebar}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="bg-gray-100 mx-2 hover:cursor-pointer hover:bg-gray-200 rounded-sm"
      ><line x1="4" x2="20" y1="12" y2="12" /><line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
      /><line x1="4" x2="20" y1="18" y2="18" /></svg
    >


    <!-- component -->
    <style>
      @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
    </style>
    <style>

  
    </style>

    <div class="relative mt-1">
      <input
        type="text"
        class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />
      <button
        class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900"
        ><i class="mdi mdi-magnify"></i></button
      >
    </div>

    <div class="relative mr-12 z-50">
      <img
        on:click={toggleDropdown}
        class="rounded-full p-2 "
        src="https://i.pravatar.cc/60"
        alt=""
      />
      <ul
        class={`${isDropDownOpen ? 'absolute' : 'hidden'}  border-slate-400 px-4 py-2 absolute bg-white text-sm top-15 right-['50%'] shadow-md rounded`}
      >
        <li
          class="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300"
        >
          <a href="/signup">Sign Up</a>
        </li>
        <li
          class="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300"
        >
          <a href="#">Login</a>
        </li>
        <li
          class="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300"
        >
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style>
</style>
