import axios from '../../utils/axios-auth'
import globalAxios from 'axios'
import router from '../../router'

const state = {
  idToken: null,
  userId: null,
  user: null
}

const mutations = {
  authUser(state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  },
  storeUser(state, user) {
    state.user = user
  },
  clearAuthData(state) {
    state.idToken = null
    state.userId = null
  }
}

const actions = {
  signup: ({ commit, dispatch }, authData) => {
    axios
      .post('/accounts:signUp?key=AIzaSyBuNcXIsSB8G1oVeaixLHEQfzGlb54EKoA', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(result => {
        commit('authUser', {
          token: result.data.idToken,
          userId: result.data.localId
        })

        dispatch('storeUser', authData)
        //TODO: Just store user and redirect to login page (DONT LOGIN)

        setTimeout(() => {
          router.replace('/userDetails')
        }, 1000)
      })
      .catch(err => {
        console.log(err)
      })
  },
  login: ({ commit }, authData) => {
    axios
      .post(
        '/accounts:signInWithPassword?key=AIzaSyBuNcXIsSB8G1oVeaixLHEQfzGlb54EKoA',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(result => {
        commit('authUser', {
          token: result.data.idToken,
          userId: result.data.localId
        })
        router.replace('/userDetails')
      })
      .catch(err => {
        console.log(err)
      })
  },
  logout({ commit }) {
    commit('clearAuthData')
    router.replace('/signin')
  },
  // eslint-disable-next-line no-unused-vars
  storeUser({ commit, state }, userData) {
    if (!state.idToken) {
      return
    }

    globalAxios
      .post('/users.json' + '?auth=' + state.idToken, userData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  },
  //Fetch User Data
  fetchUser({ commit, state }) {
    globalAxios
      .get('/users.json' + '?auth=' + state.idToken)
      .then(response => {
        const data = response.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }

        //TODO: Change this user for scale up
        commit('storeUser', users[0])
      })
      .catch(error => console.log(error))
  }
}

const getters = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return state.idToken !== null
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
