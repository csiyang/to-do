import React from 'react'

import './App.css'
import InputForm from './components/InputForm'
import ItemsList from './components/ItemsList'

function App() {
  return (
    <div className="main">
      <h1>To Do List</h1>
      <InputForm />
      <ItemsList />
    </div>
  )
}

export default App
