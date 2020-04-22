<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Todo's List for User with Email: {{ userEmail }}</h1>
        <v-spacer></v-spacer>
        <!-- Input todo -->
        <v-container>
          <v-row>
            <v-col>
              <v-text-field label="New To Do..." type="todoItem" v-model="newTodo"></v-text-field>
              <div class="my-2">
                <v-btn depressed small @click="addTodo">Add</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <!-- List -->
        <v-card class="mx-auto" max-width="600">
          <v-list shaped>
            <v-list-item-group v-model="model" multiple>
              <template v-for="(item, i) in todos">
                <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

                <v-list-item
                  v-else
                  :key="`item-${i}`"
                  :value="item"
                  active-class="deep-purple--text text--accent-4"
                >
                  <template>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.title"
                        v-bind:class="{ 'done-item': item.completed}"
                      ></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn color="primary" @click="deleteTodo(item)">Delete</v-btn>
                    </v-list-item-action>

                    <v-list-item-action>
                      <v-checkbox
                        :input-value="item.completed"
                        color="deep-purple accent-4"
                        @click.prevent="toggleItem(item)"
                      ></v-checkbox>
                    </v-list-item-action>
                  </template>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      newTodo: '',
      items: ['Dog Photos', 'Cat Photos', '', 'Potatoes', 'Carrots'],
      model: ['Carrots']
    }
  },
  methods: {
    addTodo() {
      const todo = {
        id: '',
        title: this.newTodo,
        completed: false
      }
      if (!todo.title == '') {
        console.log(todo)
        this.$store.dispatch('addTodo', todo)
      } else {
        alert('Please write your new ToDo!')
      }
    },
    deleteTodo(todo) {
      //console.log(this.todo)
      this.$store.dispatch('deleteTodo', todo)
    },
    toggleItem(todo) {
      this.$store.dispatch('completeTodo', todo)
    }
  },
  computed: {
    todos() {
      return this.$store.getters.todos
    },
    userEmail() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email
    }
  },
  created() {
    this.$store.dispatch('fetchUser')
  }
}
</script>
<style scoped>
.done-item {
  text-decoration: line-through;
}
</style>