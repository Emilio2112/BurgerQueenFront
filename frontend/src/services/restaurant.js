import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'https://burguerqueen.onrender.com/api',
  headers: {token: localStorage.getItem('token')}
})


async function getRestaurants () {
  try {
    const response = await API.get('/restaurants')
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}

async function getRestaurantBurger (id) {
  try {
    const response = await API.get(`/restaurants/restaurant/${id}`)
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}

async function addRestaurant (newRestaurant) {
  const store = useAuthStore()
  try {
    const response = await API.post('/restaurants', newRestaurant, {
      headers: {

        token: store.token,

      }
    })
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}

async function updateRestaurant (newData) {
  const store = useAuthStore()
  try {
    const response = await API.put('/restaurants', newData, {
      headers: {
        token: store.token,
      }
    })
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}

async function getOneResturant(id) {
  try {
    const response = await API.get(`/restaurants/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

export default {
  getRestaurants,
  getRestaurantBurger,
  addRestaurant,
  updateRestaurant,
  getOneResturant
}