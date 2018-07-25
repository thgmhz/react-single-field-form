import React from 'react'
import { Form, Input, ProgressBar } from '../lib'

const App = () => (
  <Form>
    <Input labelText="What's your name?" />
    <Input labelText="Where do you live?" />
    <ProgressBar />
  </Form>
)

export default App
