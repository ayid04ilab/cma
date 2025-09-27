import Form from './assets/components/form';
import List from './assets/components/list';
import AddContact from './assets/components/add_contact';
import './App.css'
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <h1>Contact Management System</h1>
    <BrowserRouter>
      <nav className='navbar'>
        <NavLink to="/" >HOME</NavLink>
        <NavLink to="/add_contact">Add Contact</NavLink>
        <NavLink to='/all_contacts'>All Contacts</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<><Form/><List/></>}/>
        <Route path='/add_contact' element={<AddContact/>}/>
        <Route path='/all_contacts' element={<List/>}/>
      </Routes>
  
    </BrowserRouter>
    
    
    
      
    </>
  )
}

export default App
