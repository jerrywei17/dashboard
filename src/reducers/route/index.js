const initRouteState = {
  title: ''
}

export default (state = initRouteState, action) => {
  switch (action.type) {
    case 'UPDATE_ROUTE':
      return action.payload
    default:
      return state
  }
}
