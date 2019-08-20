<script>
  import { selectedDice } from '../stores.js';
  import DiceActions from './DiceActions.svelte';

  function handleDiceAdd(e) {
    selectedDice.update(dice => {
      return dice.concat(e.target.id);
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

  /* .selector-header {
    background-color: var(--g-orange);
    color: white;
    font-weight: bold;
    padding: 5px;
    flex: 0 0 20px;
  } */

  .dice-buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }


  .dice-button {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.667%;
    line-height: 100%;
    cursor: pointer;
    margin-bottom: 10px;
  }



  #ability { background-color: var(--g-dice-ability); }
  #proficiency { background-color: var(--g-dice-proficiency); }
  #boost { background-color: var(--g-dice-boost); }

  #difficulty {
    background-color: var(--g-dice-difficulty);
    color: white;
  }

  #challenge {
    background-color: var(--g-dice-challenge);
    color: white;
  }

  #setback {
    background-color: var(--g-dice-setback);
    color: white;
  }
</style>

<!-- markup (zero or more items) goes here -->
<div class="dice-selector">
  <!-- <div class="selector-header">
    Dice
  </div> -->
  <div class="dice-buttons">
    <div class="dice-button" id="ability" on:click={handleDiceAdd}>Ability</div>
    <div class="dice-button" id="proficiency" on:click={handleDiceAdd}>Proficiency</div>
    <div class="dice-button" id="boost" on:click={handleDiceAdd}>Boost</div>
    <div class="dice-button" id="difficulty" on:click={handleDiceAdd}>Difficulty</div>
    <div class="dice-button" id="challenge" on:click={handleDiceAdd}>Challenge</div>
    <div class="dice-button" id="setback" on:click={handleDiceAdd}>Setback</div>
  </div>
  <DiceActions />
</div>