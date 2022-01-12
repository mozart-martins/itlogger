import React, { useEffect } from 'react'

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const App = () => {

  useEffect(() => {
    // Init Materialize
    M.AutoInit()
  })

  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  )
}

export default App;
