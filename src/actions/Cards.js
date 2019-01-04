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
  return async dispatch => {
    const response = await axios.post('http://localhost:3001/api/new', card)
    dispatch({
      type: 'ADD_CARD',
      card: {
        title: response.data.title,
        status: response.data.statuses.name,
        priority: response.data.priorities.name,
        createdBy: response.data.createdBy.first_name,
        assignedTo: response.data.assignedTo.first_name
      }
    })
  }
}

export const editCard = (card) => {
  return async dispatch => {
    const response = await axios.put(`http://localhost:3001/api/edit/${card.card_id}`, card)
    console.log('response', response);
    dispatch({
      type: 'EDIT_CARD',
      card: {
        card_id: response.data.card_id,
        title: response.data.title,
        status: response.data.statuses.name,
        priority: response.data.priorities.name,
        createdBy: response.data.createdBy.first_name,
        assignedTo: response.data.assignedTo.first_name
      }
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