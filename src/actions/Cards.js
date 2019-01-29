import axios from 'axios';

export const loadCards = () => {
  return async dispatch => {
    const response = await axios.get('http://localhost:8080/api/');
    const card = await response.data.map(data => {
      return {
        card_id: data.card_id,
        title: data.title,
        status: data.statuses.name,
        status_id: data.statuses.status_id,
        priority: data.priorities.name,
        priority_id: data.priorities.priority_id,
        createdBy: data.createdBy.first_name,
        createdBy_id: data.createdBy.user_id,
        assignedTo: data.assignedTo.first_name,
        assignedTo_id: data.assignedTo.user_id
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
    const response = await axios.post('http://localhost:8080/api/new', card)
    dispatch({
      type: 'ADD_CARD',
      card: {
        card_id: response.data.card_id,
        title: response.data.title,
        status: response.data.statuses.name,
        status_id: response.data.statuses.status_id,
        priority: response.data.priorities.name,
        priority_id: response.data.priorities.priority_id,
        createdBy: response.data.createdBy.first_name,
        createdBy_id: response.data.createdBy.user_id,
        assignedTo: response.data.assignedTo.first_name,
        assignedTo_id: response.data.assignedTo.user_id
      }
    })
  }
}

export const editCard = (card) => {
  return async dispatch => {
    const response = await axios.put(`http://localhost:8080/api/edit/${card.card_id}`, card)
    dispatch({
      type: 'EDIT_CARD',
      card: {
        card_id: card.card_id,
        title: response.data.title,
        status: response.data.statuses.name,
        status_id: response.data.statuses.status_id,
        priority: response.data.priorities.name,
        priority_id: response.data.priorities.priority_id,
        createdBy: response.data.createdBy.first_name,
        createdBy_id: response.data.createdBy.user_id,
        assignedTo: response.data.assignedTo.first_name,
        assignedTo_id: response.data.assignedTo.user_id
      }
    })
  }
}

export const deleteCard = (card) => {
  return async dispatch => {
    await axios.delete(`http://localhost:8080/api/delete/${card}`, { id: card })
    dispatch({
      type: 'DELETE_CARD',
      card
    })
  }
}