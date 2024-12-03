import React from 'react'
import { Provider } from 'react-redux'
import CounterRedux from './component/CounterRedux'
import { store } from './app/Store'

export default function App() {
  return (
    <div>
      <Provider store={store} >
          <CounterRedux/>
      </Provider>
    </div>
  )
}
