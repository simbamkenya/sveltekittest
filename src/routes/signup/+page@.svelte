<script>
  import { toasts, ToastContainer, FlatToast } from "svelte-toasts";
  import Toast from "../Toast.svelte";

  const successToast = () => {
    const toast = toasts.add({
      title: "Success",
      description: "Form submitted successfully",
      duration: 5000, // 0 or negative to avoid auto-remove
      placement: "top-center",
      type: "info",
      theme: "dark",
      showProgress: true,
      type: "success",
      theme: "light",
      onClick: () => {},
      onRemove: () => {},
      // component: BootstrapToast, // allows to override toast component/template per toast
    });
  };

  const errorToast = () => {
    const toast = toasts.add({
      title: "Error",
      description: "Sorry, an error occurred!",
      duration: 5000, // 0 or negative to avoid auto-remove
      type: "error",
      theme: "dark",
      placement: "top-center",
      showProgress: true,
      type: "error",
      theme: "light",
      onClick: () => {},
      onRemove: () => {},
      // component: BootstrapToast, // allows to override toast component/template per toast
    });
  };

  export let form;
  console.log("form", form);
</script>

<form method="POST" action="?/signup">
  <ToastContainer let:data>
    <FlatToast {data} />
  </ToastContainer>
  <label>
    Email
    <input name="email" type="email" />
  </label>
  <label>
    Password
    <input name="password" type="password" />
  </label>
  <button type="submit">signup</button>
  <button on:click={successToast}>Success Toast</button>
  <button on:click={errorToast}>Error Toast</button>
</form>

<form class="md:flex flex-col mb-6" method="POST" action="?/signup">
  <div class="md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block text-sm mb-1" for="firstname"> First Name </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
		  focus:outlineOffset-[2px]"
        placeholder="First Name"
        id="firstname"
        name="firstname"
      />
      <!-- {errors.name && <div className="text-sm text-red-400 py-1">{errors.name}</div>} -->
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block text-sm mb-1" for="slug"> Last Name </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
		focus:outlineOffset-[2px]"
        placeholder="Last Name"
        id="lastname"
        name="lastname"
      />
      <!-- {errors.name && <div className="text-sm text-red-400 py-1">{errors.name}</div>} -->
    </div>
  </div>

  <div class="md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block text-sm mb-1" for="username">
        Username
      </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
		  focus:outlineOffset-[2px]"
        placeholder="Username"
        id="username"
        type="text"
        name="username"
      />
      <!-- {errors.name && <div className="text-sm text-red-400 py-1">{errors.name}</div>} -->
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block text-sm mb-1" for="email">
        Email
      </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
		focus:outlineOffset-[2px]"
        placeholder="Email"
        id="email"
        type="email"
        name="email"
      />
      <!-- {errors.name && <div className="text-sm text-red-400 py-1">{errors.name}</div>} -->
    </div>
  </div>

  <div class="md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block text-sm mb-1" for="phone"> Phone </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
	  focus:outlineOffset-[2px]"
        placeholder="Phone"
        id="phone"
        name="phone"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block text-sm mb-1" for="zipcode">
        Zipcode
      </label>
      <input  class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
      focus:outlineOffset-[2px]" type="text" id="zipcode" name="zipcode" placeholder="Zip Code"/>
    </div>
  </div>

  <div class="md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block text-sm mb-1" for="city"> City </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
	  focus:outlineOffset-[2px]"
        placeholder="City"
        id="city"
        name="city"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block text-sm mb-1" for="city">Street </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
	  focus:outlineOffset-[2px]"
        placeholder="Street"
        id="street"
        name="street"
      />
    </div>
  </div>
  <div class="md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block text-sm mb-1" for="password"> Password </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
	  focus:outlineOffset-[2px]"
        placeholder="password"
        id="password"
        name="password"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block text-sm mb-1" for="number">Number </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
	  focus:outlineOffset-[2px]"
        placeholder="number"
        id="number"
        type="number"
        name="number"
      />
    </div>
  </div>

  <div class="md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block text-sm mb-1" for="lat"> Latitude </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
	  focus:outlineOffset-[2px]"
        placeholder="Latitude"
        id="lat"
        name="lat"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block text-sm mb-1" for="long">Longtitude </label>
      <input
        class="w-full minHeight-[39px] appearance-none rounded-sm border-solid border-[1px] block text-sm leading-4 py-[0.5rem] px-[0.75rem] focus:shadow-sm focus:outline-[2px] focus:outline-transparent
	  focus:outlineOffset-[2px]"
        placeholder="Longtitude"
        id="long"
        type="text"
        name="long"
      />
    </div>
  </div>
 
  <div class="px-3">
    <button type="submit" class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-400 text-white hover:bg-blue-300">
      Save
    </button>
  </div>
</form>
