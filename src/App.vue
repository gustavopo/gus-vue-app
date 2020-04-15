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
//import HomeComponent from './components/homeComponent/Home'
//import UserDetails from './components/homeComponent/userDetails'

export default {
  name: 'App',

  components: {
    Header
    //HomeComponent,
    //UserDetails
  },

  data: () => ({
    //
  })
}
</script>
