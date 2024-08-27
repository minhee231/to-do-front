<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Vue.js To-Do App</h1>
        <AddTodo @add-todo="addTodo" />
        <v-list>
          <v-list-item v-for="(todo, index) in todos" :key="index"
            @click="$router.push({ name: 'ToDoDetail', params: { id: todo.id } })">
            <template v-slot:prepend>
              <v-checkbox v-model="todo.completed" @click.stop="toggleTodoStatus(todo)" hide-details />
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
import todoService from '@/services/todoService.js'

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
        const response = await todoService.getTodos();
        console.log(response);
        this.todos = response.data;
      } catch (error) {
        console.error('Error fetchTodos todo: ', error);
      }
    },
    async toggleTodoStatus(todo) {
      try {
        const updateTodo = { ...todo, completed: !todo.completed }
        await todoService.updateTodo(todo.id, updateTodo);
        this.todos = this.todos.map(t => t.id === todo.id ? updateTodo : t);
      } catch (error) {
        console.error('Error toggleTodoStatus todo: ', error);
      }
    },
    async addTodo(todoTitle) {
      console.log("add todo")
      try {
        const newTodo = { title: todoTitle, completed: false };
        const response = await todoService.createTodo(newTodo);
        console.log(response)
        this.todos.push(response.data);
      } catch (error) {
        console.error('Error addTodo todo: ', error);
      }
    },
    async removeTodo(id) {
      try {
        await todoService.deleteTodo(id);
        this.todos = this.todos.filter(todo => todo.id !== id)
      } catch (error) {
        console.error('Error removeTodo todo: ', error);
      }
    }
  },
  created() {
    this.fetchTodos();
  }
}

</script>

<style scoped>
.completed .v-list-item__title {
  text-decoration: line-through;
  color: grey;
}
</style>