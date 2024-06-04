<script>
  import { page } from "$app/stores";
  import { getContext } from "svelte";
  import {formSearch} from "$lib/formSearch"
  let isDropDownOpen = false;

  $: console.log('formSearchh', $formSearch)

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
          name="search"
          bind:value={$formSearch}
        />
        <button
          class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900"
          ><i class="mdi mdi-magnify"></i>
        </button>
    </div>

    <div class="relative mr-12 z-50 h-[80px]">
      <div on:click={toggleDropdown} class="flex">
        <img class="rounded-full p-4" src="https://i.pravatar.cc/60" alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={`w-3 fill-black group-hover:fill-black ${isDropDownOpen ? "" : "-rotate-90"}`}
          viewBox="0 0 451.847 451.847"
        >
          <path
            d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
            data-original="#000000"
          />
        </svg>
      </div>

      <ul
        class={`${isDropDownOpen ? "absolute" : "hidden"}  border-slate-400 px-4 py-2 absolute bg-white text-sm top-15 right-['50%'] shadow-md rounded`}
      >
        <li
          class="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300"
        >
          <a href="/signup" on:click={toggleDropdown}>Sign Up</a>
        </li>
        <li
          class="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300"
        >
          <a href="#" on:click={toggleDropdown}>Login</a>
        </li>
        <li
          class="whitespace-nowrap rounded-sm px-2 py-[4px] text-left text-sm hover:bg-green-300"
        >
          <a href="#" on:click={toggleDropdown}>Settings</a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style>
</style>
