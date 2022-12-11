import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
})


async function getRestaurants () {
  try {
    const response = await API.get('/restaurants')
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}


export default {
  getRestaurants
}