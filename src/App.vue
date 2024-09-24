<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from './stores/todos';
import TaskItem from './components/TaskItem.vue';

const {
  todos,
  toggleIsEditById,
  updateTask,
  deleteTask,
  createTask,
  toggleTaskStatus,
} = useTodosStore();

const newTaskModel = ref('');

const dispatchCreateTask = () => {
  createTask(newTaskModel.value);
  newTaskModel.value = '';
};
</script>

<template>
  <main>
    <section class="container todo__container">
      <form
        @submit="
          (event) => {
            event.preventDefault();
            dispatchCreateTask();
          }
        "
        name="taskform"
        class="taskform todo__taskform"
      >
        <input type="text" v-model="newTaskModel" />
        <input
          @click="dispatchCreateTask()"
          type="button"
          value="create task"
        />
      </form>
      <ul class="list todo__list">
        <TaskItem
          v-for="todo in todos"
          v-bind="todo"
          :on-edit="toggleIsEditById"
          :on-save="updateTask"
          :on-delete="deleteTask"
          :on-check="toggleTaskStatus"
          :key="todo.id"
        />
      </ul>
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
