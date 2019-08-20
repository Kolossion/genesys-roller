<script>
  import { rolls } from '../stores.js';
  import { fade } from 'svelte/transition';
  import ResultList from './ResultList.svelte';
  // your script goes here
  let rollHistory

  const rollsUnsub = rolls.subscribe((value) => {
    rollHistory = value
  })

  console.log(rollHistory)
</script>

<style>
  .dice-rolls {
    overflow-y: auto;
    height: calc(100% - 280px);
    padding: 10px;
  }

  .rolls-table {
    width: 100%;
  }

  table, th, td {
    border: 1px solid #aaa;
    border-collapse: collapse;
  }

  .rolls-table thead {
    background-color: var(--g-orange);
    color: white;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
  }

  .rolls-table tbody tr:nth-child(even) {
    background-color: var(--g-lt-blue);
  }
</style>

<!-- markup (zero or more items) goes here -->
<div class="dice-rolls">
  <table class="rolls-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Pool</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      {#each rollHistory as roll, index}
        <tr transition:fade={{duration: 200}}>
          <td>{index + 1}</td>
          <td>{roll.pool}</td>
          <td>
            <ResultList symbols={roll.result} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>