<template>
  <div class="card">
    <h3>Data To Do Document</h3>
<!--    <div class="card__filter">-->
<!--      <label for="input-id-to-do">Id To Do</label>-->
<!--      <input-->
<!--        id="input-id-to-do"-->
<!--        type="number"-->
<!--        min="1"-->
<!--        v-model="idToDo"-->
<!--      />-->
<!--      <button class="btn&#45;&#45;primary" @click="onFindToDo">Find</button>-->
<!--    </div>-->
    <div class="card__body">
      <CardToDo
        :to-do="toDo"
      />
      <template v-if="!toDo.id">
        Data not found
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {ToDoResponse} from "../models/responses/ToDoReponse";
import {ApiConfig} from "../api/ApiConfig";
import {ToDoRepository} from "../repositories/ToDoRepository";
import {getErrorMessage} from "../utils/GlobalLib";
import CardToDo from "./../components/CardToDo.vue";
import {useRoute} from "vue-router";

const route = useRoute()

const idToDo = ref(1)
const toDo = ref({} as ToDoResponse)

const api = ApiConfig.getApiService();
const repoToDo = new ToDoRepository(api);

const onFindToDo = async () => {
  await fetchToDoDocument()
}

const fetchToDoDocument = async () => {
  try {
    toDo.value = await repoToDo.getDocument(idToDo.value);
  } catch (err: any) {
    toDo.value = {} as ToDoResponse;
    const errorMessage = getErrorMessage(err);
    alert(errorMessage)
  }
}

onMounted(async () => {
  try {
    idToDo.value = parseInt(route.params.id.toString())
    await fetchToDoDocument()
  } catch (err: any) {
    alert(err.message)
  }

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
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn--primary {
  background: darkslateblue;
  font-size: 1rem;
}

.card__body {
  max-width: 600px;
}
</style>