import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { useHeaderDispatch, useHeaderState, updateHeader } from '../../context/Header'

const Input = _ => {

  const dispatch = useHeaderDispatch()
  const { headerText } = useHeaderState()

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
        />
      </Card>
    </div>
  )
}

export default Input

const InputStyle = {
  width: '500px'
}

const CardStyle = {
  padding: '20px'
}