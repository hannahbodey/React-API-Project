import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNavbar from './components/Navbar'
import Medical from './components/Medical'
import School from './components/School'
import Home from './components/Home'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <PageNavbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/medical' element={<Medical/>} />
          <Route path='/school' element={<School/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
