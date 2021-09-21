import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { State } from '../../context/State'

const Header = _ => {

  const { headerText } = State()

  return (
    <AppBar position='static'>
      <div style={HeaderStyle}>{headerText || 'HEADER'}</div>
    </AppBar>
  )
}

export default Header

const HeaderStyle = {
  height: '60px',
  color: 'white'
}
