<script>
  export let name;

  import { selectedDice } from './stores';
  import DiceSelector from './components/DiceSelector.svelte';
  import GenesysIcon from './components/GenesysIcon.svelte';

  let chosenDice;

  const selectedDiceUnsub = selectedDice.subscribe(value => {
    chosenDice = value;
  })
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<div class="roller-app">
  <!-- <DiceHistory /> -->
  <DiceSelector />

  <h1>Hello {name}!</h1>
  <div>{chosenDice}</div>
  <p>blah</p>
  <GenesysIcon name="advantage" />
  <GenesysIcon name="success" />
  <GenesysIcon name="triumph" />
  <GenesysIcon name="threat" />
  <GenesysIcon name="failure" />
  <GenesysIcon name="despair" />
</div>
