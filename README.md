# Vue 3 ToDo List

Это тестовое задание на Vue 3, представляющее собой простое приложение "ToDo List". Приложение позволяет создавать задачи, редактировать их, отмечать как выполненные и удалять. Для управления состоянием используется библиотека `Pinia`, а сам список задач является реактивным.

## Функционал

- Добавление задач
- Редактирование задач
- Удаление задач
- Отметка задач как выполненных
- Работа с реактивным состоянием через `Pinia`
- Хранение задач в `LocalStorage`

## Стек технологий

- **Vue 3**: используется как основной фреймворк для построения пользовательского интерфейса.
- **Pinia**: для управления состоянием приложения.
- **TypeScript**: для статической типизации.
- **Vite**: для сборки и запуска проекта.

## Установка и запуск проекта

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/dableeet/todo-vue3.git
   ```

2. Перейдите в папку проекта:

   ```bash
   cd todo-vue3
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

4. Запустите проект:

   ```bash
   npm run dev
   ```

5. Откройте приложение в браузере:

   Откройте браузер и перейдите по адресу [http://localhost:5173](http://localhost:5173).

## Как пользоваться

1. В форме введите текст задачи и нажмите "Create task" для добавления новой задачи.
2. Нажмите на кнопку "Edit" рядом с задачей, чтобы переключиться в режим редактирования. Внесите изменения и нажмите "Save".
3. Нажмите на чекбокс, чтобы отметить задачу как выполненную.
4. Для удаления задачи нажмите на кнопку "Delete".
