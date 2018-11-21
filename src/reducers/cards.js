export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CARDS':
      return action.card
    default:
      return state
  }
}