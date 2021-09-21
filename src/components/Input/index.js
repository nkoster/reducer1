import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { useStateDispatch, useState, updateHeader } from '../../context/State'

const Input = _ => {

  const dispatch = useStateDispatch()
  const { headerText } = useState()

  const updateInput = evt => {
    updateHeader(dispatch, evt.target.value)
  }

  return (
    <div style={InputStyle}>
      <Card style={CardStyle}>
        <TextField
          value={headerText}
          label='Input'
          variant='outlined'
          onChange={updateInput}
          style={InputStyle}
        />
      </Card>
    </div>
  )
}

export default Input

const InputStyle = {
  width: '100%'
}

const CardStyle = {
  margin: '10px',
  padding: '20px'
}