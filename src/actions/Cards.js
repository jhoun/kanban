import axios from 'axios';

export const loadCards = () => {
  return async dispatch => {
    const response = await axios.get('http://localhost:3001/api/');
    const card = await response.data.map(data => {
      return {
        id: data.card_id,
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