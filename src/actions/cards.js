import data from './dummyData.json'


export const loadCards = () => {
  return dispatch => {
     dispatch({
      type: 'LOAD_CARDS',
      card: data
    })
  }
}