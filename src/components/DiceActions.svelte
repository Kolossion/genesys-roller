<script>
  import { selectedDice, rolls } from '../stores.js';
  import { rollDie, consolidateResults } from '../lib/dice.js';

  let chosenDice;

  const selectedDiceUnsub = selectedDice.subscribe(value => {
    chosenDice = value;
  })

  function rollDice() {
    let results = []

    chosenDice.forEach((die) => {
      results.push(rollDie(die))
    })

    results = results.join('').split('')

    rolls.update((val) => { 
      val.push({
        result: consolidateResults(results),
        rawResult: results,
        pool: chosenDice.slice()
      });
      return val
    })
  }

  function resetDice(e) {
    selectedDice.update(dice => {
      return []
    })
  }
</script>

<style>
  .dice-actions {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .action-button {
    width: 50%;
    background-color: var(--g-dk-blue);
    color: white;
    font-weight: bold;
  }
</style>

<div class="dice-actions">
  <button class="action-button" on:click={resetDice}>Clear Pool</button>
  <button class="action-button" on:click={rollDice}>Roll</button>
</div>