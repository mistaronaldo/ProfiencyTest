
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout';

import Home from './pages/Home';
import AddCompany from './pages/AddCompany.jsx';
import AddEmployee from './pages/AddEmployee.jsx';
import Company from './pages/Company.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';




function App() {

  const addNewCompany = async (newCompany) => {
    const res = await fetch('/api/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCompany)
    });
    return;
  }
  const addNewEmployee = async (newEmployee) => {
    console.log(newEmployee);
    const res = await fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEmployee)
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/add-company' element={<AddCompany AddNewCompany={addNewCompany} />} />
          <Route path='/company/:id' element={<Company />} />
          <Route path='/add-employee/:id' element={<AddEmployee addNewEmployee={addNewEmployee} />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Route>
      </>

    )

  );


  return <RouterProvider router={router} />
}

export default App
