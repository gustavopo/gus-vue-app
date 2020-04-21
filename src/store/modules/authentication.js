import axios from '../../utils/axios-auth'
//import globalAxios from 'axios'

const state = {
  idToken: null,
  userId: null,
  user: null
}

const mutations = {
  authUser(state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  }
}

const actions = {
  signup: ({ commit }, authData) => {
    axios
      .post('/accounts:signUp?key=AIzaSyBuNcXIsSB8G1oVeaixLHEQfzGlb54EKoA', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(result => {
        console.log(result)
        commit('authUser', {
          token: result.data.idToken,
          userId: result.data.localId
        })
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
        console.log(result)
        commit('authUser', {
          token: result.data.idToken,
          userId: result.data.localId
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const getters = {
  todos: state => {
    return state.user
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
