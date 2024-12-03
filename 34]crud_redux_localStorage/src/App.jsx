import React from 'react'
import { Provider } from 'react-redux'
import Todo from './Components/Todo'
import { store } from './app/Store'

export default function App() {
  return (
    <>
    <Provider store={store} >
      <Todo/>
    </Provider>
    </>
  )
}
