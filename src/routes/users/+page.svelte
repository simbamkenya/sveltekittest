<script>
  import { loading } from "$lib/loading";
  import Loader from "$lib/Loader.svelte";
  import { get } from "svelte/store";
  import {createSearchStore, searchHandler} from "$lib/search";
  import { onDestroy } from "svelte";
  import {formSearch} from "$lib/formSearch";



  $: console.log('hhhhh', $formSearch)
  
  export let data = [];
  let searchUsers = data.users.map((user) => ({
  ...user,
  searchTerms: `${user?.name?.firstname} ${user?.email} ${user?.name?.firstname} ${user?.name?.lastname} `
 }))

 export const searchStore = createSearchStore(searchUsers);
 $: $searchStore.search = $formSearch;
  $: console.log('ooi', $searchStore)

  $: isLoadingData = get(loading);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const unsubscribe = searchStore.subscribe((model) => searchHandler(model))
  onDestroy(() => unsubscribe())
</script>

<!-- <Toast /> -->
<div class="p-2 mt-4">
  {#if isLoadingData}
    <div class="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  {:else}
    <div class="border-b border-gray-200 shadow">
      <table class="divide-y divide-green-400 w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-2 text-xs text-left text-gray-500"> EMAIL </th>
            <th class="px-6 py-2 text-xs text-left text-gray-500">
              USERNAME
            </th>
            <th class="px-6 py-2 text-xs text-left text-gray-500">
              FIRST NAME
            </th>
            <th class="px-6 py-2 text-xs text-left text-gray-500">
              LAST NAME
            </th>
            <th class="px-6 py-2 text-xs text-left text-gray-500"> STREET </th>
            <th class="px-6 py-2 text-xs text-left text-gray-500">
              PHONE NO
            </th>
            <th class="px-6 py-2 text-xs text-left text-gray-500"> CITY </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-300">
          {#each $searchStore.filtered as { email, phone, name, username, address }, i}
            <tr class="whitespace-nowrap hover:bg-green-100">
              <td class="px-6 py-2">
                <div class="text-xs text-gray-900">
                  {capitalizeFirstLetter(email)}
                </div>
              </td>
              <td class="px-6 py-2">
                <div class="text-xs text-gray-900">
                  {capitalizeFirstLetter(username)}
                </div>
              </td>
              <td class="px-6 py-2">
                <div class="text-xs text-gray-900">
                  {capitalizeFirstLetter(name?.firstname)}
                </div>
              </td>
              <td class="px-6 py-2">
                <div class="text-xs text-gray-900">
                  {capitalizeFirstLetter(name?.lastname)}
                </div>
              </td>
              <td class="px-6 py-2">
                <div class="text-xs text-gray-900">
                  {capitalizeFirstLetter(address?.street)}
                </div>
              </td>
              <td class="px-6 text-xs text-gray-500">
                <span class="bg-red-100 px-2 rounded">
                  {phone}
                </span>
              </td>
              <td class="px-6 py-2 text-xs text-gray-500">
                {capitalizeFirstLetter(address?.city)}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>
