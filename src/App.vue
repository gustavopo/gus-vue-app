<template>
  <v-app>
    <NavDrawer></NavDrawer>
    <v-content>
      <Header></Header>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
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

<style>
.slide-enter-active {
  animation: slide-in 200ms easy-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
