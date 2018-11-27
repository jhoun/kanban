export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CARDS':
      return action.card
    case 'ADD_CARD':
      return [...state, action.card];
    default:
      return state
  }
}