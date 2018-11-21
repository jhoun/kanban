export const showAllCards = (data) => dispatch => {
  dispatch({
    type: 'GET_CARDS',
    card: data
  })
}