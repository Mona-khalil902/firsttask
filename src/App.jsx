import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fashion from'./Components/Fashion/Fashion'
import Imagehero from'./Components/Imagehero/Imagehero'

function App() {

  return (
    <div id='Maincontainer'>
      <Fashion></Fashion>
      <Imagehero></Imagehero>

    </div>
  )
}

export default App
