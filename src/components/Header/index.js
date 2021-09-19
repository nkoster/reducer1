import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useState } from '../../context/State'

const Header = _ => {

  const { headerText } = useState()

  return (
    <AppBar position='static'>
      <div style={StateStyle}>{headerText}</div>
    </AppBar>
  )
}

export default Header

const StateStyle = {
  height: '60px',
  color: 'white'
}
