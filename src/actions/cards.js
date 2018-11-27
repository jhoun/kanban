import data from './dummyData.json'


export const loadCards = () => {
  return dispatch => {
     dispatch({
      type: 'LOAD_CARDS',
      card: data
    })
  }
}

export const addCard = () => {
  return dispatch => {
    dispatch({
      type: 'ADD_CARD',
      card: data
    })
  }
}