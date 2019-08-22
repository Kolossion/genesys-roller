<script>
  export let type;

  import { selectedDice } from '../stores.js';
  import { diceSort } from '../lib/dice.js';
  import DiceIcon from './DiceIcon.svelte';

  function handleDiceAdd(e) {
    selectedDice.update(dice => {
      return dice.concat(e.target.id).sort(diceSort);
    });
  }
</script>

<style>
  .dice-button {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16.667%;
    line-height: 100%;
    cursor: pointer;
    margin-bottom: 10px;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }

  .dice-button-icon {
    pointer-events: none;
  }
</style>

<div class="dice-button" id={type} on:click={handleDiceAdd}>
  <span class="dice-button-icon">
    <DiceIcon width={50} height={50} name={type} />
  </span>
  {type}
</div>