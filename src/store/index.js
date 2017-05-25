import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: []
  },
  getters: {
    todos: (state) => state.todos
  },
  actions: {
    addTodo ({commit}, text) {
      let todo = {
        id: Date.now(),
        text
      }
      commit('addTodo', todo)
    },
    removeTodo ({commit}, todo) {
      commit('removeTodo', todo)
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    removeTodo (state, todo) {
      let index = state.todos.findIndex(item => item.id === todo.id)
      state.todos.splice(index, 1)
    }
  }
})
