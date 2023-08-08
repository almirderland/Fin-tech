<template>
    <div class="todo-item">
        <h3 v-if="!edditing">{{todo.title}}</h3>
        <input v-else type="text" @change="todoTextChange" :value="todoText" />
        <div class="todo-bnt">
            <button @click="editTodoInput(todo)">{{edditing? 'Update' : 'Edit'}}</button>
            <button @click="deleteTodo(todo.id)">Delete</button>    
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: 'TodoItem',
        data() {
            return {
                todoText: this.todo.title,
                edditing: false,
            };
        },
        props: {
            todo: {},
        },
        methods: {
            ...mapActions(['deleteTodo', 'editTodo']),
            todoTextChange(e) {
                this.todoText = e.target.value;
            },
            editTodoInput(todo) {
                this.edditing = !this.edditing;
                if(this.edditing){
                    this.todoText = todo.title;
                    this.editTodo(todo);
                }else{
                    todo.title = this.todoText;
                }
            },
        },
    };
</script>

<style scoped>
.todo-item {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #046236;
  border-radius: 5px;
}
.todo-bnt{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

</style>