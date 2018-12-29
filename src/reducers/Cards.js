export default (state = [], action) => {

  switch (action.type) {

    case 'LOAD_CARDS':
    console.log('LOAD_CARDS', action.card);
      return action.card

    case 'ADD_CARD':
    console.log('ADD_CARD', action.card);
    console.log('state', state);
      return [...state, action.card];

    case 'EDIT_CARD':
    console.log('state_EDIT', state);
      return state.map(card => {
        return Object.assign({}, ...state, (card.id === action.card.id) ? action.card : card )
      });

    case 'DELETE_CARD':
      return state.filter(card => card.id !== action.id);

    default:
      return state
  }
}