<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Vue.js To-Do App</h1>
        <AddTodo @add-todo="addTodo" />
        <v-list>
          <v-list-item
            v-for="(todo, index) in todos"
            :key="index"
            @click="$router.push({ name: 'ToDoDetail', params: { id: todo.id } })"
          >
            <template v-slot:prepend>
              <v-checkbox
                v-model="todo.completed"
                @click.stop="toggleTodoStatus(todo)"
                hide-details
              />
            </template>
            
            <v-list-item-title>{{ todo.title }}</v-list-item-title>
            
            <template v-slot:append>
              <v-btn icon="mdi-delete" size="small" @click.stop="removeTodo(todo.id)">
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddTodo from './AddTodo.vue'
import todoService from '@/service/todoService';

export default {
  name: 'ToDoList',
  components: { AddTodo },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await todoService.getTodos()
        this.todos = response.data
      } catch(error) {
        console.error('Error fetchTodos todo : ', error);
      }
    },

    async toggleTodoStatus(todo) {
      try {
        const updateTodo = {...todo, completed: !todo.completed}
        //const response = await todoService.updateTodo(todo.id, updateTodo)
        await todoService.updateTodo(todo.id, updateTodo)
        //this.fetchTodos();
        this.todos = this.todos.map( t => t.id === todo.id ?updateTodo : t);
      } catch(error) {
        console.error('Error toggleTodoStatus todo : ', error);
      }
    },

    async addTodo(todoTitle) {
      try {
        const newTodo = {title: todoTitle, completed: false};
        const response = await todoService.createTodo(newTodo);
        this.todos.push(response.data)
      } catch(error) {
        console.error('Error addTodo todo : ', error);
      }
    },

    async removeTodo(id) {
      try {
        await todoService.deleteTodo(id)
        this.todos = this.todos.filter( todo => todo.id !== id);
      } catch(error) {
        console.error('Error addTodo todo : ', error);
      }
    }
  },

  created() {
    this.fetchTodos();
  }
}
</script>