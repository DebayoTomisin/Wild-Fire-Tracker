import React from "react"
import { Provider } from 'react-redux'


import store from "./components/Redux/store"
import Nasa from "./components/Redux/index"

function AppR(){
  return(
    <Provider store={store}>
      <Nasa/>
    </Provider>
  )
}

export default AppR
