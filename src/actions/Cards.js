import card from './dummyData.json'

export const loadCards = () => {
  return dispatch => {
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