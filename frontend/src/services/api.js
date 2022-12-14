import axios from 'axios'
import { useAuthStore } from '@/stores/store'


const API = axios.create({
  baseURL: 'https://burguerqueen.onrender.com/api',
  headers: {token: localStorage.getItem('token')}
})

async function signup(newUser) {
    try {
      const response = await API.post('/auth/signup', newUser)
      return response.data
    } catch (error) {
      return { error: error.message }
    }
  }
  
  async function login(newUser) {
    try {
      const response = await API.post('/auth/login', newUser)
      return response.data
    } catch (error) {
      return { error: error.message }
    }
  
  }
  async function deleteUser(remove){
    const store = useAuthStore()
    try{
      const response = await API.delete('/users/profile',remove,{
        headers:{
          token: store.token
        }
      })
      store.logout()
      return response.data
    } catch (error){
      return error
    }
  }
  async function updateUser(newData){
    const store = useAuthStore()
    try{
      const response = await API.put('/users/profile',newData,{
        headers:{
          token: store.token
        }
      })
      return response.data
    } catch (error){
      return error
    }
  }

  export default {
    signup,
    login,
    deleteUser,
    updateUser
  }