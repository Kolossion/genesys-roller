<script>
  export let name;
  export let icon;

  const iconMap = {
    'success': 's',
    'advantage': 'a',
    'triumph': 't',
    'failure': 'f',
    'threat': 'h',
    'despair': 'd'
  }

  $: iconChar = iconMap[name];
</script>

<style>
  .genesys-icon {
    font-family: 'Genesys';
    font-style: normal;
    font-size: 40px;
  }
</style>

<i class="genesys-icon">{ name ? iconChar : icon }</i>