
import './App.css';
import Nav from './Nav';
import Moviepage from './Moviepage';
import RegistrationForm from './RegistrationForm';
import {Routes, Route} from 'react-router-dom';




function App() {
  
  return (
    <>
    <Nav/>
    <Routes>
          <Route path='/' element={<Moviepage/>} />
          <Route path='/registration' element={<RegistrationForm/>}/>
    </Routes>
    </>
    );
}

export default App;
