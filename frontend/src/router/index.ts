import {createWebHistory, createRouter} from "vue-router";
// const ToDoAdd = () => import("./../views/ToDoAdd.vue");
const ToDoCollection = () => import("./../views/ToDoCollection.vue");
const ToDoDetail = () => import("./../views/ToDoDetail.vue");
const TestingPage = () => import("./../views/TestingPage.vue");

const routes: any = [
  {
    path: "/",
    name: "To Do Collection",
    component: ToDoCollection,
  },
  {
    path: "/to-do/:id",
    name: "To Do Detail",
    component: ToDoDetail,
  },
  {
    path: "/testing",
    name: "Testing Page",
    component: TestingPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;