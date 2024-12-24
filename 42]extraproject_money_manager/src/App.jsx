import React from 'react'
import MoneyManager from './components/MoneyManager'
import { Provider } from 'react-redux'
import store from './app/store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MoneyManager/>
      </Provider>
    </>
  )
}
