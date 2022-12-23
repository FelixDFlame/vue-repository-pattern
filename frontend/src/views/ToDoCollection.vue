<template>
  <div class="card">
    <h3>Data To Do Collection</h3>
    <div class="card__filter">
      <label for="input-offset">Offset </label>
      <input
        id="input-offset"
        type="number"
        min="0"
        v-model="offset"
      />
      <label for="input-limit">Limit</label>
      <input
        id="input-limit"
        type="number"
        min="0"
        v-model="limit"
      />
      <button class="btn--primary btn--filter" @click="onFilterToDo">Filter</button>
    </div>
    <div class="list-card">
      <CardToDo
        v-for="toDo in listToDo.list_to_do"
        :key="toDo.id"
        :to-do="toDo"/>
    </div>
    <template v-if="isListToDoNotFound">
      Data not found
    </template>
  </div>
</template>

<script lang="ts" setup>
import {ListToDoResponse} from "../models/responses/ListToDoResponse.js";
import {getErrorMessage} from "../utils/GlobalLib.js";
import {computed, onMounted, ref} from "vue";
import {ApiConfig} from "../api/ApiConfig";
import {ToDoRepository} from "../repositories/ToDoRepository";
import CardToDo from "./../components/CardToDo.vue";

const offset = ref(0)
const limit = ref(10)
const listToDo = ref({} as ListToDoResponse)

const api = ApiConfig.getApiService();
const repoToDo = new ToDoRepository(api);

const onFilterToDo = async () => {
  await fetchToDoCollection()
}

const isListToDoNotFound = computed(() => {
  let isListToDoDefined = !listToDo.value.list_to_do
  if (!isListToDoDefined) {
    return listToDo.value.list_to_do.length == 0
  }
})

const fetchToDoCollection = async () => {
  try {
    const temp = await repoToDo.getCollection({
      offset: offset.value,
      limit: limit.value
    });
    listToDo.value = temp
  } catch (err: any) {
    listToDo.value = {} as ListToDoResponse;
    const errorMessage = getErrorMessage(err);
    alert(errorMessage)
  }
}

onMounted(async () => {
  await fetchToDoCollection()
})
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

.btn--filter {
  grid-area: 3 / 1 / span 3 / span 2;
}

.list-card {
  --gap: 1em;
}

.list-card > * {
  break-inside: avoid;
  margin-bottom: var(--gap);
}

@media screen and (min-width: 768px) {
  .list-card {
    --columns: 2;
    columns: var(--columns);
  }

  @supports (grid-template-rows: masonry) {
    .list-card {
      display: grid;
      grid-template-columns: repeat(var(--columns), 1fr);
      grid-template-rows: masonry;
      gap: var(--columns);
    }

    .list-card > * {
      margin-bottom: 0;
    }
  }
}

@media screen and (min-width: 992px) {
  .list-card {
    --columns: 3;
    columns: var(--columns);
  }

  @supports (grid-template-rows: masonry) {
    .list-card {
      grid-template-columns: repeat(var(--columns), 1fr);
    }
  }

}
</style>