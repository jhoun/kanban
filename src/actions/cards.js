import data from './dummyData.json'

export const loadCards = () => {
  return dispatch => {
     dispatch({
      type: 'LOAD_CARDS',
      card: data
    })
  }
}

export const addCard = (data) => {
  return dispatch => {
    dispatch({
      type: 'ADD_CARD',
      card: data
    })
  }
}

export const editCard = (data) => {
  return dispatch => {
    dispatch({
      type: 'EDIT_CARD',
      card: data
    })
  }
}