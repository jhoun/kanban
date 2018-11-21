export default (state = [], action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return action.card
    default:
      return state
  }
}