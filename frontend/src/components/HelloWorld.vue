<template>
  <h1>{{ msg }}</h1>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>
<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue'
import {ToDoResponse} from "../models/responses/ToDoReponse";
import {ToDoRepository} from "../repositories/ToDoRepository";
import {getErrorMessage} from "../utils/GlobalLib";
import {ApiConfig} from "../api/ApiConfig";
import {ListToDoResponse} from "../models/responses/ListToDoResponse";
import CardToDo from "./CardToDo.vue";

defineProps<{ msg: string }>()

const count = ref(0)
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
  await fetchToDoDocument()
})

</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.btn--primary {
  margin-bottom: 2rem;
}
</style>
