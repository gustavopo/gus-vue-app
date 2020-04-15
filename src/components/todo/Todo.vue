<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Todo's List</h1>
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
              <template v-for="(item, i) in items">
                <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

                <v-list-item
                  v-else
                  :key="`item-${i}`"
                  :value="item"
                  active-class="deep-purple--text text--accent-4"
                >
                  <template v-slot:default="{ active, toggle }">
                    <v-list-item-content>
                      <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-checkbox
                        :input-value="active"
                        :true-value="item"
                        color="deep-purple accent-4"
                        @click="toggle"
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
      if (this.newTodo != '') {
        this.items.push(this.newTodo)
      }
    }
  }
}
</script>