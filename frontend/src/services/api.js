import axios from 'axios'
import { useAuthStore } from '@/stores/store'


const API = axios.create({
  baseURL: 'http://localhost:3000/api'
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
      return response.data
    } catch (error){
      return error
    }
  }
  async function update(newData){
    const store = useAuthStore()
    try{
      const response = await API.post('/users/profile',newData,{
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
    update
  }