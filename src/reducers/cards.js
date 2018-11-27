export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CARDS':
    console.log('state', state);
    console.log('action.card', action.card);
      return action.card
    case 'ADD_CARDS':
      return [...state, action.card];
    default:
      return state
  }
}