<template>
  <div class="card">
    <h3>Add To Do Collection</h3>
    <div class="card__filter">
      <label for="input-title">Title</label>
      <input
        id="input-title"
        v-model="toDo.title"
      />
      <label for="input-created-by">Created By</label>
      <input
        id="input-created-by"
        v-model="toDo.created_by"
      />
      <label for="input-description">Description</label>
      <input
        id="input-description"
        v-model="toDo.description"
      />
      <button class="btn--primary btn--filter" @click="onAddToDo">Add</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {ToDoResponse} from "../models/responses/ToDoReponse";

const toDo = ref(new ToDoResponse({
  id: 0,
  title: '',
  created_by: '',
  description: '',
}))

const onAddToDo = async () => {
}

</script>

<style scoped>

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.card__filter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
}

.btn--primary {
  background: darkslateblue;
  font-size: 1rem;
}

</style>
