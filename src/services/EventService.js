import axios from 'axios'

// base api setup
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/jackfullstack/real_world_three',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// get request that returns the data at baseurl/events
export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
