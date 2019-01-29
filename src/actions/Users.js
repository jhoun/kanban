import axios from 'axios';

export const loadUsers = () => {
  return async dispatch => {
    const response = await axios.get('http://localhost:8080/api/users');
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