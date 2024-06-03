<script>
 export let isSidebarOpen
</script>

<div  class={`${isSidebarOpen ? 'md:w-64' : 'w-0 hidden'} md:h-screen  md:flex md:flex-col bg-gray-900   transition-[width] duration-500`}>
 <nav class="text-white">
 
    <div class="mt-6">
     <div class="flex group cursor-pointer mr-4">
        <h4 class="font-bold flex-1 px-2 text-green group-hover:text-red">Header One</h4>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-white group-hover:fill-black"
        viewBox="0 0 451.847 451.847">
        <path
          d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
          data-original="#000000" />
      </svg>
     </div>
     <ul class="space-y-1 hidden mt-2 px-2">
          <li>
            <a href="#" class="text-gray-600 hover:text-black transition-all text-sm flex items-center hover:bg-[#efefef] rounded-md px-4 py-2">Sub Link</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-black transition-all text-sm flex items-center hover:bg-[#efefef] rounded-md px-4 py-2">Sub Link</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-black transition-all text-sm flex items-center hover:bg-[#efefef] rounded-md px-4 py-2">Sub Link</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-black transition-all text-sm flex items-center hover:bg-[#efefef] rounded-md px-4 py-2">Sub Link</a>
          </li>
     </ul>
    </div>

    <div class="mt-6">
        <div class="flex group cursor-pointer mr-4">
           <h4 class="font-bold flex-1 px-2 text-green group-hover:text-red">Users</h4>
           <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-white group-hover:fill-black"
           viewBox="0 0 451.847 451.847">
           <path
             d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
             data-original="#000000" />
         </svg>
        </div>
        <ul class="space-y-1  mt-2 px-2">
             <li>
               <a href="/users" class="text-gray-600 hover:text-black transition-all text-sm flex items-center hover:bg-[#efefef] rounded-md px-4 py-2">users table</a>
             </li>
             <li>
               <a href="/products" class="text-gray-600 hover:text-black transition-all text-sm flex items-center hover:bg-[#efefef] rounded-md px-4 py-2">products</a>
             </li>
             <li>
               <a href="#" class="text-gray-600 hover:text-black transition-all text-sm flex items-center hover:bg-[#efefef] rounded-md px-4 py-2">Sub Link</a>
             </li>
             <li>
               <a href="#" class="text-gray-600 hover:text-black transition-all text-sm flex items-center hover:bg-[#efefef] rounded-md px-4 py-2">Sub Link</a>
             </li>
        </ul>
       </div>

 </nav>
</div>