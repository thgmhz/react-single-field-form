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
    <Input name="name" labelText="What's your name?" />
    <Input name="whereLive" labelText="Where do you live?" />
    <Input name="job" labelText="What is your job?" />
    <ProgressBar
      customStyles={progressBarStyles}
    />
  </Form>
)

export default App
