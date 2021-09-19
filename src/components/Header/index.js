import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useHeaderState } from '../../context/Header'

const Header = _ => {

  const { headerText } = useHeaderState()

  return (
    <AppBar position='static'>
      <div style={HeaderStyle}>{headerText}</div>
    </AppBar>
  )
}

export default Header

const HeaderStyle = {
  height: '60px'
}
