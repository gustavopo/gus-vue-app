<template>
  <v-container fluid>
    <v-layout column>
      <v-card class="mx-">
        <v-card-text>
          <v-flex size="96" class="mr-4">
            <v-avatar size="200" color="red">
              <v-img v-bind:src="this.avatar"></v-img>
            </v-avatar>
          </v-flex>
          <v-text-field
            readonly
            name="name"
            label="Name"
            id="name"
            v-bind:value="userData.name"
          ></v-text-field>
          <v-text-field
            readonly
            name="email"
            label="Email"
            id="email"
            v-bind:value="userData.email"
          ></v-text-field>
          <v-text-field
            readonly
            name="age"
            label="Age"
            id="age"
            v-bind:value="userData.age"
          ></v-text-field>
          <v-text-field
            readonly
            name="birthday"
            label="Birthday"
            id="birthday"
            v-bind:value="userData.birthday"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success">Edit User Data</v-btn>
          <v-btn color="success">Change Avatar</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
//import axios from 'axios'
export default {
  created() {
    this.$store.dispatch('fetchUser')

    //get random img
    //let randomNum = Math.floor(Math.random() * 1000 + 1)
    this.avatar = 'https://picsum.photos/200/300'
  },
  data() {
    return {
      avatar: ''
    }
  },
  computed: {
    userData() {
      console.log(this.$store.getters.user)
      return !this.$store.getters.user ? false : this.$store.getters.user
    }
  }
}
</script>
