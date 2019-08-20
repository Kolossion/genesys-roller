<script>
  export let symbols;
  import GenesysIcon from './GenesysIcon.svelte';

  $: sortedResult = symbols.sort();
</script>

<style>
</style>

<span class="symbol-list">
  {#each symbols as icon}
    <GenesysIcon icon={icon} />
  {/each}
</span>
