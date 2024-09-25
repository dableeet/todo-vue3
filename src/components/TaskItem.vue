<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import TaskEditInput from './TaskEditInput.vue';

const { task, id, isEdit, onSave, onEdit } = defineProps<{
  id: number;
  task: string;
  isDone: boolean;
  isEdit: boolean;
  onEdit: (id: number) => void;
  onSave: (id: number, value: string) => void;
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
}>();

const taskModel = ref(task);
const saveButton = ref<HTMLElement | null>(null);

onUpdated(() => {
  if (isEdit) return;

  taskModel.value = task;
});

const formSubmitHandler = (event: Event) => {
  event.preventDefault();
  onSave(id, taskModel.value);
};

const blurHandler = (event: FocusEvent) => {
  if (event.relatedTarget === saveButton.value) {
    return;
  }

  onEdit(id);
};
</script>

<template>
  <li class="task list__task" :class="{ task_done: isDone }" ref="domNode">
    <input
      @change="onCheck(id)"
      type="checkbox"
      class="task__checkbox"
      :checked="isDone"
    />
    <p v-if="!isEdit" class="task__data">{{ task }}</p>
    <form
      v-else
      name="updateTaskForm"
      @submit="formSubmitHandler"
      class="task__form"
    >
      <TaskEditInput
        v-model="taskModel"
        class-name="task__input"
        :blur-handler="blurHandler"
      />
      <input
        @click="onSave(id, taskModel)"
        ref="saveButton"
        class="button task__save-btn"
        type="button"
        value="save"
      />
    </form>
    <div v-if="!isEdit" class="task__btn-box">
      <input
        @click="onEdit(id)"
        class="button task__edit-btn"
        type="button"
        value="edit"
      />
      <input
        @click="onDelete(id)"
        class="button task__delete-btn"
        type="button"
        value="delete"
      />
    </div>
  </li>
</template>

<style scoped lang="scss">
.task {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;

  &_done {
    background-color: rgba(0, 245, 0, 0.253);
  }

  &:not(:first-of-type) {
    border-top: 1px solid blue;
  }

  &__input {
    flex-grow: 1;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-grow: 1;
    padding-left: 10px;
  }

  &__btn-box {
    display: flex;
    column-gap: 4px;
  }

  &__edit-btn,
  &__delete-btn,
  &__save-btn {
    padding: 4px;
    border-radius: 2px;
    border-width: 0.5px;
    border-style: solid;
  }

  &__edit-btn {
    border-color: blue;
    color: blue;
  }

  &__delete-btn {
    border-color: red;
    color: red;
  }

  &__save-btn {
    border-color: green;
    color: green;
    width: 40px;
    text-align: center;
    margin-left: 14px;
  }
}
</style>
