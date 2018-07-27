import React from 'react'
import { Form, Input } from '../lib'

const customStyles = { 
  progressBar: {
    backgroundColor: '#ddd',
    bar: {
      backgroundColor: '#000',
    },
    counter: {
      fontFamily: 'Arial',
      fontSize: '0.7em',
    },
  },
}

const App = () => (
  <Form
    enableProgressBar
    customStyles={customStyles}
  >
    <Input name="name" labelText="What's your name?" />
    <Input name="whereLive" labelText="Where do you live?" />
    <Input name="job" labelText="What is your job?" />
  </Form>
)

export default App
