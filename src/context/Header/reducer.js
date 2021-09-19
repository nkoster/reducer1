export const initialState = {
  headerText: ''
}

export const HeaderReducer = (initialState, action) => {
  console.log('DISPATCH', action.type)
  switch (action.type) {
    case 'updateHeader':
      return {
        headerText: action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
