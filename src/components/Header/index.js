import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { State } from '../../context/State'

const Header = _ => {

  const { headerText } = State()

  return (
    <AppBar position='static'>
      <h2 style={HeaderStyle}>{headerText || 'HEADER'}</h2>
    </AppBar>
  )
}

export default Header

const HeaderStyle = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
