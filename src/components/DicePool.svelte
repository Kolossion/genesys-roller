<script>
  export let dice;

  import { fade } from 'svelte/transition';
</script>

<style>
  /* your styles go here */
  .dice-box {
    /* background-color: rgba(0,0,0,0.2); */
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
      {dice}
    </div>
  </div>
</div>