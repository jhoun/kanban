import axios from 'axios';
require('dotenv').config({ path: '../../.env' })
let environment = process.env.NODE_ENV;
let endpoint = environment === 'production' ? process.env.REACT_APP_POSTGRES_HOSTNAME : 'http://localhost';

export const loadUsers = () => {
  return async dispatch => {
    const response = await axios.get(`${endpoint}:8080/api/users`);
    const user = await response.data.map(data => {
      return {
        id: data.user_id,
        first_name: data.first_name
      }
    });
    dispatch({
      type: 'LOAD_USERS',
      user
    })
  }
}