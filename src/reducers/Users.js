export default (state = [], action) => {
  switch (action.type) {

    case 'LOAD_USERS':
      return action.user

    default:
      return state
  }
}
