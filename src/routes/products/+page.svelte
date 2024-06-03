<script>
  import _ from "underscore"

  export let data = {};
  let { products, categories } = data;
  let productsData = products.slice(0, 10);

</script>

<div class="grid grid-col-1 md:grid-cols-3 gap-2 mt-4 -z-999">
  {#each productsData as { title, price, image}, i}
    <div class="border-2 flex flex-col rounded-sm">
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
