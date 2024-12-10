import React from 'react'
import { Provider } from 'react-redux'
import Api from './ReduxApi/Api'
import { store } from './app/store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Api />
      </Provider>
    </>
  )
}
