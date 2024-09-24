import { ref, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import codeGenerator from '@/utils/code-generator';

export const useTodosStore = defineStore('todoList', () => {
  const STORAGE_KEY = 'todo';

  const todos = ref<
    { id: number; task: string; isDone: boolean; isEdit: boolean }[]
  >(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));

  watchEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value));
  });

  const createId = codeGenerator(todos.value.length);

  const createTask = (task: string) => {
    const value = task.trim();

    if (!value) return;

    todos.value.push({
      id: createId(),
      task: value,
      isDone: false,
      isEdit: false,
    });
  };

  const toggleIsEditById = (id: number) => {
    todos.value.map((el) => {
      if (el.id === id) {
        el.isEdit = !el.isEdit;
      }
      if (el.id !== id && el.isEdit) {
        el.isEdit = false;
      }
    });
  };

  const updateTask = (id: number, updatedTask: string) => {
    todos.value.map((el) => {
      if (id === el.id) {
        el.task = updatedTask;
        el.isEdit = false;
      }
    });
  };

  const toggleTaskStatus = (id: number) => {
    todos.value.map((el) => (el.id === id ? (el.isDone = !el.isDone) : el));
  };

  const deleteTask = (id: number) => {
    todos.value.splice(
      todos.value.findIndex((el) => el.id === id),
      1
    );
  };

  return {
    todos,
    toggleIsEditById,
    updateTask,
    deleteTask,
    createTask,
    toggleTaskStatus,
  };
});
