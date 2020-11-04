import axios from 'axios'
import { URL } from '../../helper/env'
const state = () => {
  return {
    dataUsers: {
      detailUser: {},
      isLoading: false
    }
  }
}
const getters = {
  getDetailUser (state) {
    return state.dataUsers
  }
}
const mutations = {
  GET_DETAIL_USER (state, payload) {
    state.dataUsers.detailUser = payload
  },
  SET_ALL_LOADING (state, payload) {
    state.dataUsers.isLoading = payload
  }
}

const actions = {
  registrasi (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios
        .post(`${URL}/users/register`, payload)
        .then(result => {
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URL}/users/login`, payload)
        .then(result => {
          localStorage.setItem('id', result.data.data.id)
          localStorage.setItem('username', result.data.data.username)
          localStorage.setItem('image', result.data.data.image)
          resolve(result.data)
        })
        .catch(err => {
          reject(err.message)
        })
    })
  },
  actgetDetailUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${URL}/users/getdetail/${payload}`)
        .then(result => {
          context.commit('GET_DETAIL_USER', result.data.data[0])
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  actUpdateUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${URL}/users/update/${payload.id}`, payload.dataUser)
        .then(result => {
          resolve(result.data.message)
          localStorage.setItem('username', result.data.data.username)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  deleteMessage (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${URL}/users/deleteMessage/${payload}`)
        .then(result => {
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  logout (context) {
    return new Promise(resolve => {
      localStorage.removeItem('id')
      localStorage.removeItem('image')
      localStorage.removeItem('username')
      resolve()
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
