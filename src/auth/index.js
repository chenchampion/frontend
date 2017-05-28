import {router} from '../main'

const API_URL = 'http://127.0.0.1:9000/'
const LOGIN_URL = API_URL + 'rest-auth/login/'
const LOGOUT_URL = API_URL + 'rest-auth/logout/'
const SIGNUP_URL = API_URL + 'rest-auth/registration/'
const GROUP_URL = API_URL + 'users/'
const USER_COMPANY_URL = API_URL + 'company/'

export default {

  user: {
    authenticated: false,
    username: '',
    email: ''
  },

  saveLocalData (token, creds) {
    localStorage.setItem('id_token', token)
    localStorage.setItem('username', creds.username)
    localStorage.setItem('email', creds.email)
    this.user.authenticated = true
    this.user.username = creds.username
    this.user.email = creds.email
  },
  clearLocalData () {
    localStorage.removeItem('id_token')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    this.user.authenticated = false
    this.user.username = ''
    this.user.email = ''
  },
  login (context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then((data) => {
      this.saveLocalData(data.body.token, creds)

      if (redirect) {
        context.$router.push({path: redirect})
      }
    }, (err) => {
      context.error = err
    })
  },

  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      this.saveLocalData(data.body.token, creds)

      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      context.error = err
    })
  },

  logout (context) {
    context.$http.post(LOGOUT_URL).then((data) => {
      this.clearLocalData()
    }, (err) => {
      this.clearLocalData()
      context.error = err
    })
    context.$router.push({name: 'LoginView'})
  },
  checkAuth () {
    var token = localStorage.getItem('id_token')
    var creds = {
      username: localStorage.getItem('username'),
      email: localStorage.getItem('email')
    }
    if (token) {
      this.saveLocalData(token, creds)
    } else {
      this.clearLocalData()
    }
  },
  getAuthHeader () {
    var authHearder = {'Authorization': 'Bearer ' + localStorage.getItem('id_token')}
    return authHearder
  },
  getGroupMember (context) {
    context.$http.get(GROUP_URL).then((response) => {
      console.log(response.body)
      context.datas = context.datas.concat(response.body)
      context.busy = false
      console.log(context.datas)
      context.$nextTick(() => {
        console.log('loading finished')
        context.$store.commit('UPDATE_LOADING', false)
      })
    })
  },
  getUserCompany (context) {
    context.$http.get(USER_COMPANY_URL).then((response) => {
      console.log(response.body[0])
      context.boject = response.body[0]
    }, (err) => {
      context.error = err
      context.boject = {}
    })
  }
}
