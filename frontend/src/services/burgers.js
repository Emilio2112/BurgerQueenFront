import axios from 'axios'

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


export default {
  getBurgers
}