<script>
  import { rolls } from '../stores.js';
  // your script goes here
  let rollHistory

  const rollsUnsub = rolls.subscribe((value) => {
    rollHistory = value
  })

  console.log(rollHistory)
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="dice-rolls">
  <table>
    {#each rollHistory as roll, index}
      <tr>{roll}</tr>
    {/each}
  </table>
</div>