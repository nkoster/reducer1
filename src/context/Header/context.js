import React, { useReducer, createContext, useContext } from 'react'
import { HeaderReducer, initialState } from './reducer'

const HeaderStateContext = createContext()
const HeaderDispatchContext = createContext()

export function useHeaderState() {
  const context = useContext(HeaderStateContext)
  if (!context) {
    throw new Error('useHeaderState must be a child of HeaderProvider')
  }
  return context
}

export function useHeaderDispatch() {
  const context = useContext(HeaderDispatchContext)
  if (!context) {
    throw new Error('useHeaderDispatch must be a child of HeaderProvider')
  }
  return context
}

export const HeaderProvider = ({ children }) => {
  const [user, dispatch] = useReducer(HeaderReducer, initialState)
  return (
    <HeaderStateContext.Provider value={user}>
      <HeaderDispatchContext.Provider value={dispatch}>
        {children}
      </HeaderDispatchContext.Provider>
    </HeaderStateContext.Provider>
  )
}
