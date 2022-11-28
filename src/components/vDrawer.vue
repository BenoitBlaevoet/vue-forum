<template>
  <nav id="navigation-drawer">
    <slot></slot>
  </nav>
</template>

<style scoped>

  #navigation-drawer{
    background-color: var(--primary-dark);
    min-height: 350px;
    min-width: 200px;
    width: 250px;
    grid-row-start: 2;
    grid-row-end: 4;
  }

</style>