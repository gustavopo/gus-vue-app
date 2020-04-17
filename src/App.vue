<template>
  <v-app>
    <v-content>
      <Header></Header>

      <router-view></router-view>
    </v-content>
    <!--    <v-content>
      <HelloWorld />
    </v-content>-->
  </v-app>
</template>

<script>
import Header from './components/header/Header'

export default {
  name: 'App',

  components: {
    Header
  },
  created() {
    this.$store.dispatch('initTodos')
  }
}
</script>
