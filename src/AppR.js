import React from "react"
import { Provider } from 'react-redux'


import store from "./components/Redux/store"
import Nasa from "./components/Redux/index"
import Header from "./components/Redux/Header"

function AppR(){
  return(
    <Provider store={store}>
      <Header/>
      <br/>
      <br/>
      <Nasa/>
    </Provider>
  )
}

export default AppR
