<template>
    <div class="todo-input">
        <input @change="todoTextChange" :value="todoText" type="text" />
        <button @click="addTodoInput" >Add</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: 'TodoInput',
        data() {
            return {
                todoText: '',
            };
        },
        methods: {
            ...mapActions(['addTodo']),
            todoTextChange(e) {
                this.todoText = e.target.value;
            },
            addTodoInput() {
                this.addTodo({
                    id: Date.now(),
                    title: this.todoText,
                });
                this.todoText = '';
            },
        }
    };
</script>

<style scoped>
.todo-input{
    display: grid;
    grid-template-columns: 3fr .5fr;
    gap: 10px;
}

</style>