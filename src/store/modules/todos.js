import todos from '../../data/static_todos.js'

const state = {
  todos: []
}

const mutations = {
  SET_TODOS(state, todos) {
    state.todos = todos
  },

  ADD_TODO(state, newTodo) {
    newTodo.id = state.todos.length + 1
    state.todos.push(newTodo)
  },
  DELETE_TODO(state, todo) {
    var todos = state.todos
    todos.splice(todos.indexOf(todo), 1)
  },
  COMPLETE_TODO(state, todo) {
    //Find specific todo
    const realTodo = state.todos.find(element => element.id == todo.id)
    if (realTodo != undefined) {
      realTodo.completed = !realTodo.completed
    } else {
      alert('Cannot find Todo!')
    }

    console.log(realTodo)
  }
}

const actions = {
  initTodos: ({ commit }) => {
    commit('SET_TODOS', todos)
  },

  addTodo: ({ commit }, newTodo) => {
    commit('ADD_TODO', newTodo)
  },

  deleteTodo: ({ commit }, todo) => {
    commit('DELETE_TODO', todo)
  },
  completeTodo({ commit }, todo) {
    commit('COMPLETE_TODO', todo)
  }
}

const getters = {
  todos: state => {
    return state.todos
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
