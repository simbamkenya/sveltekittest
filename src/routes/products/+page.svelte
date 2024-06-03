<script>
  import _ from "underscore"
  import { get } from "svelte/store";
  import {loading} from "../../lib/Loading"

  export let data = {};
  let { products, categories } = data;
  let productsData = products.slice(0, 10);

  $: isLoadingData = get(loading);

</script>
 {#if isLoadingData}
   <div class="w-full min-h-full flex items-center justify-center">
   <p class="text-red-400 text-4xl">Loading products</p>
   </div>
   
  {:else}
  <div class="grid grid-col-1 md:grid-cols-3 gap-4 px-6 mt-4 -z-999">
    {#each productsData as { title, price, image}, i}
      <div class="border-2 flex flex-col rounded-sm hover:scale-[103%] translation-all duration-500">
          <div class="relative bg-white">
              <span class="absolute top-4 bottom-4 pr-4 pl-2 ml-2 bg-[gold] h-6 rounded-lg">{_.sample(categories)}</span>
              <img class="max-h-96 #w-full" src={image} alt="" srcset="" />
          </div> 
        <div class="mt-auto p-4">
         <p>{title}</p>
        <p class="text-3xl">${price}</p> 
        </div>
        
  
      </div>
    {/each}
  </div>
   {/if}

