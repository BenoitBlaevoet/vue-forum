<template>
  <header id="app-bar">
    <slot></slot>
  </header>
</template>

<style>
#app-bar{
  width: 100vw;
  min-height: 75px;
  background-color: var(--primary-dark);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border-bottom: 2px solid var(--primary);
  box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);;
}
</style>