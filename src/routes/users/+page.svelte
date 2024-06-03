<script>
  import Toast from "../Toast.svelte";
  import {loading} from '$lib/loading';


    export let data = [];

    let isLoadingData = data.length === 0;

   function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<Toast />
<div class="p-2">
     
    <div class="border-b border-gray-200 shadow">
        
        <table class="divide-y divide-green-400 w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-2 text-xs text-left text-gray-500">
                EMAIL
              </th>
              <th class="px-6 py-2 text-xs text-left text-gray-500">
                USERNAME
              </th>
              <th class="px-6 py-2 text-xs text-left text-gray-500">
                FIRST NAME
              </th>
              <th class="px-6 py-2 text-xs text-left text-gray-500">
                LAST NAME
              </th>
              <th class="px-6 py-2 text-xs text-left text-gray-500">
                STREET
              </th>
              <th class="px-6 py-2 text-xs text-left text-gray-500">
                PHONE NO
              </th>
              <th class="px-6 py-2 text-xs text-left text-gray-500">
                CITY
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-300">
            {#each data.users as { email, phone, name, username, address}, i}
                <tr         
                  class="whitespace-nowrap hover:bg-green-100"
                >
                  <td class="px-6 py-2">
                    <div class="text-xs text-gray-900">{capitalizeFirstLetter(email)}</div>
                  </td>
                  <td class="px-6 py-2">
                    <div class="text-xs text-gray-900">{capitalizeFirstLetter(username)}</div>
                  </td>
                  <td class="px-6 py-2">
                    <div class="text-xs text-gray-900">{capitalizeFirstLetter(name?.firstname)}</div>
                  </td>
                  <td class="px-6 py-2">
                    <div class="text-xs text-gray-900">{capitalizeFirstLetter(name?.lastname)}</div>
                  </td>
                  <td class="px-6 py-2">
                    <div class="text-xs text-gray-900">{capitalizeFirstLetter(address?.street)}</div>
                  </td>
                  <td class="px-6  text-xs text-gray-500">
                    <span
                      class="bg-red-100  px-2 rounded"
                    >
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
</div>