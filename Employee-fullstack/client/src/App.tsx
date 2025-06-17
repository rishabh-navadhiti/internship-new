import './App.css'
import { Route, Routes } from 'react-router-dom';
import EmployeeTable from './pages/EmployeeTable';
import EmployeeForm from './pages/EmployeeForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  

  return (

    <Box bg="bg.panel" minH="100vh" display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
      <Header />
      <Routes>
        <Route path='/' element={<EmployeeTable />} />
        <Route path='/add' element={<EmployeeForm />} />
        <Route path='/edit/:id' element={<EmployeeForm />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
