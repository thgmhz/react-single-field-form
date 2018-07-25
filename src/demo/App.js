import React from 'react'
import { Form, Input, ProgressBar } from '../lib'



const progressBarStyles = {
  backgroundColor: '#ddd',
  bar: {
    backgroundColor: '#000',
  },
  counter: {
    fontFamily: 'Arial',
    fontSize: '0.7em',
  }
}

const App = () => (
  <Form>
    <Input labelText="What's your name?" />
    <Input labelText="Where do you live?" />
    <ProgressBar
      customStyles={progressBarStyles}
    />
  </Form>
)

export default App
