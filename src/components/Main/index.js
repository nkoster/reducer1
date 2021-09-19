import React from 'react'
import Input from '../Input'

const Main = _ => {
  return (
    <div style={MainStyle}>
      <Input />
    </div>
  )
}

export default Main

const MainStyle = {
  marginTop: '10px',
  border: '0px solid red',
  height: 'calc(100vh - 100px)',
  padding: '10px',
  display: 'flex'
}
