<template>
  <v-app>
    <NavDrawer></NavDrawer>
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
//import EventBus from './utils/event-bus'
export default {
  name: 'App',

  components: {
    Header,
    NavDrawer
  }
}
</script>
