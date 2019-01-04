export default (state = [], action) => {

  switch (action.type) {

    case 'LOAD_CARDS':
      return action.card

    case 'ADD_CARD':
      return [...state, action.card];

    case 'EDIT_CARD':
      return state.map(card => {
        return Object.assign({}, ...state, (card.id === action.card.card_id) ? action.card : card)
      });

    case 'DELETE_CARD':
      return state.filter(card => card.id !== action.id);

    default:
      return state
  }
}