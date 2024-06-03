<script>
  import CloseIcon from "./CloseIcon.svelte";
  import ErrorIcon from "./ErrorIcon.svelte";
  import SuccessIcon from "./SuccessIcon.svelte";

  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let type = "error";

  const dispatch = createEventDispatcher();

</script>

<div transition:fade class="w-80 bg-red-400 px-6 py-4 mx-auto rounded-sm flex items-center">
  {#if type === "success"}
    <SuccessIcon width="1.1em" />
  {:else}
    <ErrorIcon width="1.1em" />
  {/if}

  <div class="ml-2">
    dddd
    <slot />
  </div>

  <button class="text-white bg-transparent ml-auto text-base leading-4 p-0 pl-8" on:click={() => dispatch("dismiss")}>
    <CloseIcon />
  </button>
</div>
