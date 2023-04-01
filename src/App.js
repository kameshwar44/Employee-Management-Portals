import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import ViewUsers from './Components/Users/ViewUsers';
import Signup from './Components/Signup/Signup';
import Login from './Components/Signup/Login';
import House from './Components/Pages/House';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path= '/' element={<House/>} >House</Route>
        <Route exact path='/About' element={<About/>}  >About</Route>
        <Route exact path='/Contact' element={<Contact/>}  >Contact</Route>
        <Route exact path='/users/add' element={<AddUser/>}  >AddUser</Route>
        <Route exact path='/users/edit/:id' element={<EditUser/>}  >Edit User</Route>
        <Route exact path='/users/:id' element={<ViewUsers/>}  >View Users</Route>
        <Route exact path='/Signup' element={<Signup/>}  >Signup</Route>
        <Route exact path='/login' element={<Login/>}  >Login</Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
