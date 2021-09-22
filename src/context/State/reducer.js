export const initialState = {
  headerText: ''
}

export const StateReducer = (state = initialState, action) => {
  console.log('DISPATCH', action.type)
  console.log('STATE', state)
  switch (action.type) {
    case 'updateHeader':
      return {
        ...state, headerText: action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
