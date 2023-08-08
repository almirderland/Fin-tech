<template>
    <div class="todo-list">
        <h1>Todo List</h1>
        <TodoInput />
        <div v-for="todo in todos" :key="todo.id">
            <TodoItem :todo="todo" />
        </div>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue';
    import TodoInput from './TodoInput.vue';

    export default {
        name: 'TodoList',
        components: {
            TodoItem,
            TodoInput,
        },
        computed: {
            todos() {
                return this.$store.state.todos;
            },
        },
            
        };
</script>

<style scoped>
    .todo-list {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 50px;
        box-sizing: border-box;
    }
</style>