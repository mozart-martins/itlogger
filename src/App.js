import React, { useEffect, Fragment } from 'react'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const App = () => {

  useEffect(() => {
    // Init Materialize
    M.AutoInit()
  })

  return (
    <Fragment>
      <SearchBar/>
      <AddBtn/>
      <AddLogModal/>
      <Logs/>
    </Fragment>
  )
}

export default App;
