<template>
  <div class="card-to-do">
    <div class="card__title">
      <span>
        <b>{{ toDo.title }}</b>
      </span>
    </div>
    <div class="card__body">
      <span>{{ toDo.description }}</span>
    </div>
    <div class="card__footer">
      Created By:
      <span>{{ toDo.created_by }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {InterfaceToDoDocumentResponse} from "../models/interfaces/InterfaceToDoResponse";

defineProps<{ toDo: InterfaceToDoDocumentResponse }>()
</script>

<style scoped>
.card-to-do {
  background: #242424;
  border: 1px solid white;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
}

.card__title {
  background: #213547;
  padding: 1rem;
}

.card__footer {
  background: #213547;
  padding: 1rem;
}

.card__body {
  min-height: 80px;
  padding: 0.5rem 2rem;
}
</style>