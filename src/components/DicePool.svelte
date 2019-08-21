<script>
  export let dice;

  import pullAt from 'lodash/pullAt';
  import { fade } from 'svelte/transition';
  import DiceIcon from './DiceIcon.svelte'
  import { selectedDice } from '../stores.js';

  function handleRemoveDie(i) {
    return (e) => {
      selectedDice.update((val) => {
        pullAt(val, i)
        return val
      })
    }
  }
</script>

<style>
  .dice-box {
    background-color: var(--g-gray);
    width: 100%;
    height: 100px;
    border-radius: 0 0 20px 0;
    padding: 10px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  p {
    position: absolute;
    font-weight: bold;
    font-size: 16px;
    top: 5px;
    left: 5px;
    margin: 0;
    color: var(--g-dk-blue);
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    z-index: 2;
  }

  .dice-symbols {
    width: 100%;
    word-break: break-all;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="dice-pool">
  <div class="dice-box">
    <p>Dice Pool</p>
    <div transition:fade={{duration: 200}} class="dice-symbols">
      {#each dice as die, index}
        <span on:click={handleRemoveDie(index)}>
          <DiceIcon name={die} />
        </span>
      {/each}
    </div>
  </div>
</div>