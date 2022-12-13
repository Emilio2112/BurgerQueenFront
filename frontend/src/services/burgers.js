import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
})


async function getBurgers () {
  try {
    const response = await API.get('/burgers')
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}

async function addBurger (newBurger) {
  const store = useAuthStore()
  try {
    const response = await API.post('/burgers', newBurger, {
      headers: {
        token: store.userToken
      }
    })
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}


export default {
  getBurgers,
  addBurger
}