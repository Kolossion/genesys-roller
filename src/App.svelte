<script>
  export let name;

  import { selectedDice } from './stores';
  import DiceSelector from './components/DiceSelector.svelte';
  import GenesysIcon from './components/GenesysIcon.svelte';
  import DicePool from './components/DicePool.svelte';
  import DiceRolls from './components/DiceRolls.svelte';

  let chosenDice;

  const selectedDiceUnsub = selectedDice.subscribe(value => {
    chosenDice = value;
  })
</script>

<style>
  .roller-app {
    max-width: 800px;
    height: 100%;
    position: relative;
    margin: auto;
  }
</style>

<div class="roller-app">
  <!-- <DiceHistory /> -->

  <!-- <div>{chosenDice}</div> -->
  <!-- <GenesysIcon name="advantage" />
  <GenesysIcon name="success" />
  <GenesysIcon name="triumph" />
  <GenesysIcon name="threat" />
  <GenesysIcon name="failure" />
  <GenesysIcon name="despair" /> -->
  <DicePool dice={chosenDice}/>
  <DiceRolls />

  <DiceSelector />
</div>
