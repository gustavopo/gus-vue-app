import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Todo from '../components/todo/Todo.vue'
import UserDetails from '../components/user/UserDetails.vue'
import TestComponent from '../components/test/TestComponent.vue'
import SignupComponent from '../components/authentication/SignupComponent.vue'
import SigninComponent from '../components/authentication/Signin.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
    beforeEnter: (to, from, next) => {
      console.log(store.state.idToken)
      if (store.state.authentication.idToken) {
        //Validate if User Authenticated
        next()
      } else {
        //If !Authenticated -> Redirect '/'
        next('/')
      }
    }
  },
  {
    beforeEnter: (to, from, next) => {
      if (store.state.authentication.idToken) {
        //Validate if User Authenticated
        next()
      } else {
        //If !Authenticated -> Redirect '/'
        next('/')
      }
    },
    path: '/UserDetails',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/test',
    name: 'Test',
    component: TestComponent
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupComponent
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninComponent
  },
  {
    path: '/redirecttest',
    redirect: {
      name: 'HomeComponent'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
