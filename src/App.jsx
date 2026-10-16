import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import { Route, Routes } from 'react-router-dom'



const App = () => {


  return (
    <>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/paste' element={<Paste/>}/>
          <Route path='/viewpaste/:id' element={<ViewPaste/>}/>

      </Routes>
    </>
  )
}

export default App