<script setup lang="ts">
import { onUpdated, ref } from 'vue';

const { task, id, isEdit } = defineProps<{
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

onUpdated(() => {
  if (isEdit) return;

  taskModel.value = task;
});
</script>

<template>
  <li class="list__task" ref="domNode">
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
      @submit="
        (event) => {
          event.preventDefault();
          onSave(id, taskModel);
        }
      "
    >
      <input type="text" v-model="taskModel" />
      <input
        @click="onSave(id, taskModel)"
        class="task__save-btn"
        type="button"
        value="save"
      />
    </form>
    <input
      v-if="!isEdit"
      @click="onEdit(id)"
      class="task__edit-btn"
      type="button"
      value="edit"
    />

    <input
      v-if="!isEdit"
      @click="onDelete(id)"
      class="task__delete-btn"
      type="button"
      value="delete"
    />
  </li>
</template>
