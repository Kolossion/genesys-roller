<script>
  import { selectedDice } from '../stores.js';
  import { DICE_TYPES, diceSort } from '../lib/dice.js';
  import DiceActions from './DiceActions.svelte';
  import AddDiceButton from './AddDiceButton.svelte';

  function handleDiceAdd(e) {
    selectedDice.update(dice => {
      return dice.concat(e.target.id).sort(diceSort);
    });
  }

</script>

<style>
  .dice-selector {
    position: absolute;
    bottom: 0;
    height: 175px;
    background-color: var(--g-gray);
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .dice-buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }
</style>

<div class="dice-selector">
  <div class="dice-buttons">
    {#each DICE_TYPES as type}
      <AddDiceButton type={type} />
    {/each}
  </div>
  <DiceActions />
</div>