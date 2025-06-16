import './App.css'
import { Route, Routes } from 'react-router-dom';
import EmployeeTable from './pages/EmployeeTable';
import EmployeeForm from './pages/EmployeeForm';
import Header from './components/Header/Header';
import { Box } from '@chakra-ui/react';
import EditForm from './pages/EditForm';

function App() {
  

  return (

    <Box bg="bg.panel" minH="100vh">
      <Header />
      <Routes>
        <Route path='/' element={<EmployeeTable />} />
        <Route path='/add' element={<EmployeeForm id={null}/>} />
        <Route path='/edit/:id' element={<EditForm />} />
      </Routes>
    </Box>
  )
}

export default App
