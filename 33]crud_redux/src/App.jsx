import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import CrudWithRedux from './Components/CrudWithRedux'

export default function App() {
  return (
    <div>
      <Provider store={store} >
        <CrudWithRedux/>
      </Provider>
    </div>
  )
}
