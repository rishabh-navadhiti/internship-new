import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Box } from '@mui/material'
import ProjectDetails from './pages/ProjectDetails'

function App() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects'>
          <Route index element={<Projects />} />
          <Route path=':projectId' element={<ProjectDetails />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </Box>
  )
}

export default App
