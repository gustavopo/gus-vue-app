import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

//instance.defaults.headers.common['myHeader'] = 'myHeader';
instance.defaults.headers.post['Content-type'] = 'application/json'

export default instance
