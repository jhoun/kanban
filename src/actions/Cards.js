
import Axios from 'axios';

export const loadCards = () => {
  return dispatch => {
    Axios
      .get('http://localhost:3001/api/')
      .then(data => {
        let card =  data.data.map(data => {
          console.log('data', data);
          return {
            title: data.title,
            status: data.statuses.name,
            priority: data.priorities.name,
            createdBy: data.createdBy.first_name,
            assignedTo: data.assignedTo.first_name
          }
        });

        dispatch({
          type: 'LOAD_CARDS',
          card
        })
      })
  }
}

export const addCard = (card) => {
  return dispatch => {
    dispatch({
      type: 'ADD_CARD',
      card
    })
  }
}

export const editCard = (card) => {
  return dispatch => {
    dispatch({
      type: 'EDIT_CARD',
      card
    })
  }
}

export const deleteCard = (id) => {
  return dispatch => {
    dispatch({
      type: 'DELETE_CARD',
      id
    })
  }
}