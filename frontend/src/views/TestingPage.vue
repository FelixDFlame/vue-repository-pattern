<template>
  <div class="testing-page">
    <div class="container-1">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
      <div>Item 7</div>
      <div>Item 8</div>
      <div>Item 9</div>
    </div>

    <div class="container-2">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div class="grid-col-2">Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
      <div>Item 7</div>
      <div>Item 8</div>
      <div>Item 9</div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.testing-page {
  width: 100vw;
  height: 100vh;
  background: green;
}

.container-1 {
  display: flex;
  width: 100%;
  gap: 1rem;
  align-self: stretch;
  flex-flow: row;
}

.container-1 > * {
  display: flex;

  padding: 1rem;
  background: red;
}

.container-2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  gap: 1rem;
}

.container-2 > * {
  padding: 1rem;
  background: red;
}

.grid-col-2 {
  grid-area: span 2 / span 1;
}
</style>