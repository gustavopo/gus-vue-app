<template>
  <v-app>
    <NavDrawer @toggleNavigation="drawer= $event" :drawer="drawer"></NavDrawer>
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
import NavDrawer from './components/navigation-drawer/NavigationDrawer'
import EventBus from './utils/event-bus'
export default {
  name: 'App',

  components: {
    Header,
    NavDrawer
  },
  data: function() {
    return {
      drawer: false
    }
  },
  created() {
    this.$store.dispatch('initTodos')
    EventBus.$on('showDrawer', () => {
      this.drawer = true
      console.log(this.drawer)
    })
    EventBus.$on('toggleNavigation', () => {
      if (this.drawer == undefined) {
        this.drawer = true
      } else {
        this.drawer = !this.drawer
      }

      console.log(this.drawer)
    })
  }
}
</script>
