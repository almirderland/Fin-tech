import { createStore } from 'vuex';

const store = createStore({
  state: {
    todos: [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: false },
    ],
  },
  getters: {
    getTodos: state => state.todos,
    },
  mutations: {
    addTodo: (state, payload) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, payload) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    editTodo: (state, payload) => {
      let index = state.todos.findIndex(todo => todo.id === payload.id);
      if (index !== -1) {
        state.todos[index] = payload;
      }
    }
  },
  actions: {
    addTodo: (context, payload) => {
      context.commit('addTodo', payload);
    },
    deleteTodo: (context, payload) => {
      context.commit('deleteTodo', payload);
    },
    editTodo: (context, payload) => {
      context.commit('updateTodo', payload);
    }
  },
});

export default store;
