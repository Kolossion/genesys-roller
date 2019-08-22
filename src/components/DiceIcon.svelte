<script>
  export let name
  export let width
  export let height

  import { fade } from 'svelte/transition'

  function getIcon(name) {
    const iconMap = {
      proficiency: '/images/svg/genesys_proficiency.svg',
      ability: '/images/svg/genesys_ability.svg',
      boost: '/images/svg/genesys_boost.svg',
      difficulty: '/images/svg/genesys_difficulty.svg',
      challenge: '/images/svg/genesys_challenge.svg',
      setback: '/images/svg/genesys_setback.svg',
    }

    return iconMap[name]
  }
</script>

<style>
</style>

<img src={getIcon(name)} alt={name} width={width} height={height} in:fade={{duration: 200}} />