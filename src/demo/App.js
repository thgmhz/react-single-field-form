import React from 'react'
import { Form, Input, Textarea } from '../lib'

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

const onSubmit = ({ event, formData }) => {
  event.preventDefault()
  console.log('event', event)
  console.log('formData', formData)
}

const App = () => (
  <Form
    enableProgressBar
    customStyles={customStyles}
    finalMessage="Thanks for the answers =)"
    onSubmit={onSubmit}
  >
    <Input name="name" labelText="What's your name?" />
    <Input name="whereLive" labelText="Where do you live?" />
    <Input name="job" labelText="What is your job?" />
    <Input type="email" name="email" labelText="Your e-mail" />
    <Input type="number" name="age" labelText="Your age" />
    <Textarea name="description" labelText="Your descripton" />
  </Form>
)

export default App
