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
  console.log('data', data);
  return dispatch => {
    dispatch({
      type: 'ADD_CARD',
      card: data
    })
  }
}