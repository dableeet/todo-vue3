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
        <input
          type="text"
          v-model="newTaskModel"
          class="taskform__input"
          placeholder="write your new task"
        />
        <input
          @click="dispatchCreateTask()"
          type="button"
          value="create"
          class="button taskform__create-btn"
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

<style scoped lang="scss">
.todo {
  &__container {
    position: absolute;
    width: 724px;
    min-height: 320px;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px 5px;
    row-gap: 24px;
  }

  &__list {
    width: 80%;
  }
}

.taskform {
  display: flex;

  &__input {
    border: none;
    outline: none;
    border-bottom: 1px solid blue;
    font-size: xx-large;
  }

  &__create-btn {
    background-color: blue;
    color: white;
    padding: 4px;
    width: 62px;
    text-align: center;
  }
}
</style>
