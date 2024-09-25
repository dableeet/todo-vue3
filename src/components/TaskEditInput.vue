<script setup lang="ts">
import { onMounted, ref } from 'vue';

defineProps<{
  className: string;
  blurHandler: (event: FocusEvent) => void;
}>();

const model = defineModel();

const inputRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  inputRef.value?.focus();
});

const escapeKeyHandler = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && event.target instanceof HTMLElement) {
    event.target.blur();
  }
};
</script>

<template>
  <input
    v-model="model"
    ref="inputRef"
    type="text"
    :class="className"
    @keyup="escapeKeyHandler"
    @blur="blurHandler"
  />
</template>
