<template>
  <div>
    <v-app-bar color="dark" dense dark>
      <v-app-bar-nav-icon @click.stop="showDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link to="/todo" v-if="auth">
        <v-btn color="indigo">Todo's</v-btn>
      </router-link>

      <router-link to="/test">
        <v-btn color="indigo">Test Page</v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/userDetails" v-if="auth">
        <v-btn color="indigo">Perfil</v-btn>
      </router-link>

      <router-link to="/signin" v-if="!auth">
        <v-btn color="indigo">Login</v-btn>
      </router-link>

      <v-btn v-if="auth" @click="onLogout" color="indigo">Logout</v-btn>

      <router-link to="/signup" v-if="!auth">
        <v-btn color="indigo">Signup</v-btn>
      </router-link>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import EventBus from '../../utils/event-bus'
export default {
  methods: {
    showDrawer() {
      EventBus.showDrawer()
      //EventBus.toggleNavigation()
    },
    onLogout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>
