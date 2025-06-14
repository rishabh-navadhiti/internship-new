import './App.css'
import { Route, Routes } from 'react-router-dom';
import EmployeeTable from './pages/EmployeeTable';
import EmployeeForm from './pages/EmployeeForm';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<EmployeeTable />} />
        <Route path='/add' element={<EmployeeForm />} />
      </Routes>
    </>
  )
}

export default App
